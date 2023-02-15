import { Box, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ApiService } from '../../api/ApiService'

export default function Form() {

  const navigate = useNavigate()
  let { idParams } = useParams()

  console.log(idParams)

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

  function HandleSubmit(event : any){
    event.preventDefault()
    const data : any = {
        "Candidat": {
            firstName: event.target.firstname.value,
            lastName: event.target.lastname.value,
            birthday: `${new Date()}`,
            // birthday: date
        }
    }
        idParams ? 
        ApiService.put(`books/${idParams}`, data)
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
                <h1>Candidats</h1>

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
                        label="Title"
                        type="text"
                        name="title"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        type="text"
                        name="title"
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
