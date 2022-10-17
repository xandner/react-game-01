import React from "react";

const MyContext=React.createContext();

class MyProvider extends React.Component{
    state={
        stage:1,
        players:[],
        result:''
    }

    render(){
        return(
            <MyContext.Provider value={{state:this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export {MyContext,MyProvider}