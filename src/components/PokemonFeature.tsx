import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { FC } from 'react';
import { usePokemonFeature } from '../hooks/usePokemonFeature';

export const PokemonFeature: FC<{ name: string }> = ({ name }) => {
  const pokemonFeature = usePokemonFeature(name);

  return (
    <Stack p={4}>
      <UnorderedList>
        <ListItem>
          <Text>{`体力；${pokemonFeature.baseHappiness}`}</Text>
        </ListItem>
        <ListItem>
          <Text>{`捕獲率${pokemonFeature.captureRate}`}</Text>
        </ListItem>
        <ListItem>
          <Text>{`色；${pokemonFeature.color}`}</Text>
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};
