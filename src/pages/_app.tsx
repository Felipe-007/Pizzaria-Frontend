import '../../styles/globals.scss';
import { AppProps } from "../../node_modules/next/app";
import { AuthProvider } from '../contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';  //Personalizando alertas
import { ToastContainer } from 'react-toastify';  //Personalizando alertas

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </AuthProvider>
  )
}

export default MyApp
