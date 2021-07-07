import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ListGroup, ListGroupItem } from "reactstrap";

export const UserList = () => {
  const { users } = useContext(GlobalContext);

  return (
    <ListGroup>
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem key={user.id}>
              <strong>{user.name}</strong>
              <strong>{user.quantity}</strong>
              <strong>{user.price}</strong>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">Let's start to add items</h4>
      )}
    </ListGroup>
  );
};
