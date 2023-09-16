"use client";
import styles from "./dashboard-client.module.css";
import TextArea from "../components/textarea/TextAreaComponent";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Link from "next/link";

interface InterfaceDashboardClient {
  user: { email: string } | undefined;
}

interface InterfaceTasksProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}

const DashboardClient = ({ user }: InterfaceDashboardClient) => {
  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);
  const [tasks, setTasks] = useState<InterfaceTasksProps[]>([]);

  useEffect(() => {
    async function loadTarefas() {
      const tarefasRef = collection(db, "tarefas");
      const filter = query(
        tarefasRef,
        orderBy("created", "desc"),
        where("user", "==", { user })
      );

      onSnapshot(filter, (snapshot) => {
        // console.log(snapshot);
        let lista = [] as InterfaceTasksProps[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            created: doc.data().created,
            public: doc.data().public,
            tarefa: doc.data().tarefa,
            user: doc.data().user.user,
          });
        });

        setTasks(lista);
      });
    }

    loadTarefas();
  }, [user]);

  const handleChangePublic = (event: ChangeEvent<HTMLInputElement>) => {
    setPublicTask(event.target.checked);
  };

  const handleRegisterTask = async (event: FormEvent) => {
    event.preventDefault();

    if (input === "") return;

    //Insere os dados no Firebase (banco de dados)
    try {
      await addDoc(collection(db, "tarefas"), {
        tarefa: input,
        created: new Date(),
        user: { user },
        public: publicTask,
      });

      setInput("");
      setPublicTask(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleShare = async (id: string) => {
    // console.log(id);
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}/tasks/${id}`
    );

    alert("URL copiada com sucesso!");
  };

  const handleDeleteTask = async (id: string) => {
    const docRef = doc(db, "tarefas", id);
    await deleteDoc(docRef);
  };

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <div className={styles.contentForm}>
          <h1 className={styles.title}>Qual a sua tarefa?</h1>

          <form onSubmit={handleRegisterTask}>
            <TextArea
              placeholder='Digite qual sua tarefa...'
              value={input}
              onChange={handleChange}
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

        {tasks.map((item) => (
          <article key={item.id} className={styles.task}>
            {item.public && (
              <div className={styles.tagContainer}>
                <label className={styles.tag}>PÚBLICO</label>
                <button
                  className={styles.shareButton}
                  onClick={() => handleShare(item.id)}>
                  <FiShare2 size={22} color='#3183ff' />
                </button>
              </div>
            )}

            <div className={styles.taskContent}>
              {item.public ? (
                <Link href={`/task/${item.id}`}>
                  <p>{item.tarefa}</p>
                </Link>
              ) : (
                <p>{item.tarefa}</p>
              )}
              <button
                className={styles.trashButton}
                onClick={() => handleDeleteTask(item.id)}>
                <FaTrash size={24} color='#ea3140' />
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default DashboardClient;
