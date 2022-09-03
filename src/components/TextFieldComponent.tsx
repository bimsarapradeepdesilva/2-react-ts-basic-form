import React, { FC } from "react";
import { Form } from "react-bootstrap";

type TextFieldProp = {
  placeholder?: string; // undefind proprtice
  name: string;
  className: string;
  type: React.ComponentProps<typeof Form.Control>["type"];
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextFieldComponent: FC<TextFieldProp> = ({
  className,
  placeholder,
  type,
  name,
  changeHandler,
}) => {
  return (
    <div>
      <Form.Control
        className={className}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={changeHandler}
      />
    </div>
  );
};

export default TextFieldComponent;
