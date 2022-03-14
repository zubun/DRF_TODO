import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";



import UserList from "./components/CustomUser.js";
import Menu from "./components/menu.js";
import {render} from "react-dom";

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            'CustomUser':[]
        }
    }
    componentDidMount() {
      // const CustomUser = [
      //     {
      //         'first_name': 'Фёдор',
      //         'last_name': 'Достоевский',
      //         'email': '1821@ya.ru'
      //     },
      //     {
      //         'first_name': 'Александр',
      //         'last_name': 'Грин',
      //         'email': '1880@ya.ru'
      //     },
      // ]
      axios.get('http://127.0.0.1:8000/api/users/').then(response => {
          this.setState(
              {
                  'CustomUser': response.data
              }
          )}).catch(error => console.log(error))
   }
   render () {
       return (
           <div>
               <UserList CustomUser={this.state.CustomUser} />
           </div>


       );
   }

}
export default App;


function Men(props) {
    props.ObjectMen = undefined;
    {
       return (
           <head>
               <title><Menu ObjectMenu={props.ObjectMen} /></title>
           </head>

       );
   }
}


// export default Men;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
