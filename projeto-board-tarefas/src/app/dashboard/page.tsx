import { getCurrentUser } from "@/lib/session";
import styles from "./dashboard.module.css";
import Head from "next/head";
import PageRedirectHome from "../[others]/page";
import { TextArea } from "../components/textarea/page";

export default async function Dashboard() {
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
      </main>
    </div>
  );
}
