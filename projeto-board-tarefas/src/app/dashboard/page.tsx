import { getCurrentUser } from "@/lib/session";
import styles from "./dashboard.module.css";
import Head from "next/head";
import PageRedirectHome from "../[others]/page";

interface DashboardProps {
  children?: React.ReactNode;
}

export default async function Dashboard({ children }: DashboardProps) {
  const user = await getCurrentUser();

  if (!user) {
    return PageRedirectHome();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <h1>Pagina Painel</h1>
    </div>
  );
}
