import { atomFamily, selectorFamily } from 'recoil';
import { fetchPokemonFeature, fetchPokemonList } from '../libs/api';
import { PokemonFeature, PokemonListItem } from '../types/pokemon';

export const pokemonAtom = atomFamily<PokemonFeature | null, string>({
  key: 'pokemon',
  default: null,
});

export const pokemonSelector = selectorFamily<PokemonFeature, string>({
  key: 'pokemonSelector',
  get:
    (name: string) =>
    async ({ get }) =>
      get(pokemonAtom(name)) || (await fetchPokemonFeature(name)),
  set:
    (name: string) =>
    ({ set }, newValue) => {
      set(pokemonAtom(name), newValue);
    },
  dangerouslyAllowMutability: true,
});

export const pokemonListAtom = atomFamily<PokemonListItem[] | null, number>({
  key: 'pokemonList',
  default: null,
});

export const pokemonListSelector = selectorFamily<PokemonListItem[], number>({
  key: 'pokemonListSelector',
  get:
    (page: number) =>
    async ({ get }) =>
      get(pokemonListAtom(page)) || (await fetchPokemonList(page)),
  set:
    (page: number) =>
    ({ set }, newValue) => {
      // set関数は非同期がサポートされてない（2021/2/1現在）
      set(pokemonListAtom(page), newValue);
    },
  dangerouslyAllowMutability: true,
});
