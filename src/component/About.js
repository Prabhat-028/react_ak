import User from "./User";
import UserClass from "./Userclass";
import React from "react";

class About extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
          <>
            <div className="aboutPage">
              <UserClass></UserClass>
              {/* <UserClass
                name={"dummy"}
                location={"dummy"}
                contact={"@dummy"}
              ></UserClass>
              <UserClass
                name={"dummy2"}
                location={"dummy"}
                contact={"@dummy"}
              ></UserClass>
              <UserClass
                name={"dummy3"}
                location={"dummy"}
                contact={"@dummy"}
              ></UserClass> */}
            </div>
          </>
        );
    }
}

// const About = () => {
//     return (
//         <>
//             <div className="aboutPage">
//                  {/* <User name={"Prabhat Kumar"} location={"Jaipur"} contact={"@prabhatKumar"}></User> */}
//                 <UserClass name={"dummy"} location={"dummy"} contact={"@dummy"}></UserClass>
//             </div>
//         </>
//     )
// };
export default About;