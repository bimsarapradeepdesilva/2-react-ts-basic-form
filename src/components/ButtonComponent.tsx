import React, { CSSProperties } from "react";
import { Button } from "react-bootstrap";

interface ButtonProp {
  name: string;
  type: React.ComponentProps<typeof Button>["type"];
  style: CSSProperties;
  className: string;
  // onClick?: (event: React.MouseEvent<HTMLElement>) => void; 
}

const ButtonComponent = (props: ButtonProp) => {
  return (
    <div>
      <Button type={props.type} style={props.style} className={props.className}>
        {props.name}
      </Button>
    </div>
  );
};

export default ButtonComponent;
