import { HTMLProps } from "react";
import styles from "./textarea.module.css";

const TextArea = ({ ...rest }: HTMLProps<HTMLTextAreaElement>) => {
  return <textarea className={styles.textarea} {...rest}></textarea>;
};

export default TextArea;