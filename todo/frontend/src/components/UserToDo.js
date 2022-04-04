import React from 'react'
import { useParams } from 'react-router-dom'
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
const UserToDoList = ({ToDos}) => {
   console.log(ToDos)
   let { id } = useParams();
   let filter_todo = ToDos.filter(ToD => ToD.CustomUser.includes(parseInt(id)))

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
           {filter_todo.map((ToD) => <ToDoItem ToDo={ToD}/>)}

       </table>
   )
}

export default UserToDoList
