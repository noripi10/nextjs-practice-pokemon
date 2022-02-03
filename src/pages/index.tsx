import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import { Box, Button, HStack, Text } from '@chakra-ui/react';

import { Nav } from '../components/Nav';
import { PokemoList } from '../components/PokemonList';
import { Suspense } from 'react';

const Home: NextPage<{ page: string }> = (props) => {
  const pageNum = parseInt(props.page);

  const router = useRouter();

  const onPrevios = () => router.push(`/?page=${pageNum - 1}`);
  const onNext = () => router.push(`/?page=${pageNum + 1}`);

  return (
    <>
      <Box minH='100vh'>
        <Box px={4} bgGradient={'linear(to-r, pink.800, pink.400)'}>
          お知らせ表示見ないな感じの場所
        </Box>
        <Nav />
        <Box p={2} px={4}>
          <Text fontSize={'lg'}>Pokemon List</Text>
          <Suspense fallback={'loading...'}>
            <PokemoList page={pageNum} />
          </Suspense>
        </Box>
        <HStack p={2} position={'fixed'} bottom={0} bgColor={'darkviolet'} width={'100%'}>
          <Button onClick={onPrevios} bgColor={'blackAlpha.800'} isDisabled={pageNum === 1}>
            Previos
          </Button>
          <Button onClick={onNext} bgColor={'blackAlpha.800'}>
            Next
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (cnt: GetServerSidePropsContext) => {
  const { query } = cnt;
  const page = (query.page || '1') as string;

  // console.info({ page });

  return {
    props: {
      page,
    },
  };
};

export default Home;
