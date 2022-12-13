import React from 'react'
import { Link } from 'react-router-dom'

import styles from './CardMovie.module.css'
import {
   AiFillStar
} from 'react-icons/ai'
const imgUrlVite = import.meta.env.VITE_IMG;

export const CardMovie = ({ movie, showLink = true }) => {

   return (
      <div className={styles.main_container}>
         <img src={imgUrlVite + movie.poster_path} alt={movie.title} />
         <h1>{movie.title} <br /> <span> <AiFillStar/> {movie.vote_average}</span></h1>
         <p>Data de lançamento: <br /> <span>{movie.release_date}</span> </p>
         <p>{movie.tagline}</p>
         {showLink && <Link to={`/movie/${movie.id}`} className={styles.btn}>Saiba Mais</Link>}
      </div>
   )
}
