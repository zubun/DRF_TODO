import React from 'react'


// const Menu = ({User}) => {
//    return (
//        <tr>
//            <td>
//                {User.first_name}
//            </td>
//            <td>
//                {User.last_name}
//            </td>
//            <td>
//                {User.email}
//            </td>
//        </tr>
//    )
// }
const Men = ({ObjectMen}) => {
   return (
       <ul className="menu">
           <li>
               Главная
           </li>
           <li>
               Задачи
           </li>
           <li>
               Контакты
           </li>
       </ul>
   )
}

export default Men

