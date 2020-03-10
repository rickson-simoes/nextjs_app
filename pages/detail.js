import React from 'react';
import axios from 'axios';

import Link from 'next/link';

import withAnalytics from '../src/hocs/withAnalytics';

const Detail = ({user}) => (
  <div>
    <h2>{user.login}</h2>
    <img src={user.avatar_url} width="100" />
  <br></br>
    <Link href='/users'>
      <a> Voltar Usuarios </a>
    </Link>
    /
    <Link href='/'>
      <a> Voltar Home </a>
    </Link>
  </div>
);

Detail.getInitialProps = async ({query}) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`);

  return { user:response.data }
}

export default withAnalytics()(Detail);