import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default class FormDialog extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <React.Fragment>
      <Button onClick={this.handleClickOpen} color="primary" variant="outlined" style={{margin:'10px'}}>Submit Tracking</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Tracking Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Provide the tracking information to the buyer. It will be encrypted.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Tracking Number"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              <LockOutlinedIcon/>Encrypt
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
