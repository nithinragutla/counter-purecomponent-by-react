import { Component, PureComponent } from "react";
 

class Child extends PureComponent{
     
    render(){
        return(
            <>
            {console.log("this is child component")}
            <h1>hello world i am chaild</h1>
            </>
        )
    }
}
export default Child;