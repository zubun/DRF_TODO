import React from 'react';
import { useParams } from 'react-router-dom';
import ToDo from "./ToDo";

const ToDoItem = ({ToDo}) => {
   return (
       <tr>
           <td>
               {ToDo.id}
           </td>
           <td>
               {ToDo.title}
           </td>
           <td>
               {ToDo.description}
           </td>
            <td>
               {ToDo.user}
           </td>
           <td>
               {ToDo.done}
           </td>
           <td>
               {ToDo.project}
           </td>
           {/*<td>*/}
           {/*    {ToDo.date_create}*/}
           {/*</td>*/}
           {/*<td>*/}
           {/*    {ToDo.date_update}*/}
           {/*</td>*/}
       </tr>
   )
}
const UserToDoList = ({ToDo}) => {
   console.log(ToDo)
   let { id } = useParams();
   let filter_todo = ToDo.filter(ToDo => ToDo.CustomUser.includes(parseInt(id)))
    console.log(filter_todo)
    return (
       <table>
           <th>
               ID
           </th>
           <th>
               Title
           </th>
           <th>
               description
           </th>
           <th>
               Users
           </th>
           <th>
               done
           </th>
           <th>
               project
           </th>
           {/*<th>*/}
           {/*    date_create*/}
           {/*</th>*/}
           {/*<th>*/}
           {/*    date_update*/}
           {/*</th>*/}
           {/*{ToDo.map((ToDo) => <ToDoItem ToDo={ToDo} />)}*/}
           {filter_todo.map((ToDo) => <ToDoItem ToDo={ToDo}/>)}

       </table>
   )
}

export default UserToDoList
