import React, { useRef, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    stage: 1,
    players: [],
    result: "",
  };

  addPlayerHandler = (name) => {
    this.setState((prevState) => ({
      players: [...prevState.players, name],
    }));
  };

  removePlayerHandler = (idx) => {
    let newArray = this.state.players;
    newArray.splice(idx);
    this.setState({ players: newArray });
  };
  nextHandler = () => {
    const { players } = this.state;
    if (players.length < 2) {
        toast.error("Enter more player",{
            position:toast.POSITION.TOP_LEFT,
            // autoClose:50
        })
    } else {
    }
  };
  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayerHandler,
            removePlayer: this.removePlayerHandler,
            next: this.nextHandler,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
        <ToastContainer autoClose={3000}/>
      </>
    );
  }
}

export { MyContext, MyProvider };
