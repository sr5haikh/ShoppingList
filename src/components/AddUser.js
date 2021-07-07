import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Heading } from "./Heading";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";

export const AddUser = () => {
  const [name] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name
    };
    addUser(newUser);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Heading />
      <Link to="/">
        <button type="button">&lt; Go Back</button>
      </Link>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" name="name" placeholder="Insert Title"></Input>
        <Label>Quantity</Label>
        <Input type="number" name="quantity" placeholder="0"></Input>
        <Label>Price</Label>
        <Input type="number" name="price" placeholder="0.00"></Input>
      </FormGroup>
      <Button type="submit">Add Item</Button>
    </Form>
  );
};
