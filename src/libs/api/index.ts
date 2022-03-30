import axios from 'axios';
import { PokemonFeature, PokemonListItem } from '../../types/pokemon';
import pokemonNames from '../../pokemonNames.json';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const basePokemonUri = 'https://pokeapi.co/api/v2/pokemon-species/';
const basePokemonListUri = 'https://pokeapi.co/api/v2/pokemon-species/?limit=50&offset=';

export const fetchPokemonFeature = async (name: string) => {
  const response = await axios.get(basePokemonUri + name);
  const data = response.data;
  await new Promise((resolve) => setTimeout(() => resolve(true), 500));
  return {
    baseHappiness: data.base_happiness,
    captureRate: data.capture_rate,
    color: data.color.name,
  } as PokemonFeature;
};

export const fetchPokemonList = async (page: number) => {
  const offset = 10 * (page - 1);
  const response = await axios.get(basePokemonListUri + offset.toString());
  const pokemonList = response.data.results as PokemonListItem[];

  const pokemonListWithJp = pokemonList.map((p) => {
    const jp = pokemonNames.find((e) => e.en.toLowerCase().replace('. ', '-') === p.name);
    if (!!jp) {
      return { name: p.name, url: p.url, jpName: jp.ja };
    }
    return p;
  });

  return pokemonListWithJp;
};

export const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache(),
});
