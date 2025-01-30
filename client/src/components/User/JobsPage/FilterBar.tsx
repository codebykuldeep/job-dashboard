import React, { useState } from 'react';
import classes from './jobs-main.module.css'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Slider } from '@mui/material';
import FilterIcon from '@mui/icons-material/FilterAlt';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { searchActions } from '../../../store/searchSlice';

function FilterBar() {
    const dispatch = useDispatch<AppDispatch>();
    const [locationArr,setLocationArr] = useState<string[]>([])
    const [experience,setExperience] = useState<number>(0)


    function handleLocation(event:React.ChangeEvent<HTMLInputElement>){
        const value = (event.target.value).toLowerCase();
        if(locationArr.includes(value)){
            setLocationArr(prev=>prev.filter((val)=>val!==value));
        }
        else{
            setLocationArr((prev)=>([...prev,value]));
        }
    }
    function handleExp(event: Event, value: number | number[], activeThumb: number){
        if(Array.isArray(value)){
            setExperience(value[0]);
        }
        else{
            setExperience(value);
        }
    }

    function handleFilter(){
        dispatch(searchActions.applyFilter({location:locationArr,experience}));
    }
    
  return (
    <Box className={classes.filter} sx={{color:'text.primary',bgcolor:'action.hover'}}>
        <div className={classes.filter_head}>
           <span> <FilterIcon/></span><span>Filters</span>
        </div>
        <div>
            <div>Locations</div>
            <FormGroup onChange={handleLocation} className={classes.location}>
                <div>
                <FormControlLabel control={<Checkbox value={'Noida'} />} label="Noida" />
                <FormControlLabel control={<Checkbox  value={"Gurugram"}/>} label="Gurugram" />
                </div>
                <div>
                <FormControlLabel control={<Checkbox  value={'Banglore'}/>} label="Banglore" />
                <FormControlLabel control={<Checkbox  value={'Delhi'}/>} label="Delhi" />
                </div>
                <div>
                <FormControlLabel control={<Checkbox value={'Pune'} />} label="Pune" />
                <FormControlLabel control={<Checkbox  value={"Gurugram"}/>} label="Kolkata" />
                </div>
            </FormGroup>
        </div>
        <div>
            <div>Experience</div>
            <div>
            <Slider defaultValue={0}  max={10} aria-label="Default" valueLabelDisplay="auto" onChange={handleExp}/>
            </div>
        </div>
        <div className={classes.filter_apply}>
            <Button variant='contained' onClick={handleFilter}>Apply</Button>
        </div>
    </Box>
  )
}

export default FilterBar