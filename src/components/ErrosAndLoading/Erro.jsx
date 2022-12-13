import React from 'react'
import styles from './Erro.module.css'
import { BiSad } from 'react-icons/bi'

export const Erro = ({ error }) => {
   return (
      <div className={styles.container}>
         <h1><BiSad /></h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus facere possimus natus laborum sapiente nisi aperiam corrupti libero ullam consequatur eos maxime omnis quam fuga, quibusdam vitae repellat, reprehenderit id?</p>
      </div>
   )
}
