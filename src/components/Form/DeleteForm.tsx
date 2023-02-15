import { Box, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ApiService } from '../../api/ApiService'

export default function ReturnForm() {

  const navigate = useNavigate()

  const [book, setBook] = useState<any>([])

  function HandleSubmit(event : any){
    event.preventDefault()

    ApiService.delete(`books/${event.target.book.value}`)
    .then(() => navigate('/book'))
    .catch(() => console.log("Book not found"))
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
        <h1> Delete A Book </h1>
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
