import Head from "../../node_modules/next/head";
import logoImg from "../../public/logo.svg";
import styles from "../../styles/home.module.scss";
import Image from "../../node_modules/next/image";
import { Input } from "../components/ui/Input/index";
import { Button } from "../components/ui/Button/index";
import Link from "../../node_modules/next/link"; //faz a navegação entre as paginas
import { AuthContext } from "../contexts/AuthContext";
import { useContext, FormEvent, useState } from "react";

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if(email === '' || password === ''){
      alert("Preencha os dados")
    }

    setLoading(true);

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false);
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
              value={email}
              onChange = { (e) => setEmail(e.target.value) }
            />

            <Input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange = { (e) => setPassword(e.target.value) }
            />

            <Button
              type="submit"
              loading={loading}
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
