import styles from "./textarea.module.css";

const Textarea = ({ ...rest }) => {
  return <textarea className={styles.textarea} {...rest}></textarea>;
};

export default Textarea;
