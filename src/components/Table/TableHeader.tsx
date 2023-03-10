import { TableHead, TableCell, TableRow, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
export default function TableHeader({props,setSearchTerm}:any){

  
  const [headerData, setHeaderData] = useState(
    {
      option1 : "",
      option2 : "",
      option3 : "",
      option4 : "",
      option5 : "",
      option6 : "",
      option7 : "",
    }
  )

  
  useEffect(() => {
    setHeaderData(props)
  }, [])
  
  return (
      <TableHead>
          <TableRow style={{backgroundColor:'#1976d2'}}>
              <TableCell align="center"> {headerData.option1} </TableCell>
              <TableCell align="center"> {headerData.option2} </TableCell>
              <TableCell align="center"> {headerData.option3} </TableCell>
              <TableCell align="center"> {headerData.option4} </TableCell>
              <TableCell align="center"> {headerData.option5} </TableCell>
              <TableCell></TableCell>
          </TableRow>
      </TableHead>
  )
}