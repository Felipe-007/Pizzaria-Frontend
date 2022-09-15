import styles from './styles.module.scss';
import Head from 'next/head';
import { canSSRAuth } from '../../utils/canSSRAuth';
import { Header } from '../../components/Header';

export default function Product() {
  return (
    <>
      <Head>
        <title>Novo Produto</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Novo Produto</h1>

          <form className={styles.form}>
            <select>
              <option>Bebida</option>
              <option>Pizza</option>
            </select>

            <input
              type="text"
              placeholder="Digite o nome do produto"
              className={styles.input}
            />

            <input
              type="text"
              placeholder="Preço do produto"
              className={styles.input}
            />

            <textarea
              placeholder="Descreva o seu produto."
              className={styles.input}
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

//somente usuários logados poderão acessar
export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})