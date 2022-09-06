import Head from "../../../node_modules/next/head";
import logoImg from "../../../public/logo.svg";
import styles from "../../../styles/home.module.scss";
import Image from "../../../node_modules/next/image";
import { Input } from "../../components/ui/Input/index";
import { Button } from "../../components/ui/Button/index";
import Link from "../../../node_modules/next/link";  //faz a navegação entre as paginas

export default function Signup() {
  return (
    <>
      <Head>
        <title>Cadastrar-se</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" />


        <div className={styles.login}>
          <h1>Criando sua conta.</h1>
          <form>
            <Input
              placeholder="Digite o seu nome"
              type="text"
            >
            </Input>

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
              Cadastrar
            </Button>
          </form>

          <Link href="/">
            <a className={styles.text}>Já possui uma conta? Realizar login</a>
          </Link>
        </div>
      </div>
    </>
  )
}
