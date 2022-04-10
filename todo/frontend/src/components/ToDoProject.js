import React from 'react';
import { useParams } from 'react-router-dom';
import ToDoList from "./ToDo";
import Project from "./Project";
import project from "./Project";


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
const ToDoProjectList = ({Projects}) => {
    let { id } = useParams();
    // let filter_item = ProjectRange.filter((project => project.user.includes(parseInt(id))))
    let filter_item = Project.filter((project) => project.CustomUser.id === id)
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
           {filter_item.map((ToDo) => <ToDoItem ToDo={ToDo} />)}
       </table>
   )
}

export default ToDoProjectList
