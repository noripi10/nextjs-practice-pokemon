import { useQuery } from '@apollo/client';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Query_Root, PokeQueryDocument, PokeQueryQueryVariables } from '../generated/graphql';

const GraphqlPokemon: NextPage = () => {
  const { data, loading, error } = useQuery<Query_Root, PokeQueryQueryVariables>(PokeQueryDocument, { variables: {} });
  if (loading) {
    return (
      <Box display={'flex'} flex={1} minH={'100vh'} justifyContent='center' alignItems={'center'}>
        <Text>loading...</Text>
      </Box>
    );
  }
  if (error) {
    return <Text color={'red.800'}>{error.message}</Text>;
  }
  return (
    <Box>
      <Heading>GraphQL Pokemon</Heading>
      <List>
        {data?.pokemon_v2_pokemon?.map((e) => (
          <ListItem key={e.name}>
            <Text>
              {e.id} {e.name}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GraphqlPokemon;
