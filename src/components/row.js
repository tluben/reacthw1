import React from "react"


function Row (props) {
    return (
    <tr>
      <td>
        <img src={props.image} alt="employee_image"/>
      </td>
      <td>{props.ID}</td>
      <td>{props.name}</td>
      <td>{props.gender}</td>
      <td>{props.phoneNumber}</td>
      <td>{props.userName}</td>
      <td>{props.email}</td>
    </tr>
    )
}
export default Row