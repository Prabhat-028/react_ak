import React from "react";


class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Default",
            },
        }
        
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });

    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
          <div className="user-card">
            <p>this all things is passed by Class Based Component</p>

                {/* <h1>count={count}</h1> */}
                {/* <buttonclassName="increaseButton">Count Increase</button> */}
            <img className="avatar" src={avatar_url} alt="img"/>

            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
          </div>
        ); 
    }
};
export default UserClass; 
/*
whenever the ui update 

👉when there is a single child then 

👇👇
parent consturtor
parent render 

child constructor
chlid render

child componentDidMount
parent componentDidMount


👉when there multiple child exists

👇👇
parent consturtor
parent render 

first child constructor
first chlid render

second child consturctor
second child render

first child componentDidMount
second child componentDidMount
parent componentDidMount

*/