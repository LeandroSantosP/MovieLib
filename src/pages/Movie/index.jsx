import React from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/ErrosAndLoading/Loading';
import { CardMovie } from '../../components/CardMovie';
import useFetcCustom from '../../components/CostomsHooks/useFetchCustom';

import { GrLanguage } from 'react-icons/gr'
import {
  BsWallet2,
  BsCashCoin
} from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RxLapTimer } from 'react-icons/rx'
import styles from './Movie.module.css';
import './movie.css'



const movieApi = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imgUrlVite = import.meta.env.VITE_IMG;

export const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetais] = React.useState();
  const { request, data, loading, error } = useFetcCustom();

  React.useEffect(() => {
    const getMovieDtails = async (url) => {
      const { response } = await request(url)
      setMovieDetais(response.data);
    }

    const datailsMovieUrl = `${movieApi}${id}?${apiKey}`;
    getMovieDtails(datailsMovieUrl);
  }, []);

  const formatDollar = (value) => {
    return value.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
  }

  console.log(movieDetails)

  if(loading) return <Loading />
  if(error !== null) return <Erro error={error} />
  return (
    <div className={styles.container}>
        { movieDetails && (
      <>
            <CardMovie movie={movieDetails} showLink={false} />
          <section className='all_content' >
              <h1>{movieDetails.original_title}</h1>
                <div className='inicial-infos'>
                  <p className='p-elements'> <GrLanguage /> | {movieDetails.production_countries.lenght > 0 && movieDetails.production_countries[0].name} | {movieDetails.original_language}</p>
                  <p className='p-elements'><BsWallet2/> Gastos: {formatDollar(movieDetails.budget)}</p>
                  <p className='p-elements'><BsCashCoin /> Bilheteria: {formatDollar(movieDetails.revenue)}</p>
                  <p className='p-elements'><RxLapTimer/> Duração: {movieDetails.runtime} minutos</p>
                  <h2 className='gen'>Gêneros</h2>
                    {movieDetails.genres.map((gen, index) => <li className='list-gen' key={index}><MdKeyboardArrowRight/> {gen.name}</li>)}
                </div>
                <h2 className='description_title'>Description</h2>
                <p className='description'>{movieDetails.overview} </p>
                <div  className='more_details'>
                  <ul className='company'>
                    {movieDetails.production_companies.map(comp => <img key={comp.id} className='company_logo' src={imgUrlVite + comp.logo_path} alt={comp.name} />)}
                  </ul>
                </div>
        </section>
      </>
    )
  }
</div>
)
}
