import { HTMLProps, TextareaHTMLAttributes } from "react";
import styles from "./textarea.module.css";

const Textarea = ({ ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={styles.textarea} {...rest}></textarea>;
};

export default Textarea;
