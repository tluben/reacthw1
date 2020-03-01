import React from "react"
import Row from "./row"

function Table (props) {
    console.log(props)
    return (
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col"><button type="button" className="btn btn-link" onClick={props.order}>ID</button></th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {props.employees.map(employee => (
        <Row
        image = {employee.picture.thumbnail} 
        ID = {employee.id.value}
        name = {`${employee.name.first} ${employee.name.last}`}
        gender = {employee.gender}
        key = {employee.id.value}
        phoneNumber = {employee.phone}
        userName = {employee.login.username}
        email = {employee.email}
        />
    ) )}
  </tbody>
</table>
    )
}
export default Table 