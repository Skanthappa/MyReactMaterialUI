import React from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
const SelectList = (props) => {
    const useStyles = makeStyles({
        option: {
          fontSize: 15,
          "& > span": {
            marginRight: 10,
            fontSize: 18,
          },
        },
        paper: {
          borderColor: "Red",
          border: 2,
        },
      });    

      const classes = useStyles();
    return(
        
        <div> 
           
         {props.children}
        </div>
    )
}



export default SelectList;
