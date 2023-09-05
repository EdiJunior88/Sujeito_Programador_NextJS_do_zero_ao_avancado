import styles from "./dashboard.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu painel de tarefas",
  description: "dashboard",
};

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Página painel</h1>
    </div>
  );
};

export default Dashboard;
