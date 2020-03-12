import React, { Component, createContext, useContext, useEffect, useState } from "react";

export const EnvContext = createContext();
export const useEnv = () => useContext(EnvContext);

const EnvProvider = props => {

    const [statusUrl, setStatusUrl] = useState("");

    useEffect(() => {
        if(process.env.NODE_ENV === "development") {
            setStatusUrl("http://localhost:3000")
        } else {
            setStatusUrl("https://word-processor.now.sh")
        }
    }, [])

    return (
        <EnvContext.Provider value={statusUrl}>
            {props.children}
        </EnvContext.Provider>
    )
}

export default EnvProvider;

// export class EnvProvider extends Component {
//     state = {
//         statusUrl: ""
//     };

//     componentDidMount() {
//         if(process.env.NODE_ENV === "development") {
//             this.setState({ statusUrl: "http://localhost:3000" })
//         } else {
//             this.setState({ statusUrl: "https://word-processor.now.sh" })
//         }
//     }

//     render() {

//         const { statusUrl } = this.state;

//         return (
//             <EnvContext.Provider
//                 value={statusUrl}
//             >
//                 {this.props.children}
//             </EnvContext.Provider>
//         )
//     }
// } 

