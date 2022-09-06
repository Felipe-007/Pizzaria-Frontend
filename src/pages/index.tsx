import Head from "../../node_modules/next/head";
import logoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import Image from "../../node_modules/next/image";
import { Input } from "../components/ui/Input/index";
import { Button } from "../components/ui/Button/index";
import Link from "../../node_modules/next/link"; //faz a navegação entre as paginas

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" />


        <div className={styles.login}>
          <form>
            <Input
              placeholder="Digite seu email" // no container Index faz descrição ser diferente com o Input
              type="text" // no container Index faz descrição ser diferente com o TextArea
            />
          </form>
          <form>
            <Input
              placeholder="Senha"
              type="password"
            />

            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>
          </form>

          <Link href="/signup">
            <a className={styles.text}>Cadastrar-se</a>
          </Link>
        </div>
      </div>
    </>
  )
}
