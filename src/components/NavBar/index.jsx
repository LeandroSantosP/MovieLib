import React, { useState } from 'react'
import { BiCameraMovie } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

import styles from './NavBar.module.css'



export const NavBar = () => {
   const [value, setValue] = useState('');
   const navegation = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      if(value.length > 0){
         navegation(`/search?q=${value}`)
         setValue("");
      }
      return;
   }

   return (
      <div className={styles.container}>

         <Link className={styles.logo} to='/' title='home'>
            <BiCameraMovie />
            <h1>Movie Lib</h1>
         </Link>

      <form onSubmit={handleSubmit}>
         <nav className={styles.nav_container}>
            <input onChange={({target}) => setValue(target.value)} value={value} type="text"  placeholder='Digite um Nome de um Filme'/>
            <button type='submit'>Pesquisar</button>
         </nav>
      </form>
      </div>
   )
}
