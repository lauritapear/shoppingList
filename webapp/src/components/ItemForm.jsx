import React, {useState} from "react";
import {
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function ItemForm(props) {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
    // root: {
    //   padding: theme.spacing(3, 2)
    // },
    container: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "center",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-end",
    },
    textField: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      // margin: `${theme.spacing(1)}px auto`,
      // padding: theme.spacing(2),
      width: 400,
    },
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 3),
    },
    paper: {
      // display: "flex",
      maxWidth: 400,
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    },
  }));

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if(props.formAction === 'Add'){
      props.onAddItem(name,description);
    }else if(props.formAction === 'Edit'){
      props.onUpdateItem(name,description, false, props.itemID);
    }
  };

  const handleCancel = () => {
    props.onCancel();
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.paper}>
          <Typography variant="h5" component="h3">
            {props.formAction} an Item
          </Typography>
          <Typography component="p">
            {props.formAction} your item below
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.paper}>
            <TextField
              id="outlined-helperText"
              label="Item Name"
              defaultValue=""
              variant="outlined"
              // defaultValue={formInput.name}
              className={classes.textField}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className={classes.paper}>
            <TextField
              className={classes.textField}
              id="required"
              multiline
              rows={10}
              label="Description"
              // defaultValue={formInput.description}
              variant="outlined"
              inputProps={{ maxLength: 100 }}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className={classes.paper}>
            <FormControl variant="outlined" className={classes.textField}>
              <InputLabel htmlFor="outlined-age-native-simple">How many?</InputLabel>
              <Select
                native
                // value={state.age}
                // onChange={handleChange}
                label="How many?"
                inputProps={{
                  name: "count",
                  id: "outlined-count-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Select>
            </FormControl>
          </div>
          <div className={classes.buttonContainer}>
            <div className={classes.paper}>
              <Button className={classes.button} onClick={handleCancel}>Cancel</Button>
            </div>
            <div className={classes.paper}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                {props.formAction} Item
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
