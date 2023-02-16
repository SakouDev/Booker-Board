import TableHeader from "./TableHeader";
import { Table, TableContainer, Paper } from "@mui/material";
import TableFooters from "./TableFooter";
import { useState } from "react";

export default function Tables(data:any){

    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <TableContainer component={Paper} sx={{ flex : 1 }} >
                <Table sx={{ flex : 1 }} aria-label="customized table">
                    <TableHeader props = {data.headerData} />
                    <TableFooters data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </Table>
            </TableContainer>
        </>
    )
}