import styles from "./textarea.module.css";

interface TextareaProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ placeholder, value, onChange }: TextareaProps) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      onChange={onChange}></textarea>
  );
};

export default Textarea;
