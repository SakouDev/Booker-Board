import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QRBook from '../components/qr/qrBook'
import QRSpot from '../components/qr/qrSpot'
import QRUser from '../components/qr/qrUser'

export default function GenQR() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'center' }}>
            QR For Spot
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <QRSpot />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'center' }}>
            QR For Book
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <QRBook />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'center' }}>
            QR For User
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <QRUser />
        </AccordionDetails>
      </Accordion>
    </>
  )
}
