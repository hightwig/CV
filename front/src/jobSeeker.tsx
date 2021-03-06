import * as React from "react";
import { DataGrid, GridRowData } from "@material-ui/data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "username", headerName: "Userame", width: 200 },
  { field: "skills", headerName: "Skills", width: 200 },
];

export default function JobSeekersTable() {
  const [refresh, trigger] = React.useState<any>();

  React.useEffect(() => {
    axios
      .post("search", { skills: ["."] })
      .then((res) => {
        console.log(res.data.data);
        rows = res.data.data;
        trigger("kjdfksdfg");
      })
      .catch(() => {});
  }, [refresh]);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

let rows: readonly GridRowData[] = [
  {
    id: "60e7e21ff3ec6e1da3857f46",
    email: "bozghaale@yaaboo.kaftar",
    name: "goosaale",
    username: "khare",
    skills: ["skill1", "skill2", "skill3"],
  },
];
