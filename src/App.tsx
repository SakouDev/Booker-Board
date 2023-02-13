import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CircularProgress from '@mui/material/CircularProgress';
import { ApiService } from './api/ApiService';
import Tables from './components/Table/Table';

function App() {
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

    if(books == null) return <CircularProgress size={100} style={{marginTop:'20%'}} />
    console.log(books)
  return (
    <Tables data={books} headerData={HeaderCandidat} />
    // <h1>Books</h1>
  )
}

export default App;
