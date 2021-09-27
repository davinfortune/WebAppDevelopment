import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

let modules = [
  {
    name: "DevOps",
    noLectures: 2,
    noPracticals: 3
  },
  {
    name: "Enterprise Web Dev",
    noLectures: 3,
    noPracticals: 2
  }
]

const Demo = () => {

  const Row = (props) => {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.noLectures}</td>
        <td>{props.noPracticals}</td>
      </tr>
    );
  }

  return (
    <div>
    <h1>HDip Computer Science - Module table</h1>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>No lectures</th>
          <th>No practicals</th>
        </tr>
      </thead>
      <tbody>
        <Row name = {modules[0].name} noLectures = {modules[0].noLectures} noPracticals = {modules[0].noPracticals}/>
        <Row name = {modules[1].name} noLectures = {modules[1].noLectures} noPracticals = {modules[1].noPracticals}/>
      </tbody>
  </table>
</div>
  );
};

export default Demo;
