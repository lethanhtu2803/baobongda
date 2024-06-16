import React from 'react';
import useSWR from 'swr';
import { baoBongDaAPI, fetcher } from '../../helper/config';
const TestAPI = () => {
    const { data, error, isLoading } = useSWR(
        baoBongDaAPI.getAccountByUsername('acc1'), fetcher
    )
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 
  // render data
  return <div>hello {data.username}!</div>
};

export default TestAPI;