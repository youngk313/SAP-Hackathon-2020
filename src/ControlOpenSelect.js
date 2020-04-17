import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.changeCountry(country);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Choose a country</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Country</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={country}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value={""}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Canada"}>Canada</MenuItem>
                <MenuItem value={"China"}>China</MenuItem>
                <MenuItem value={"Italy"}>Italy</MenuItem>
                <MenuItem value={"Spain"}>Spain</MenuItem>
                <MenuItem value={"US"}>United States</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
