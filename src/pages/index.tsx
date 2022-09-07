import Head from "../../node_modules/next/head";
import logoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import Image from "../../node_modules/next/image";
import { Input } from "../components/ui/Input/index";
import { Button } from "../components/ui/Button/index";
import Link from "../../node_modules/next/link"; //faz a navegação entre as paginas
import { AuthContext } from "../contexts/AuthContext";
import { useContext, FormEvent } from "react";

export default function Home() {
  const { signIn } = useContext(AuthContext)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: "algum@teste.com",
      password: "123123"
    }

    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email" // no container Index faz descrição ser diferente com o Input
              type="text" // no container Index faz descrição ser diferente com o TextArea
            />

            <Input
              placeholder="Sua senha"
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
            <a className={styles.text}>Nao possui uma conta? Cadastre-se</a>
          </Link>

        </div>
      </div>
    </>
  )
}
