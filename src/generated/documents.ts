import { gql } from '@apollo/client';

gql`
  query PokemonsQuery($first: Int!) {
    pokemons(first: $first) {
      id
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
      fleeRate
      maxCP
      evolutions {
        id
        name
        image
      }
      maxHP
      image
    }
  }
`;
