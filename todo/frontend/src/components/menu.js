import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

const Menu = ({ObjectMen}) => {
   return (

           <ul class="nav nav-tabs">
               <li class="nav-item">
                   <Link className="nav-link active" data-bs-toggle="tab" to="/">Главная</Link>
               </li>

               <li className="nav-item">
                   <Link className="nav-link active" data-bs-toggle="tab" to="/userlist">Список пользователей</Link>
               </li>

               <li>
                   <Link className="nav-link active" data-bs-toggle="tab" to="/Projects">Список проектов</Link>
               </li>

               <li>
                   <Link className="nav-link active" data-bs-toggle="tab" to="/ToDo">To_Do</Link>
               </li>

                <li>
                    <Link className="nav-link active" data-bs-toggle="tab" to="/">Контакты</Link>
               </li>
           </ul>

   )
}

export default Menu

