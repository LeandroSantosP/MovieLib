import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { CardMovie } from '../../components/CardMovie';
import useFetcCustom from '../../components/CostomsHooks/useFetchCustom';
import { Erro } from '../../components/ErrosAndLoading/Erro';
import { Loading } from '../../components/ErrosAndLoading/Loading';

import styles from './Search.module.css'

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export const Search = () => {
  const { request, loading, error } = useFetcCustom();
  const [searchMovie, setSearchMovie] = useState([]);
  const [ searchParams ] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const getSearchMovie = async (url) => {
      const { response } = await request(url);
      setSearchMovie(response.data.results)
    }
    const urlSearch = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovie(urlSearch)
  }, [query]);


  if(loading) return <Loading />
  if(error !== null) return <Erro error={error} />
  return (
    <div className={styles.container}>
      {searchMovie && searchMovie.map((movieSearch, index) => (
        <div key={index}>
          <CardMovie movie={movieSearch} />
        </div>
      ))}
    </div>
  )
}

