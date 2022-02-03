import { Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { pokemonListAtom, pokemonListSelector } from '../state';

export const usePokemonList = (page: number) => {
  const [pokemonList, setPokemonList] = useRecoilState(pokemonListSelector(page));
  // const setPokemonList = useSetRecoilState(pokemonListAtom(page));

  useEffect(() => {
    if (!!pokemonList) {
      setPokemonList(pokemonList);
    }
  }, [pokemonList]);

  return pokemonList;
};
