import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogContentText } from '@mui/material';

const ConfirmationDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
    <DialogTitle>Подтверждение удаления</DialogTitle>
    <DialogContent>
        <DialogContentText>
        {`Вы действительно хотите удалить эту ${props.itemType}?`}
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={props.handleClose}>Отмена</Button>
        <Button onClick={props.handleConfirm} color="error">Удалить</Button>
    </DialogActions>
</Dialog>
  )
}

export default ConfirmationDialog
