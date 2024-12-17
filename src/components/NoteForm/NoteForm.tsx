import React from 'react';
import { TextField, Button } from '@mui/material';

interface NoteFormProps {
 title:string 
 details: string;
 onSubmit:(e:React.FormEventHandler<HTMLFormElement>)=>void
 onChange: (field: string, value: string) => void;
 errors: { title?: string; details?: string };
 fontColor: string;
}

const NoteForm: React.FC<NoteFormProps> = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <TextField
        label="Title"
        color='transparent' 
        value={props.title}
        onChange={(e) => props.onChange('title', e.target.value)} 
        error={Boolean(props.errors.title)}
        helperText={props.errors.title}
        fullWidth
        margin="normal"
        InputProps={{
          sx: {
            borderRadius:'14px',
            }
        }}
     />
     
      <TextField
        label="Details"
        color='transparent' 
        value={props.details}
        onChange={(e) => props.onChange('details', e.target.value)}
        multiline
        rows={1.3}
        error={Boolean(props.errors.details)}
        helperText={props.errors.details}
        fullWidth
        InputProps={{
          sx: {
              borderRadius:'14px',
            }
        }}
  />


 <Button  sx={{borderRadius:'30px', backgroundColor: props.toggleStyle.backgroundColor, color: props.toggleStyle.iconColor, marginBottom:'20px', marginTop:'20px'}} type="submit" variant="contained" color="primary" fullWidth>
Submit
</Button>  


    </form>
);
}

export default NoteForm;