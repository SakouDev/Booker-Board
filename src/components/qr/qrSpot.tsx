import { Box, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import html2canvas from 'html2canvas'
import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import downloadjs from 'downloadjs';

export default function QRSpot() {
  const [spotId, setSpotId] = useState<any>(null)
  const [bool, setBool] = useState(false)

    const spot = [
        { value: 'Boulogne' },
        { value: 'StMartin' },
        { value: 'Wimereux' },
        { value: 'Outreau' },
        { value: 'LePortel' },
    ];

    useEffect(() => {
      html2canvas(document.querySelector("#capture")! as HTMLElement, {useCORS : true}).then(canvas => {
          downloadjs( canvas.toDataURL(), `QR_${spotId}.png`, 'image/png');
      }).catch(err => {
          console.log(err)
      })
    }, [bool])

  return (
    <Card style={{flex : 1, padding:'2%'}}>
      <Box
          sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
      >
        <CardContent>
        <h1> Generate QRCode for Spots </h1>
        <TextField
            required      
            id="outlined-required"
            label="Spot"
            select
            name="spot"
            onChange={(event:any) => {
                setSpotId(event.target.value)
            }}
        >
          {spot.map((option:any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </CardContent>
        {spotId &&
            <>
                <CardContent style={{width:'fit-content'}} id='capture'>
                    <QRCode value =  { `{"spotName": "${spotId}"} ` }  />
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
