import TableCellElement from "./TableCell";
import { TableBody } from '@mui/material'

export default function ITAccountTableBody({props, rowsPerPage, page, searchTerm} : any )
{
    console.log("props",props.data)
    const filteredData = props.data.filter((val:any) => {
        
        return (
            val.title?.toString().toLowerCase().includes(searchTerm?.toString().toLowerCase()) ||
            val.type?.toString().toLowerCase().includes(searchTerm?.toString().toLowerCase()) ||
            val.author?.toString().toLowerCase().includes(searchTerm?.toString().toLowerCase()) ||
            val.location?.toString().toLowerCase().includes(searchTerm?.toString().toLowerCase())
        )
    })

    return(
        <TableBody>
            {(rowsPerPage > 0
            ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : filteredData).map((data:any, i:any) => (
                <TableCellElement
                    key={i}
                    TableElementId = {data._id}
                    TableElementTitle = {data.title}
                    TableElementType = {data.type}
                    TableElementAuthor = {data.author}
                    TableElementLocation = {data.location}
                    TableElementHistory_Availability = {data.history[data.history.length - 1]?.rendu}
                /> 
            ))}
        </TableBody>
    )
}