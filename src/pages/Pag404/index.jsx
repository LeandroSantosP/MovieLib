import React from 'react'
import styles from './Pag404.module.css'
import { AiOutlineWarning } from 'react-icons/ai'

const Pag404 = () => {
   return (
      <div className={styles.container}>
         <h1><AiOutlineWarning /></h1>
         <p>PagNotFond / 404</p>
      </div>
   )
}

export default Pag404