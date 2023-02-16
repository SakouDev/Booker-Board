import { Box, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ApiService } from '../../api/ApiService'

export default function Form() {

  const navigate = useNavigate()
  let { id } = useParams()

  const genres = [
    {
      value: 'Manga',
      label: 'Manga',
    },
    {
      value: 'Roman',
      label: 'Roman',
    },
    {
      value: 'Biography',
      label: 'Biography',
    },
    {
      value: 'Press',
      label: 'Press',
    },
  ];
  const spot = [
    { value: 'Boulogne' },
    { value: 'StMartin' },
    { value: 'Wimereux' },
    { value: 'Outreau' },
    { value: 'LePortel' },
  ];

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
      id ? 
        ApiService.put(`books/${id}`, data)
        .then(() => navigate('/'))
        :
        ApiService.post('books', data)
        .then(() => navigate('/'))
}

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
        <h1> {id ? 'Update' : 'Create' } A Book </h1>
            <TextField
                required
                id="outlined-required"
                label="Title"
                type="text"
                name="title"
            />

            <TextField
                required      
                id="outlined-required"
                label="Type"
                select
                name="type"
            >
              {genres.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
                required
                id="outlined-required"
                label="Author"
                type="text"
                name="author"
            />
            <TextField
                required
                id="outlined-required"
                label="Location"
                select
                name="location"
              >
                {spot.map((option) => (
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
