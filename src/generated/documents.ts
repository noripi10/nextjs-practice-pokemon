import { gql } from '@apollo/client';

gql`
  query GetPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
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
        number
        name
        image
      }
      maxHP
      image
    }
  }
`;
