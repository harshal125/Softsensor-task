import React, {useState} from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './style.css'


const useStyles = makeStyles((theme) => ({
    root: {
      textDecoration: 'none'
    },
    autocomplete: {
      background: '#EBEBEB',
      boxShadow: 'inset 0px -2px 0px #33A4FF',
      borderRadius: '2px',
    },
    textField:{
      // minHeight:'104px'
    }
  }));
  
  

const TextFieldCamponent = () => {
    const classes = useStyles();

    const [autoCompleteValue, setAutoCompleteValue] = useState([]);
    const [options, setOptions] = useState(["option one", "option two"]);
  
    const handleOptions = (e) => {
      if (e.keyCode === 13 && e.target.value) {
        setAutoCompleteValue(autoCompleteValue.concat(e.target.value));
        const concatOtions = options.concat(e.target.value)
        const concatOtionsLowerCase = concatOtions.map(v => v.toLowerCase());
        const uniqueArray = concatOtionsLowerCase.filter(function (item, pos, self) {
          return self.indexOf(item) == pos;
        })
        setOptions(uniqueArray);
      }
      console.log("options", options)
    }
  
    const onOptionChange = (e, newval, reason) => {
      setAutoCompleteValue(newval);
      const concatOtions = options.concat(newval)
      const concatOtionsLowerCase = concatOtions.map(v => v.toLowerCase());
      const uniqueArray = concatOtionsLowerCase.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })
      setOptions(uniqueArray);
      console.log("options", options)
    }
  
    return (
      <div className="App">
        <div className="tags-label">Tags</div>
        <div className="textfield-heading">select time for your event</div>
        <Autocomplete
          className={classes.autocomplete}
          multiple
          // id="tags-outlined"
          options={options}
          value={autoCompleteValue}
          onChange={(e, newval, reason) => { onOptionChange(e, newval, reason) }}
          renderInput={(params) => (
            <TextField
              className={classes.textField}
              {...params}
              placeholder="Add Tags"
              onKeyDown={(e) => { handleOptions(e) }}
            />
          )}
        />
      </div>
    );
}


export default TextFieldCamponent