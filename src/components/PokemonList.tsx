import { Box, Button, Collapse, Flex, HStack, Spacer, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { usePokemonList } from '../hooks/usePokemonList';
import { pokemonListAtom } from '../state';
import { PokemonListItem } from '../types/pokemon';

type Props = {
  page: number;
};

export const PokemoList: FC<Props> = ({ page }) => {
  const pokemonList = usePokemonList(page);
  // const pokemonList = useRecoilValue(pokemonListAtom(page));
  console.log({ pokemonList });
  return (
    <Stack flex={1} pt={4} mx={4}>
      {pokemonList?.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </Stack>
  );
};

type PropItem = {
  pokemon: PokemonListItem;
};

export const PokemonItem: FC<PropItem> = ({ pokemon }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Box
        key={pokemon.name}
        display={'flex'}
        flexDirection={'row'}
        px={'4'}
        py={'2'}
        alignItems={'center'}
        borderWidth={'0.5px'}
        borderColor={'blackAlpha.700'}
        borderRadius={'4'}
        _hover={{ cursor: 'pointer', bgColor: 'gray.800' }}
      >
        <Text>{`${pokemon.name}（${pokemon.jpName}）`}</Text>
        <Spacer />
        <Button
          bgColor={'purple.600'}
          variant={'outline'}
          _hover={{ backgroundColor: 'purple.900' }}
          onClick={onToggle}
        >
          詳細
        </Button>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={'flex'}
          flex={1}
          flexDirection='column'
          height={300}
          bgColor={'#334'}
          borderWidth='0.5px'
          borderTopWidth={0}
          borderColor='blackAlpha.700'
          p={2}
        >
          <Box flex={1} flexDirection='column'>
            <Text>Detail</Text>
          </Box>
          <HStack display={'flex'} justifyContent={'flex-end'} m={2}>
            <Button onClick={onToggle}>Close</Button>
          </HStack>
        </Box>
      </Collapse>
    </Box>
  );
};
