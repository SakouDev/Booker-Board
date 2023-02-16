import { Box, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ApiService } from '../../api/ApiService'
import DefaultUpdateForm from './DefaultUpdateForm';

export default function UpdateForm() {

  const navigate = useNavigate()

  const [books, setBooks] = useState<any>([])
  const [id, setId] = useState<any>("")

  useEffect(() => {
    ApiService.get('books')
    .then((response) => {
      setBooks(response.data.result)
    })
  }, [])

  function HandleSubmit(event : any){
    event.preventDefault()

  const data : any = {
    title: event.target.title.value,
    type: event.target.type.value,
    author: event.target.author.value,
    location: event.target.location.value,
    history: [{
        emprunt : new Date(),
        rendu : new Date(),
        user : 0
    }],
  }
        ApiService.put(`books/${event.target.id.value}`, data)
        .then(() => navigate('/book'))
}


  return (
    <Card style={{flex : 1}}>
      <Box
          component="form"
          sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          onSubmit={HandleSubmit}
      >
        <CardContent>
        <h1> Update A Book </h1>

        <TextField
            required      
            id="outlined-required"
            label="Book"
            select
            onChange={(event:any) => {
                setId(event.target.value)
            }}
            name="id"
        >
          {books.map((option:any) => (
            <MenuItem key={option.value} value={option._id}>
              {option.title}
            </MenuItem>
          ))}
        </TextField>
        </CardContent>
        {id &&
            <CardContent>
                <DefaultUpdateForm id={id} />
            </CardContent>
        }
        <CardContent>
            <Button variant="contained" color="success" type="submit">
                Confirmer
            </Button>
        </CardContent>
      </Box>
    </Card>
  )
}
