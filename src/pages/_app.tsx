import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import dynamic from 'next/dynamic';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

const theme = extendTheme({
  styles: {
    global: {
      'html,body': {
        backgroundColor: '#333',
        color: 'gray.100',
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const NoSSR = dynamic(() => import('../components/NoSsr'));
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <NoSSR>
            <Component {...pageProps} />
          </NoSSR>
        </ChakraProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
