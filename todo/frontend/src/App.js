import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import UserList from "./components/CustomUser.js";
import Menu from "./components/menu.js";
import {render} from "react-dom";
import Footers from "./components/footer";
import ProjectsList from "./components/Project";
import ToDoProjectList from "./components/ToDoProject";
import ToDoList from "./components/ToDo";
import UserToDoList from "./components/UserToDo.js";

import * as PropTypes from "prop-types";


// function Menu(props) {
//     // props.ObjectMen = Men;
//     {
//        return (
//            <head>
//                <title><Menu ObjectMenu={props} /></title>
//            </head>
//
//        );
//    }
// }



class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            'CustomUser':[],
            'Project':[],
            'ToDo':[]
            // 'ObjectMen':[]

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

      axios.get('http://127.0.0.1:8000/api/Project/').then(response => {
          this.setState(
              {
                  'Projects': response.data
              }
          )}).catch(error => console.log(error))

      axios.get('http://127.0.0.1:8000/api/Todo/').then(response => {
          this.setState(
              {
                  'ToDo': response.data
              }
          )}).catch(error => console.log(error))
   }
   render () {
       return (
            <React.Fragment>

                {/*<title><Menu ObjectMenu={this.state.ObjectMen} /></title>*/}
                <BrowserRouter>
                <Menu/>
                <Route exact path='/userlist' component={() => <UserList CustomUser={this.state.CustomUser} />} />
                <Route exact path='/Projects' component={() => <ProjectsList Projects={this.state.Projects} />} />
                <Route exact path='/ToDo' component={() => <ToDoList ToDo={this.state.ToDo} />} />
                <Route exact path='/ToDoProject' component={() => <ToDoList ToDo={this.state.ToDo} />} />

                <Route path='/userlist/:id'>
                    <UserToDoList Todo={this.state.ToDo} />}
                </Route>

                <Route path='/Projects/:id'>
                    <ToDoProjectList Projects={this.state.Projects} />}
                </Route>

                {/*CustomUser={this.state.CustomUser}*/}
                </BrowserRouter>
                <div>
                {/*<UserList CustomUser={this.state.CustomUser} />*/}
                </div>
                <Footers/>
            </React.Fragment>

       );
   }

}
export default App;


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


