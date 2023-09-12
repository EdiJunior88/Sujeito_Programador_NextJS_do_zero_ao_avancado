import { getCurrentUser } from "@/lib/session";
import styles from "./dashboard.module.css";
import Head from "next/head";
import PageRedirectHome from "../[others]/page";
import DashboardClient from "../dashboard-client/page";

const Dashboard = async () => {
  const user = await getCurrentUser();

  //Se o usuário deslogar ou tentar abrir outra página deslogado
  //Será redirecionado para a página principal (Home)
  if (!user) {
    return PageRedirectHome();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <DashboardClient />
    </div>
  );
};

export default Dashboard;
