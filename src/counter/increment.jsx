import { Component } from "react";
import Child from "./pure component";

class Increment extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
        // this.incrementt=this.incrementt.bind(this)
        // this.decrementt=this.decrementt.bind(this)
    }

    incrementt = () => {
        this.setState((ps)=>{
            console.log(ps.count,"prestate")
           return {
            count:ps.count+1}
            // console.log(count);
            
            
        })
    }
    decrementt = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        var a;
        if(this.state.count>5){
a=<h1 style={{color:"red"}}>{this.state.count}</h1>
        }else if(this.state.count<=5 && this.state.count>=0){
a=<h1 style={{color:"gray"}}>{this.state.count}</h1>
        }else{
        a=<h1 style={{color:"blue"}}>{this.state.count}</h1>
        
        }
        return (
            <>
            {console.log(this.state)
            }
                <h1>hello im doing counter</h1>

               {a}

                <button onClick={this.incrementt}>increment</button>
                <button onClick={this.decrementt}>decrement</button>
                <Child/>

            </>
        )
    }
}
export default Increment;