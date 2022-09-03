import React, { useState } from "react";
import { Form } from "react-bootstrap";

// components
import ButtonComponent from "./components/ButtonComponent";
import TextFieldComponent from "./components/TextFieldComponent";

// styles
import "./styles/text-field-style.css";

interface ValueProp {
  firstName: string;
  lastName: string;
  phone: number;
}

function App() {
  // react hooks
  const [values, setValues] = useState<ValueProp>({
    firstName: "",
    lastName: "",
    phone: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div className="container">
      <div className="card" style={{ margin: "5%" }}>
        <h2 className="text-center" style={{ paddingTop: "2%" }}>
          Basic Form
        </h2>
        <Form
          onSubmit={handleSubmit}
          style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "3%" }}
        >
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <TextFieldComponent
                  placeholder={"Enter your First Name"}
                  type={"text"}
                  name={"firstName"}
                  className={"text-field"}
                  changeHandler={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <TextFieldComponent
                  placeholder={"Enter your Last Name"}
                  type={"text"}
                  name={"lastName"}
                  className={"text-field"}
                  changeHandler={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <Form.Group className="mb-3">
              <TextFieldComponent
                placeholder={"Enter your Phone No"}
                type={"number"}
                name={"phone"}
                className={"text-field"}
                changeHandler={handleChange}
              />
            </Form.Group>
          </div>
          <div className="row mb-3">
            <ButtonComponent
              type={"submit"}
              name={"Submit"}
              style={{ float: "right" }}
              className={"btn-sucess"}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
