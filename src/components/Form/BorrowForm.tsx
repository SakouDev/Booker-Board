import { Box, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ApiService } from '../../api/ApiService'

export default function BorrowForm({dataCode}: {dataCode: string}) {

  const navigate = useNavigate()
  let { id } = useParams()

  const [book, setBook] = useState<any>([])

  function HandleSubmit(event : any){
    event.preventDefault()

    const data : any = {
            user: event.target.user.value
    }
    ApiService.post(`borrow/${event.target.book.value}`, data)
    .then(() => navigate('/book'))
    .catch(() => console.log("Book already borrowed"))
}

  useEffect(() => {
      ApiService.get('books')
      .then((response) => {
        setBook(response.data.result)
      })
    }, [])
  return (
    <Card style={{flex : 1}}>
      <Box
          component="form"
          sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={HandleSubmit}
      >
        <CardContent>
        <h1> Borrow A Book </h1>
        <TextField
            required      
            id="outlined-required"
            label="Book"
            select
            name="book"
        >
          {book.map((option:any) => (
            <MenuItem key={option.value} value={option._id}>
              {option.title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            required
            id="outlined-required"
            label="Code"
            type="text"
            name="user"
            defaultValue={dataCode}
        />
        </CardContent>
        <CardContent>
            <Button variant="contained" color="success" type="submit">
                Confirmer
            </Button>
        </CardContent>
      </Box>
    </Card>
  )
}
