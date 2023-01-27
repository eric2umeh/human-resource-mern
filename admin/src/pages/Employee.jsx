import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AddEmployee from '../components/AddEmployee';
import axios from 'axios'

const Employee = () => {

  const [employee, setEmployee] = useState([]); // for defualt is empty

  // count
  const [countEmployee, setCountEmployee] = useState(0); // for default is 0

  useEffect(() => {

    const fetchData = async () => {
      const resultEmployee = await axios.get('/api/employee/all')

      // i want first the latest employee to show
      // console.log(resultEmployee);
      const resultEmployeeData = resultEmployee.data;
      // console.log(resultEmployeeData);
      const sortResultEmployeeData = resultEmployeeData.sort((a,b) => b.createdAt.localeCompare(a.createdAt))
      setEmployee(sortResultEmployeeData);

      const resultCountEmployee = await axios.get('/api/employee/countEmployee');
      // console.log(resultCountEmployee)
      setCountEmployee(resultCountEmployee.data);
    }

    fetchData();

  }, [])

  const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
  });

  const [open, setOpen] = useState(false);
  
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
      { name: "NAME", options: { filterOptions: { fullWidth: true } } },
      "EMPLOYEE ID",
      "PHONE",
      "JOIN DATE",
      "ROLE"
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
        <div className="u-badge">
          <span className='u-total'>Total Employee</span>
          <h1 className="u-totalNumber">{countEmployee?.count}</h1>
        </div>
      </div>
      <div className="u-row">
      {
          employee.length === 0 ? (
            <h3 className="no-data">There are currently no employee!</h3>
          ) : (
            <CacheProvider value={muiCache}>
                <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                    title={"EMPLOYEE LIST"}
                    data={ 
                      employee.map((employ) => (
                        [ employ.firstName + ' ' + employ.lastName, employ.employeeId, employ.totalEmployee, employ.phone, employ.createdAt?.slice(0, 10), employ.role ]
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
      {open && <AddEmployee setOpen={setOpen} />}
    </div>
  )
}

export default Employee