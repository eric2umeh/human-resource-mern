import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AddDepartment from '../components/AddDepartment';
import axios from 'axios'

const Department = () => {

  const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
  });

  const [open, setOpen] = useState(false);
  const [departments, setDepartments] = useState([]); // for defualt is empty

  useEffect(() => {

    const fetchData = async () => {
      const resultDepartment = await axios.get('/api/departments/all')

      // i want first the latest departments to show
      // console.log(resultDepartment);
      const resultDepartmentData = resultDepartment.data;
      // console.log(resultDepartmentData);
      const sortResultDepartmentData = resultDepartmentData.sort((a,b) => b.createdAt.localeCompare(a.createdAt))
      setDepartments(sortResultDepartmentData);
    }

    fetchData();

  }, [])

  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
      { name: "DEPARTMENT NAME", options: { filterOptions: { fullWidth: true } } },
      "DEPARTMENT HEAD",
      "TOTAL EMPLOYEE"
  ];

  const options = {
      search: searchBtn,
      download: downloadBtn,
      print: printBtn,
      viewColumns: viewColumnBtn,
      filter: filterBtn,
      filterType: "dropdown",
      responsive,
      tableBodyHeight,
      tableBodyMaxHeight,
      onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
      }
  };

  // const data = [
  //   ["Web Development", "Miljan Peric", "50"],
  //   ["Marketing", "John Deep", "13"],
  //   ["App Development", "Frank Camly", "21"],
  //   ["Support", "Gary Camara", "85"],
  // ];


  return (
    <div className='u-container'>
      <div className="u-row">
        <button className="u-btn" onClick={() => setOpen(true)}>Add New</button>
      </div>
      <div className="u-row">
      {
          departments.length === 0 ? (
            <h3 className="no-data">There are currently no departments!</h3>
          ) : (
          <CacheProvider value={muiCache}>
              <ThemeProvider theme={createTheme()}>
                  <MUIDataTable
                  title={"DEPARTMENTS LIST"}
                  data={
                    departments.map((department) => (
                      [ department.departmentName, department.departmentHead, department.totalEmployee ]
                    ))
                  }
                  columns={columns}
                  options={options}
                  />
              </ThemeProvider>
          </CacheProvider>
            )
        }
      </div>
      {open && <AddDepartment setOpen={setOpen} />}
    </div>
  )
}

export default Department