import React from 'react';
import styled from 'styled-components';
import { Corpo, Teste } from '../styles/style';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Title = styled.h1`
  font-size: 40px;
`;

const Home = () => (
  <>
    <Head>
      <title> Home </title>
    </Head>
    <img src="/static/horse.jpg" width="200" />
    <Title>Hello world</Title>
    <Link href='/users'>
      <a>Usuários</a>
    </Link>
  </>
);

export default withAnalytics()(Home);