import React from 'react';
import './App.css';
//import HelloWorldList from './HelloWorldList';
import SelectList from './SelectList';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";


const App = () => {

 const CountryList = [
   {name: "India", id:1},
   {name: "US", id:2},
   {name: "Aus", id:3},
   {name: "England", id:4},
   {name: "Finland", id:5},
   {name: "Srilanka", id:6}
   ]

const CountryListLI =() =>
    CountryList.map(list => {
    return (
    <div key={list.id}>
      {list.name}
     </div> 
    )
  }
   )
   const defaultTheme = createMuiTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
  <div className="App">
  <SelectList >
    <CountryListLI></CountryListLI>
  </SelectList>
  </div>
  </ThemeProvider>
  );
};

export default App;