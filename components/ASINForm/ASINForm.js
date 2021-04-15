import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import style from "./Asin.module.css";

export default function ASINForm() {
  const router = useRouter();
  const [asin_no, setAsinNo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: `/${asin_no}`,
    });
  };

  return (
    <Form className={style.form_container}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>ASIN No.</Form.Label>
        <Form.Control
          type="text"
          placeholder="ASIN Number"
          onChange={(e) => setAsinNo(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Custom select</Form.Label>
        <Form.Control as="select" custom>
          <option>AMAZON.COM</option>
        </Form.Control>
      </Form.Group>

      <Form.Row>
        <Form.Group xs="auto" controlId="formcheckbox" className="ml-3 mr-4">
          <Form.Check type="checkbox" label="a-z" />
        </Form.Group>
        <Form.Group xs="auto" controlId="formcheckbox">
          <Form.Check type="checkbox" label="0-9" />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
