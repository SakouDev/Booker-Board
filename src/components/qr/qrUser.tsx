import { Box, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import html2canvas from 'html2canvas'
import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import downloadjs from 'downloadjs';
import { ApiService } from '../../api/ApiService';

export default function QRUser() {

  const [user, setUser] = useState<any>()
  const [userId, setUserId] = useState<any>(null)
  const [bool, setBool] = useState(false)

    useEffect(() => {
      html2canvas(document.querySelector("#capture")! as HTMLElement, {useCORS : true}).then(canvas => {
          downloadjs( canvas.toDataURL(), `QR_${userId.name}.png`, 'image/png');
      }).catch(err => {
          console.log(err)
      })
    }, [bool])
    
    useEffect(() => {
        ApiService.getUser('v1/list')
        .then((response) => {
            setUser(response.data)
        })
    }, [])

    if(!user) return <div> Loading... </div>

  return (
    <Card style={{flex : 1, padding:'2%'}}>
      <Box
          sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
      >
        <CardContent>
        <h1> Generate QRCode for Users </h1>
        <TextField
            required      
            id="outlined-required"
            label="User"
            select
            name="book"
            onChange={(event:any) => {
                setUserId(event.target.value)
            }}
        >
          {user.map((option:any) => (
            <MenuItem key={option.name} value={option}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        </CardContent>
        {userId &&
            <>
                <CardContent style={{width:'fit-content'}} id='capture'>
                  <QRCode value =  { `{"memberId": "${userId.code}"} ` } />
                </CardContent>
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
