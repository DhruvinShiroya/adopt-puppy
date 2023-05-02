import React from "react";

const Pet = (props) => {
  return (
    <tr>
      <td> {props.name} </td>
      <td> {props.breed}</td>
      <td> {props.animal}</td>
    </tr>
  );
};

export default Pet;
