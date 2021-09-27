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
  },
  {
    name: "Programming",
    noLectures: 2,
    noPracticals: 2
  },
  {
    name: "Computer Systems",
    noLectures: 2,
    noPracticals: 3
  }
]

const Demo = props => {

  const TableData =  props.modules.map(module => {
    return (
      <tr>
        <td>{module.name}</td>
        <td>{module.noLectures}</td>
        <td>{module.noPracticals}</td>
      </tr>
    );
  });

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
          <tbody>{TableData}</tbody>
      </table>
    </div>
  );
};

export default Demo;
