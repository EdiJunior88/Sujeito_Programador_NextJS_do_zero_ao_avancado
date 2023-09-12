import { HTMLProps } from "react";
import styles from "./textarea.module.css";

const TextAreaGeneric = ({ ...rest }: HTMLProps<HTMLTextAreaElement>) => {
  return <textarea className={styles.textarea} {...rest}></textarea>;
};

export default TextAreaGeneric;
