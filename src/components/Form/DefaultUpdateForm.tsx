import { MenuItem, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ApiService } from '../../api/ApiService';

export default function DefaultUpdateForm({id} : any) {

    const [book, setBook] = useState<any>(null)
    const genres = [
        {value: 'Manga'},
        {value: 'Roman'},
        {value: 'Biography'},
        {value: 'Press'},
    ];
    const spot = [
        { value: 'Boulogne' },
        { value: 'StMartin' },
        { value: 'Wimereux' },
        { value: 'Outreau' },
        { value: 'LePortel' },
    ];
    useEffect(() => {
        ApiService.get(`books/${id}`)
        .then((response) => {
            setBook(response.data.result)
        })
    }, [id])

    function HandleChange(e :any){
        const data = {
            [e.target.name] : e.target.value
        }
        setBook({...book, ...data})
    }

    if(!book) return <div>Loading...</div>

  return (
    <>
        <TextField
            required
            id="outlined-required"
            label="Title"
            type="text"
            name="title"
            onChange={HandleChange}
            value={book.title}
        />

        <TextField
            required      
            id="outlined-required"
            label="Type"
            select
            name="type"
            onChange={HandleChange}
            value={book.type}
        >
        {genres.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.value}
            </MenuItem>
        ))}
        </TextField>

        <TextField
            required
            id="outlined-required"
            label="Author"
            type="text"
            name="author"
            onChange={HandleChange}
            value={book.author}
        />
        <TextField
            required
            id="outlined-required"
            label="Location"
            select
            name="location"
            onChange={HandleChange}
            value={book.location}
        >
            {spot.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.value}
            </MenuItem>
            ))}
        </TextField>
    </>
  )
}
