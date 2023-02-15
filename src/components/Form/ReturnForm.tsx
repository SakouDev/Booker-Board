import { Box, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ApiService } from '../../api/ApiService'

export default function ReturnForm() {

  const navigate = useNavigate()
  let { id } = useParams()

  const spot = [
    { value: 'Boulogne' },
    { value: 'StMartin' },
    { value: 'Wimereux' },
    { value: 'Outreau' },
    { value: 'LePortel' },
  ];

  const [book, setBook] = useState<any>([])

  function HandleSubmit(event : any){
    event.preventDefault()

    const data : any = {
            location: event.target.spot.value
    }
    ApiService.put(`borrow/${event.target.book.value}`, data)
    .then(() => navigate('/book'))
    .catch(() => console.log("Book already returned"))
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
        <h1> Return A Book </h1>
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
            label="Spot"
            select
            name="spot"
        >
          {spot.map((option:any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
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
