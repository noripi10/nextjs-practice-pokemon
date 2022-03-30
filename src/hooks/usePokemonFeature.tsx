import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { pokemonSelector } from '../state';

export const usePokemonFeature = (name: string) => {
  const [pokemonFeature, setPokemonFeature] = useRecoilState(pokemonSelector(name));

  useEffect(() => {
    if (pokemonFeature) {
      setPokemonFeature(pokemonFeature);
    }
  }, [pokemonFeature]);

  return pokemonFeature;
};
