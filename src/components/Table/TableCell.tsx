// import DropdownDropdown from "../Menu/Dropdown";

import { TableCell, TableRow ,IconButton, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CircleIcon from '@mui/icons-material/Circle';
import { green, red } from '@mui/material/colors';
import { useState } from 'react';

export default function TableCellElement(
    {
        TableElementId,
        TableElementTitle,
        TableElementType,
        TableElementAuthor,
        TableElementLocation,
        TableElementHistory_Availability,
    }:any)
    {
        
        const [open, setOpen] = useState(false);
 
          
        const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
        }));

    return(
        <>
            <StyledTableRow key={TableElementId}>
                <TableCell  align="center" style={{cursor:'pointer'}} onClick={() => setOpen(!open)}>
                <IconButton
                    aria-label="expand row"
                    size="small"
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                </TableCell>
                <TableCell  align="center">
                    {TableElementTitle}
                </TableCell>
                <TableCell  align="center">
                    {TableElementType}
                </TableCell>
                <TableCell  align="center">
                    {TableElementAuthor}
                </TableCell>
                <TableCell  align="center">
                    {TableElementLocation}
                </TableCell>
                <TableCell  align="center">
                    {
                        (TableElementHistory_Availability || TableElementHistory_Availability === undefined) &&
                        <CircleIcon sx={{ color: green[500], fontSize: 30 }} name = "circle"/>
                    }
                    {
                        TableElementHistory_Availability === null &&
                        <CircleIcon sx={{ color: red[500], fontSize: 30 }} name = "circle"/>
                    }
                </TableCell>
                <TableCell align="center">
                    <Button onClick={() => {console.log(TableElementId)}} variant="contained"> Info</Button>
                </TableCell>
            </StyledTableRow>
        </>
    )
}