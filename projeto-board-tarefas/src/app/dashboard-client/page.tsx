"use client";
import styles from "./dashboard-client.module.css";
import { Textarea } from "../components/textarea/page";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { ChangeEvent, FormEvent, useState } from "react";

const DashboardClient = () => {
  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);

  function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
    setPublicTask(event.target.checked);
  }

  function handleRegisterTask(event: FormEvent) {
    event.preventDefault();

    if (input === "") return;
  }

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <div className={styles.contentForm}>
          <h1 className={styles.title}>Qual a sua tarefa?</h1>

          <form onSubmit={handleRegisterTask}>
            <Textarea
              placeholder='Digite qual sua tarefa...'
              value={input}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setInput(event.target.value)
              }
            />

            <div className={styles.checkBoxArea}>
              <input
                type='checkbox'
                className={styles.checkbox}
                checked={publicTask}
                onChange={handleChangePublic}
              />
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
  );
};

export default DashboardClient;
