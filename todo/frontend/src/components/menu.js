import React from 'react'


const Menu = ({ObjectMen}) => {
   return (

       <ul class="nav nav-tabs">
           <li class="nav-item">
               <a className="nav-link active" data-bs-toggle="tab" href="#">Главная</a>
           </li>
           <li>
                <a className="nav-link active" data-bs-toggle="tab" href="#">Задачи</a>
           </li>
           <li>
                <a className="nav-link active" data-bs-toggle="tab" href="#">Контакты</a>
           </li>
       </ul>

   )
}

export default Menu

