import styles from "./textarea.module.css";
import React, { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Você pode adicionar suas próprias propriedades personalizadas aqui, se necessário.
}

const Textarea: React.FC<TextareaProps> = ({ ...rest }) => {
  return <textarea {...rest} />;
};

export default Textarea;
