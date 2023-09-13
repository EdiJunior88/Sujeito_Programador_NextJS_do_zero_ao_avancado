import { getCurrentUser } from "@/app/lib/session";
import styles from "./dashboard.module.css";
import Head from "next/head";
import PageRedirectHome from "../[others]/page";
import DashboardClient from "../dashboard-client/page";

const Dashboard = async () => {
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
