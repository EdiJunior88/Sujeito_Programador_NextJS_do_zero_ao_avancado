import styles from "./textarea.module.css";

const TextArea = ({ ...rest }) => {
  return <textarea className={styles.textarea} {...rest}></textarea>;
};

export default TextArea;
