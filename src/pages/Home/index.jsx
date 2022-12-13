import React, { useEffect } from 'react'
import { CardMovie } from '../../components/CardMovie';
import useFetcCustom from '../../components/CostomsHooks/useFetchCustom';
import { Erro } from '../../components/ErrosAndLoading/Erro';
import { Loading } from '../../components/ErrosAndLoading/Loading';

const movieApi = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imgUrlVite = import.meta.env.VITE_IMG;

import styles from './Home.module.css'

export const Home = () => {
  const [movie, setMovie] = React.useState([]);
  const { data, request, loading, error } = useFetcCustom();

  useEffect(() => {
    async function getBestMovies(url) {
      const { response } = await request(url);
      setMovie(response.data.results);
    }
    const movieRequestUrl = `${movieApi}top_rated?${apiKey}`
    getBestMovies(movieRequestUrl);
  }, []);


  if(loading) return <Loading />
  if(error !== null) return <Erro error={error} />
  return (
    <div className={styles.container}>
      {movie && movie.map(movie => (
        <div key={movie.id}>
          <CardMovie movie={movie}/>
        </div>
      ))}
    </div>
  )
}
