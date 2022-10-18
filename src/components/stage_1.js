import React, { useRef, useContext, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

import { MyContext } from "../context";

function Stage1() {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    if (validation(value)) {
      setError([false, ""]);
      context.addPlayer(value);
      textInput.current.value = "";
    } else {
      console.log("error");
    }
  };
  const validation = (value) => {
    if (value === "") {
      setError([true, "You must type"]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "You must enter bigger"]);
      return false;
    }
    return true;
  };
  console.log(context);
  return (
    <div>
      <Form className="mb-4" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player"
            name="player"
            ref={textInput}
          />
        </Form.Group>
        {error[0] ? <Alert variant="danger">{error[1]}</Alert> : null}
        <Button className="mb-4 mt-3" variant="primary" type="submit">
          App player
        </Button>
      </Form>
      {context.state.players && context.state.players.length > 0 ? (
        <>
          <hr />
          <div>
            <ul className="list-group">
              {context.state.players.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="list-group-item d-flex 
                    justify-content-between align-item-center list-group-item-action "
                  >
                    {item}
                    <span
                      className="badge badge-danger"
                      onClick={() => context.removePlayer(idx)}
                    >
                      X
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="action_button" onClick={()=>context.next()}>
              Next
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Stage1;
