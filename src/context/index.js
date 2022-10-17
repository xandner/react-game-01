import React, { useRef, useContext, useState } from "react";
import { Button } from "react-bootstrap"

const MyContext = React.createContext();

class MyProvider extends React.Component {
    state = {
        stage: 1,
        players: [],
        result: ''
    }

    addPlayerHandler = (name) => {
        this.setState((prevState) => ({
            players: [
                ...prevState.players,
                name
            ]
        }))
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler
                }}

            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider }