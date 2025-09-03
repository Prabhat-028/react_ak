import { useState } from "react";

const User = (props) => {
    const { name, location, contact } = props;
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    const handleClick = () => {
        setCount(count + 2);
    }

    const handleClick2 = () => {
        setCount2(count2 + 2);
    }
    return (
      <div className="user-card">
        <h1 onClick={handleClick}>Count={count}</h1>
        <h1 onClick={handleClick2}>Count2={count2}</h1>
        <h2>Name:{name}</h2>
        <p>
          Education:Aspring Btech in Computer Science and Engineering from
          Rajashtan Technical University
        </p>
        <h3>Location:{location}</h3>
        <h4>Contact:{contact}</h4>
      </div>
    );
};
export default User; 