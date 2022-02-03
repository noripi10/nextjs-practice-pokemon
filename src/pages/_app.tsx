import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import dynamic from 'next/dynamic';

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
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <NoSSR>
          <Component {...pageProps} />
        </NoSSR>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
