import React from 'react'


const ProjectsItem = ({Projects,users}) => {
   return (
       <tr>
           <td>
               {Projects.id}
           </td>
           <td>
               {Projects.title}
           </td>
           <td>
               {Projects.link}
           </td>
            <td>

                {/*{Projects.users.map((users) => {*/}
                {/*    let user = users.find(user) => CustomUser.username === users )*/}
                {/*    if(user){*/}
                {/*        return CustomUser.username*/}
                {/*    }*/}
                {/*})}*/}
               {Projects.users}
           </td>
       </tr>
   )
}
const ProjectsList = ({Projects,users}) => {
   return (
       <table>
           <th>
               ID
           </th>
           <th>
               Title
           </th>
           <th>
               Link
           </th>
           <th>
               Users
           </th>
           {Projects.map((Projects) => <ProjectsItem Projects={Projects} />)}
       </table>
   )
}

export default ProjectsList
