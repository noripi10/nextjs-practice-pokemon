import { Suspense } from 'react';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';

import { Nav } from '../components/Nav';
import { PokemoList } from '../components/PokemonList';

const Home: NextPage<{ page: string }> = (props) => {
  const pageNum = parseInt(props.page);

  const router = useRouter();

  const onPrevios = () => {
    router.push(`/?page=${pageNum - 1}`);
  };
  const onNext = () => {
    router.push(`/?page=${pageNum + 1}`);
  };

  return (
    <Flex minH='100vh' flexDir={'column'}>
      <Box px={4} bgGradient={'linear(to-r, pink.800, pink.400)'} fontSize='xs'>
        IndexはRecoilとRestfulの組み合わせ graphql-pokemonはSSRでGraphql使用
      </Box>
      <Nav />
      <Box p={2}>
        <Text fontSize={'lg'}>Pokemon List</Text>
      </Box>
      <Suspense fallback={'loading...'}>
        <PokemoList page={pageNum} />
      </Suspense>
      <HStack
        p={2}
        position={'fixed'}
        bottom={0}
        bgColor={'darkviolet'}
        width={'100%'}
        bgGradient={'linear(to-r, #f00,  #cb4444)'}
      >
        <Button onClick={onPrevios} bgColor={'blackAlpha.800'} isDisabled={pageNum === 1}>
          Previos
        </Button>
        <Button onClick={onNext} bgColor={'blackAlpha.800'}>
          Next
        </Button>
      </HStack>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (cnt: GetServerSidePropsContext) => {
  const { query } = cnt;
  const page = (query.page || '1') as string;

  return {
    props: {
      page,
    },
  };
};

export default Home;
