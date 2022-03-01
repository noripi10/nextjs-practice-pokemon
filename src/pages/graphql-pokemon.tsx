import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';
import { client } from '../libs/api';
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  OrderedList,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  PokemonsQueryQuery,
  QueryPokemonsArgs,
  PokemonsQueryDocument,
  PokemonsQueryQueryVariables,
  Pokemon,
} from '../generated/graphql';
import pokemonNames from '../pokemonNames.json';
import { Suspense } from 'react';

interface ExtensPokemon extends Pokemon {
  jpName: string;
  evolutions: ExtensPokemon[] | undefined | null;
}

type Props = {
  pokemons: ExtensPokemon[] | undefined | null;
};

const GraphqlPokemon: NextPage<Props> = (props) => {
  // CSR
  // const { data, loading, error } = useQuery<PokemonsQueryQuery, QueryPokemonsArgs>(PokemonsQueryDocument, {
  //   variables: { first: 151 },
  // });

  // if (loading) {
  //   return (
  //     <Box display={'flex'} flex={1} minH={'100vh'} justifyContent='center' alignItems={'center'}>
  //       <Center flexDirection={'column'}>
  //         <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='red.500' size='xl' />
  //         <Text>loading...</Text>
  //       </Center>
  //     </Box>
  //   );
  // }
  // if (error) {
  //   return <Text color={'red.800'}>{error.message}</Text>;
  // }

  // const list = data?.pokemons?.map((e) => ({
  //   ...e,
  //   jpName: pokemonNames.find((e2) => e2.en === e?.name)?.ja,
  //   evolutions: e?.evolutions?.map((e3) => ({ ...e3, jpName: pokemonNames.find((e4) => e4.en === e3?.name)?.ja })),
  // }));

  return (
    <>
      <Box
        bgGradient={'linear(to-r, red.600, red.400)'}
        p={2}
        position='sticky'
        top={0}
        w='full'
        zIndex={99}
        mb={8}
        boxShadow='dark-lg'
      >
        <Heading>GraphQL Pokemon</Heading>
      </Box>
      <Box>
        <Suspense
          fallback={() => (
            <Box display={'flex'} flex={1} minH={'100vh'} justifyContent='center' alignItems={'center'}>
              <Center flexDirection={'column'}>
                <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='red.500' size='xl' />
                <Text>loading...</Text>
              </Center>
            </Box>
          )}
        >
          <List display='flex' flexWrap='wrap' justifyContent={'center'}>
            {props.pokemons?.map((e) => (
              <ListItem key={e?.id}>
                <Flex
                  display={'flex'}
                  justifyContent='flex-start'
                  borderRadius={8}
                  minW={400}
                  height={260}
                  bgColor={'gray.900'}
                  p={2}
                  m={2}
                >
                  <VStack flex={1} justifyContent='flex-start' alignItems={'flex-start'}>
                    <Text fontWeight={'bold'}>{e?.jpName}</Text>
                    <HStack>
                      <VStack>
                        <Image src={e!.image!} alt='pokemon-image' width={200} height={200} />
                      </VStack>
                      <VStack flex={1} h='full' justifyContent={'flex-start'} alignItems='flex-start' overflow={'auto'}>
                        <Text>高さ:{e?.height?.maximum}</Text>
                        <Text>重さ:{e?.weight?.maximum}</Text>
                        <Text>HP:{e?.maxHP}</Text>
                        <Text>CP:{e?.maxCP}</Text>
                        <Text>{`<進化先>`}</Text>
                        {e?.evolutions ? (
                          <OrderedList m={0} p={0}>
                            {e?.evolutions?.map((e2) => (
                              <ListItem key={e2?.id}>{e2?.jpName}</ListItem>
                            ))}
                          </OrderedList>
                        ) : (
                          <span>なし</span>
                        )}
                      </VStack>
                    </HStack>
                  </VStack>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Suspense>
      </Box>
    </>
  );
};

// SSR
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await client.query<PokemonsQueryQuery, PokemonsQueryQueryVariables>({
    query: PokemonsQueryDocument,
    variables: { first: 151 },
  });

  const list = data?.pokemons?.map((e) => ({
    ...e,
    jpName: pokemonNames.find((e2) => e2.en === e?.name)?.ja ?? null,
    evolutions:
      e?.evolutions?.map((e3) => ({ ...e3, jpName: pokemonNames.find((e4) => e4.en === e3?.name)?.ja })) ?? null,
  }));

  return {
    props: {
      pokemons: list,
    },
  };
};

export default GraphqlPokemon;
