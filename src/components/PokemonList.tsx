import { Box, Button, Flex, Heading, Spacer, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { usePokemonList } from '../hooks/usePokemonList';
import { pokemonListAtom } from '../state';

type Props = {
  page: number;
};

export const PokemoList: FC<Props> = ({ page }) => {
  usePokemonList(page);
  const pokemonList = useRecoilValue(pokemonListAtom(page));
  console.log({ pokemonList });
  return (
    <Stack display={'flex'} flexDirection={'column'} pt={4}>
      {pokemonList?.map((pokemon) => (
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
          <Button bgColor={'purple.600'} variant={'outline'} _hover={{ backgroundColor: 'purple.900' }}>
            詳細
          </Button>
        </Box>
      ))}
    </Stack>
  );
};
