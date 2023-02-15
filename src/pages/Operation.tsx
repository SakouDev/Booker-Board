import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import Form from '../components/Form/CreateForm';
import BorrowForm from '../components/Form/BorrowForm';
import ReturnForm from '../components/Form/ReturnForm';
import UpdateForm from '../components/Form/UpdateForm';
import DeleteForm from '../components/Form/DeleteForm';

export default function ControlledAccordions({dataCode} : any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

      handleChange('panel1')

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'center' }}>
            Create a Book
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Form/>
        </AccordionDetails>
      </Accordion>

     
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'center' }}>
            Update a Book
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UpdateForm/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'center' }}>
            Delete a book
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DeleteForm/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'center' }}>
            Borrow a Book
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <BorrowForm dataCode={dataCode} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, textAlign:'center' }}>
            Return a Book
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReturnForm/>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
