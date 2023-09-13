import { getCurrentUser } from "@/app/lib/session";
import styles from "./dashboard.module.css";
import Head from "next/head";
import PageRedirectHome from "../[others]/page";
import DashboardClient from "../dashboard-client/page";
import { cookies } from "next/headers";

//Esta é uma função assíncrona que busca todos os cookies presentes na solicitação HTTP.
//Ela faz isso chamando cookies().getAll(), que é uma maneira de acessar todos os cookies
//na solicitação HTTP atual.

//Em seguida, a função retorna uma Promise que será resolvida após um atraso de 1000 milissegundos
//(1 segundo). Isso foi adicionado apenas para simular uma operação demorada, pois o
//acesso aos cookies é geralmente instantâneo.
async function getCookieData() {
  const cookieData = cookies().getAll();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cookieData);
    }, 1000);
  });
}

const Dashboard = async () => {
  const cookieData = await getCookieData();

  interface InterfaceDashboard {
    user: { email: string };
  }

  //Verifica se getCurrentUser() retorna um valor válido antes de desestruturar a propriedade user
  try {
    const result = await getCurrentUser();

    if (!result) {
      //Se o getCurrentUser() for indefinido ou nulo, retorna para a página inicial.
      return PageRedirectHome();
    }

    const { user } = result as InterfaceDashboard;

    return (
      <div className={styles.container}>
        <Head>
          <title>Meu painel de tarefas</title>
        </Head>
        <DashboardClient user={user} />
      </div>
    );
  } catch (error) {
    //Lidando com quaisquer outros erros que possam ocorrer durante getCurrentUser()
    console.error("Error: ", error);
    return null; //Retorna uma mensagem de erro
  }
};

export default Dashboard;
