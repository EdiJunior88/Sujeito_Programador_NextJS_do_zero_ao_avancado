import { TextareaHTMLAttributes } from "react";
import styles from "./textarea.module.css";

const TextArea = ({ ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={styles.textarea} {...rest}></textarea>;
};

export default TextArea;
