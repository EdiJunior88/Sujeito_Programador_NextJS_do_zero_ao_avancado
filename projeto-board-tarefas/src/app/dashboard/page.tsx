import { getCurrentUser } from "@/lib/session";
import styles from "./dashboard.module.css";
import Head from "next/head";
import PageRedirectHome from "../[others]/page";
import TextArea from "../components/textarea/page";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

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

      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual a sua tarefa?</h1>

            <form>
              <TextArea placeholder='Digite qual sua tarefa...' />

              <div className={styles.checkBoxArea}>
                <input type='checkbox' className={styles.checkbox} />
                <label>Deixar a tarefa pública?</label>
              </div>

              <button type='submit' className={styles.button}>
                Registrar
              </button>
            </form>
          </div>
        </section>

        <section className={styles.taskContainer}>
          <h1>Minhas Tarefas</h1>

          <article className={styles.task}>
            <div className={styles.tagContainer}>
              <label className={styles.tag}>PÚBLICO</label>
              <button className={styles.shareButton}>
                <FiShare2 size={22} color='#3183ff' />
              </button>
            </div>

            <div className={styles.taskContent}>
              <p>Minha primeira tarefa de exemplo!</p>
              <button className={styles.trashButton}>
                <FaTrash size={24} color='#ea3140' />
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
