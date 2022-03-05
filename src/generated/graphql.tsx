import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Represents a Pokémon's attack types */
export type Attack = {
  __typename?: 'Attack';
  /** The damage of this Pokémon attack */
  damage?: Maybe<Scalars['Int']>;
  /** The name of this Pokémon attack */
  name?: Maybe<Scalars['String']>;
  /** The type of this Pokémon attack */
  type?: Maybe<Scalars['String']>;
};

/** Represents a Pokémon */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>;
  /** The classification of this Pokémon */
  classification?: Maybe<Scalars['String']>;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  fleeRate?: Maybe<Scalars['Float']>;
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>;
  /** The ID of an object */
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<Scalars['Int']>;
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<Scalars['Int']>;
  /** The name of this Pokémon */
  name?: Maybe<Scalars['String']>;
  /** The identifier of this Pokémon */
  number?: Maybe<Scalars['String']>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The type(s) of this Pokémon */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>;
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Array<Maybe<Attack>>>;
  /** The special attacks of this Pokémon */
  special?: Maybe<Array<Maybe<Attack>>>;
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  /** The maximum value of this dimension */
  maximum?: Maybe<Scalars['String']>;
  /** The minimum value of this dimension */
  minimum?: Maybe<Scalars['String']>;
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  /** The amount of candy to evolve */
  amount?: Maybe<Scalars['Int']>;
  /** The name of the candy to evolve */
  name?: Maybe<Scalars['String']>;
};

/** Query any Pokémon by number or name */
export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<Array<Maybe<Pokemon>>>;
  query?: Maybe<Query>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars['Int'];
};

export type PokemonsQueryQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type PokemonsQueryQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null, maxHP?: number | null, image?: string | null, weight?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null, height?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null, attacks?: { __typename?: 'PokemonAttack', fast?: Array<{ __typename?: 'Attack', name?: string | null } | null> | null, special?: Array<{ __typename?: 'Attack', name?: string | null } | null> | null } | null, evolutions?: Array<{ __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, image?: string | null } | null> | null } | null> | null };


export const PokemonsQueryDocument = gql`
    query PokemonsQuery($first: Int!) {
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

/**
 * __usePokemonsQueryQuery__
 *
 * To run a query within a React component, call `usePokemonsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonsQueryQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePokemonsQueryQuery(baseOptions: Apollo.QueryHookOptions<PokemonsQueryQuery, PokemonsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PokemonsQueryQuery, PokemonsQueryQueryVariables>(PokemonsQueryDocument, options);
      }
export function usePokemonsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokemonsQueryQuery, PokemonsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PokemonsQueryQuery, PokemonsQueryQueryVariables>(PokemonsQueryDocument, options);
        }
export type PokemonsQueryQueryHookResult = ReturnType<typeof usePokemonsQueryQuery>;
export type PokemonsQueryLazyQueryHookResult = ReturnType<typeof usePokemonsQueryLazyQuery>;
export type PokemonsQueryQueryResult = Apollo.QueryResult<PokemonsQueryQuery, PokemonsQueryQueryVariables>;
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Attack",
        "fields": [
          {
            "name": "damage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Pokemon",
        "fields": [
          {
            "name": "attacks",
            "type": {
              "kind": "OBJECT",
              "name": "PokemonAttack",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "classification",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "evolutionRequirements",
            "type": {
              "kind": "OBJECT",
              "name": "PokemonEvolutionRequirement",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "evolutions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Pokemon",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "fleeRate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "height",
            "type": {
              "kind": "OBJECT",
              "name": "PokemonDimension",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "maxCP",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "maxHP",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resistant",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "types",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "weaknesses",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "weight",
            "type": {
              "kind": "OBJECT",
              "name": "PokemonDimension",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PokemonAttack",
        "fields": [
          {
            "name": "fast",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Attack",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "special",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Attack",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PokemonDimension",
        "fields": [
          {
            "name": "maximum",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "minimum",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PokemonEvolutionRequirement",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "pokemon",
            "type": {
              "kind": "OBJECT",
              "name": "Pokemon",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "pokemons",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Pokemon",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;