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
        rows = res.data.data.map(
          (ad: {
            id: any;
            title: any;
            salary: any;
            description: any;
            skills: any[];
          }) => ({
            id: ad.id,
            title: ad.title,
            salary: ad.salary,
            description: ad.description,
            skills: ad.skills.join(", "),
          })
        );

        setRefresh("refresh");
      })
      .catch(() => {});
  }, [refresh]);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          onEditCellChangeCommitted={(params) => {
            let feild = `${params.field}`;
            let value: any;
            if (
              params.field === "skills" &&
              params.props.value !== undefined &&
              params.props.value !== null
            ) {
              value = params.props.value.toString().split(", ");
            } else value = params.props.value;

            axios
              .patch(`advertise/${params.id}`, { [feild]: value })
              .then(() => {
                setRefresh("0");
              })
              .catch(() => {
                setRefresh("0");
              });
            console.log(params.id);
            console.log(params.props.value);
          }}
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
