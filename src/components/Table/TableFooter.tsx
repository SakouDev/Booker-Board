import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableData from "./TableData";
import { TableCell, TextField } from '@mui/material';


function TablePaginationActions(props:any){

    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
    
    const handleFirstPageButtonClick = (event:any) => {
        onPageChange(event, 0);
    };
    
    const handleBackButtonClick = (event:any) => {
        onPageChange(event, page - 1);
    };
    
    const handleNextButtonClick = (event:any) => {
        onPageChange(event, page + 1);
    };
    
    const handleLastPageButtonClick = (event:any) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton
            onClick={handleBackButtonClick}
            disabled={page === 0}
            aria-label="previous page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default function TableFooters({data, searchTerm, setSearchTerm}:any) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event:any, newPage:any) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event:any) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
        <>
            <TableData props={data} page={page} rowsPerPage={rowsPerPage} searchTerm={searchTerm}/>
            <TableFooter>
                <TableRow>
                    <TableCell align='center' style={{width:'25%',backgroundColor:'white'}} >
                      <TextField 
                        inputProps={{ style: { color: '#1976d2'}}}
                        variant='outlined' 
                        margin="none" 
                        label="Search" 
                        onChange={(element) => setSearchTerm(element.target.value)}
                      />
                    </TableCell>
                    <TablePagination
                        rowsPerPageOptions={[2, 5, 10, 25, 50,{ label: 'All', value: -1 }]}
                        colSpan={6}
                        count={data.data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                        inputProps: {
                            'aria-label': 'rows per page',
                        },
                        native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
            </TableFooter>
        </>
    );
  }