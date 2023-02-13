import React, { useState, useEffect } from 'react'
import Tables from '../components/Table/Table'
import ApiService from "../api/ApiService"
import CircularProgress from '@mui/material/CircularProgress'

export default function Books() {

  const [books, setBooks] = useState(null)

  useEffect(() => {
    ApiService.get('books').then((response)=>console.log(response.data))
  }, [])

    const HeaderCandidat = 
    {
      option1 : "Title",
      option2 : "Type",
      option3 : "Author",
      option4 : "Location",
      option5 : "Availability"
    }

    if(books == null) return <CircularProgress size={100} style={{marginTop:'20%'}} />

  return (
    // <Tables data={books} headerData={HeaderCandidat} />
    <h1>Books</h1>
  )
}
