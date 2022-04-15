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
import LoginForm from "./components/Auth";
import Cookies from 'universal-cookie';

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
            'ToDo':[],
            'token':'635b6fbb5174e1b6dc5d767e871da05761370933',
            // 'ObjectMen':[]

        }
        // this.logout = this.logout.bind(this);
    }
    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token})
    }

    is_authenticated() {
        return this.state.token !== ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token})
    }

    get_token(username, password) {
       axios.post('http://127.0.0.1:8000/api-token-auth/',
                {'username': username, 'password': password})
           .then(response => {
               this.set_token(response.data['token'])
           }).catch(error => alert('Неверный логин или пароль'))

   }

    load_data() {
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
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/Project/').then(response => {
            this.setState(
                {
                    'Projects': response.data
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/Todo/').then(response => {
            this.setState(
                {
                    'ToDo': response.data
                }
            )
        }).catch(error => console.log(error))
    }

    componentDidMount() {
      this.get_token_from_storage()
      this.load_data()
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

                <Route exact path='/login' component={() => <LoginForm
                    get_token={(username, password) => this.get_token(username, password)} />} />

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


