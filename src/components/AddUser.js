import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const AddUser = () => {
  return (
    <Form>
      <Link to="/">
        <button type="button">&lt; Go Back</button>
      </Link>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" placeholder="Insert Title"></Input>
        <Label>Quantity</Label>
        <Input type="number" placeholder="0"></Input>
        <Label>Price</Label>
        <Input type="number" placeholder="0.00"></Input>
      </FormGroup>
      <Button type="submit">Add Item</Button>
    </Form>
  );
};
