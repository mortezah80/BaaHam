import React from 'react'
import './SabteAgahi_DropDown.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive'






function SabteAgahi_DropDown(props) {
    const res500 = useMediaQuery({ query: '(max-width: 500px)' })
    const res600 = useMediaQuery({ query: '(max-width: 600px)' })
    const res700 = useMediaQuery({ query: '(max-width: 700px)' })
    let selectHeight = "36px";
    if (res700) {
        selectHeight = "33px"
    }
    if (res600) {
        selectHeight = "27px"
    }
    if (res500) {
        selectHeight = "23px"
    }
const customStyles = {
    
    control: (base, state) => ({
      ...base,
      /*borderColor: state.isFocused ? "yellow" : "green",
      "&:hover": {
        borderColor: state.isFocused ? "red" : "blue"
      }*/
      minHeight:selectHeight,
      height:selectHeight,
      width:'275px',
      border:'2px solid rgb(159, 159, 159)',
      borderRadius:"10px",
      "&:hover": {
        borderColor: "#d1d1d1"
      },
      '&:focus':{
        borderColor: "#d1d1d1"
      },
      "&:active":{ 
        borderColor: "#d1d1d1"
      },
      display:'flex',
    }),
    option: (provided, state) => ({
        ...provided,

    }),
    indicatorSeparator: (styles) => ({display:'none'}),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgb(98, 98, 98)',
      fontSize:res500?'8px' :res600?'9px' : res700?'10px':'12px',
      display:'flex',
      
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: selectHeight,
      padding: '0 6px',
      paddingBottom:'5px',
      display:'flex',
      fontSize:'13px',
      color: 'rgb(98, 98, 98)',
      fontWeight : 'bold'
    }),
    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height:selectHeight,
    }),
    
    dropdownIndicator: base => ({
      ...base,
      fontSize:res600?'6px' : '8px',
  
      "&:hover": {
        color: "#5843b1" 
      },
      paddingTop: 2,
      paddingBottom:2 ,
    }),
    clearIndicator: (styles) => ({
      ...styles,
      paddingTop: 2,
      paddingBottom: 2,
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),   
   
  };


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const optionsList1 = [
        { label: 'Option 1', value: 'Option 1'},
        { label: 'Option 2', value: 'Option 2'},
        { label: 'Option 3', value: 'Option 3'},
        { label: 'Option 4', value: 'Option 4'},
    ];
  return (
    <div>
        <Select
        placeholder={props.placeholder}
        styles={customStyles}
        options={optionsList1}
        >
  
        </Select>
    </div>
  )
}

export default SabteAgahi_DropDown