import styles from './styles.module.scss';
import Head from 'next/head';
import { Header } from '../../components/Header';  //importa o Header
import { useState, FormEvent } from 'react';

export default function Category() {
  const [name, setName] = useState('')

  async function handleRegister(event: FormEvent){
    event.preventDefault();

    alert("Categoria: " + name)
  }

  return (
    <>
      <Head>
        <title>Nova Categoria</title>
      </Head>
      <div>
        <Header />
        
        <main className={styles.container}>
          <h1>Cadastrar Categorias</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <input 
            type="text"
            placeholder="Digite o nome da categoria"
            className={styles.input}
            value={name}
            onChange={ (e) => setName(e.target.value) }
          />

          <button className={styles.buttonAdd} type="submit">
            Cadastrar
          </button>
          </form>
        </main>
      </div>
    </>
  )
}