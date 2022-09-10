//Os usuario não logados poderão acessar = Visitantes
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

//função para páginas que somente poderá ser acessada por visitantes
export function canSSRGuest<P>(fn: GetServerSideProps<P>){
  return async(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const cookies = parseCookies(ctx);

    //Se o usuário tentar acessar a pagina porem tendo já um login salvo redirecionamos
    if(cookies['@nextauth.token']){
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        }
      }
    }
    return await fn(ctx);
  }
}