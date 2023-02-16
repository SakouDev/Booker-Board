import { Box, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import html2canvas from 'html2canvas'
import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import downloadjs from 'downloadjs';
import { ApiService } from '../../api/ApiService';

export default function QRBook() {

  const [book, setBook] = useState<any>([])
  const [id, setId] = useState<any>(null)
  const [bookId, setBookId] = useState<any>(null)
  const [bool, setBool] = useState(false)
    useEffect(() => {
        ApiService.get(`books/${id}`)
        .then((response) => {
            setBookId(response.data.result)
        })
    }, [id])

    useEffect(() => {
      html2canvas(document.querySelector("#capture")! as HTMLElement, {useCORS : true}).then(canvas => {
          downloadjs( canvas.toDataURL(), `QR_${bookId.title}.png`, 'image/png');
      }).catch(err => {
          console.log(err)
      })
    }, [bool])
    

    useEffect(() => {
        ApiService.get('books')
        .then((response) => {
            setBook(response.data.result)
        })
    }, [])

  return (
    <Card style={{flex : 1, padding:'2%'}}>
      <Box
          sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
      >
        <CardContent>
        <h1> Generate QRCode for books </h1>
        <TextField
            required      
            id="outlined-required"
            label="Book"
            select
            name="book"
            onChange={(event:any) => {
                setId(event.target.value)
            }}
        >
          {book.map((option:any) => (
            <MenuItem key={option.value} value={option._id}>
              {option.title}
            </MenuItem>
          ))}
        </TextField>
        </CardContent>
        {id &&
            <>
              {bookId?._id &&
                <CardContent style={{width:'fit-content'}} id='capture'>
                  <QRCode value = {bookId._id} />
                </CardContent>
              }
              <div>
                <Button 
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => setBool(!bool)}
                >
                  Download
                </Button>
              </div>
            </>
        }
      </Box>
    </Card>
  )
}
