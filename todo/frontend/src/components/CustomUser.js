import React from 'react';
import {Link} from "react-router-dom";


const UserItem = ({CustomUser}) => {
   return (
       <tr>
           <td>
               {/*{User.id}*/}
                <Link to={`/userlist/${CustomUser.id}`}>{CustomUser.id}</Link>
           </td>
           <td>
              {/*<Link to={`us/${User.id}`}>{User.first_name}</Link>*/}
               {CustomUser.first_name}
           </td>
           <td>
               {CustomUser.last_name}
           </td>
           <td>
               {CustomUser.email}
           </td>
       </tr>
   )
}
const UserList = ({CustomUser}) => {
   return (
       <table>
           <th>
               ID
           </th>
           <th>
               First name
           </th>
           <th>
               Last Name
           </th>
           <th>
               Email
           </th>
           {CustomUser.map((CustomUser) => <UserItem CustomUser={CustomUser} />)}
       </table>
   )
}

export default UserList
