import React, { useState, useEffect } from 'react'
import Tables from '../components/Table/Table'
import {ApiService} from "../api/ApiService"
import CircularProgress from '@mui/material/CircularProgress'
import SideBar from '../components/Form/CreateForm'

export default function Books() {

  const [books, setBooks] = useState(null)

  useEffect(() => {
    ApiService.get('books').then((response)=>setBooks(response.data.result))
  }, [])

    const HeaderCandidat = 
    {
      option1 : "Title",
      option2 : "Type",
      option3 : "Author",
      option4 : "Location",
      option5 : "Availability" 
    }

    if(books === null) return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress size={100} style={{marginTop:'20%'}} />
      </div>
    )
  return (
    <>
      <Tables data={books} headerData={HeaderCandidat} />
    </>
  )
}
