import { InputHTMLAttributes } from "react";
import styles from "./textarea.module.css";

const TextArea = ({ ...rest }: InputHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={styles.textarea} {...rest}></textarea>;
};

export default TextArea;
