import { gql } from '@apollo/client';

gql`
  query PokeQuery {
    pokemon_v2_pokemon(order_by: { id: asc }) {
      id
      name
      height
    }
  }
`;
