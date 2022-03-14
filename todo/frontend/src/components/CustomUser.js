import React from 'react'


const UserItem = ({User}) => {
   return (
       <tr>
           <td>
               {User.first_name}
           </td>
           <td>
               {User.last_name}
           </td>
           <td>
               {User.email}
           </td>
       </tr>
   )
}
const UserList = ({CustomUser}) => {
   return (
       <table>
           <th>
               First name
           </th>
           <th>
               Last Name
           </th>
           <th>
               Email
           </th>
           {CustomUser.map((User) => <UserItem User={User} />)}
       </table>
   )
}

export default UserList
