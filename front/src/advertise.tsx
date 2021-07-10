/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import { DataGrid, GridRowData } from "@material-ui/data-grid";
import axios from "axios";
import { useEffect } from "react";
export default function AdsTable() {
  const [editRowsModel, setEditRowsModel] = React.useState({});
  const [refresh, setRefresh] = React.useState<string>();
  const handleEditRowModelChange = React.useCallback((params) => {
    setEditRowsModel(params.model);
  }, []);
  useEffect(() => {
    axios
      .post("/advertise/search", { skills: [] })
      .then((res) => {
        console.log(res.data.data);
        res.data.data.map(
          (ad: {
            title: any;
            salary: any;
            description: any;
            skills: any[];
          }) => ({
            title: ad.title,
            salary: ad.salary,
            description: ad.description,
            skill: ad.skills.join(", "),
          })
        );

        setRefresh("refresh");
      })
      .catch(() => {});
  }, [refresh]);
  return (
    <div style={{ width: "100%" }}>
      <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          editRowsModel={editRowsModel}
          onEditRowModelChange={handleEditRowModelChange}
        />
      </div>
    </div>
  );
}

const columns = [
  { field: "title", headerName: "Title", width: 180, editable: true },
  { field: "salary", headerName: "Salary", type: "number", editable: true },
  {
    field: "description",
    headerName: "Description",
    width: 180,
    editable: true,
  },
  {
    field: "skills",
    headerName: "Skills",
    type: "string",
    width: 220,
    editable: true,
  },
];

let rows: readonly GridRowData[] = [
  { id: 4, title: "sss", salary: 4554, description: "asf", skills: "dasfsdg" },
];
