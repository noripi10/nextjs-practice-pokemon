import { atomFamily, selectorFamily } from 'recoil';
import { fetchPokemon, fetchPokemonList } from '../libs/api';
import { PokemonListItem } from '../types/pokemon';

// export const pokemonAtom = atomFamily({
//   key: 'pokemon',
//   default: null,
// });

// export const pokemonSelector = selectorFamily({
//   key: 'pokemonSelector',
//   get:
//     (name: string) =>
//     async ({ get }) =>
//       get(pokemonAtom(name)) || (await fetchPokemon(name)),
// });

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
