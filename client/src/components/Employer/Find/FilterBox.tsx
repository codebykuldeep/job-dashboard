import React from 'react'
import SkillField from './SkillField';
import classes from './filterbox.module.css';
import { FormLabel, TextField } from '@mui/material';

interface FilterBoxProps{
    skill:string;
    experience:number;
    updateSkill:(value:string)=>void;
    updateExp:(value:number)=>void;
}

function FilterBox({experience,skill,updateExp,updateSkill}:FilterBoxProps) {

    // function handleSlider(event: Event, value: number | number[], activeThumb: number){
    //     if(Array.isArray(value)){
    //         updateExp(value[0])
    //     }
    //     else{
    //         updateExp(value);
    //     }
    // }
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        if(Number(value) >= 0){
            updateExp(Number(value));
        }
        else{
            updateExp(0);
        }
    }
    
  return (
    <div>
        <div className={classes.heading}>Filter</div>
        <div className={classes.field}>
            <div className={classes.skill_field}>
                <SkillField skill={skill} onChange={updateSkill}/>
            </div>
            <div className={classes.slider}>
            <FormLabel htmlFor='experience'>Experience</FormLabel>
            {/* <Slider
                id='experience'
                name='experience'
                value={experience}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={1}
                marks
                min={0}
                max={10}
                onChange={handleSlider}
                /> */}
                <TextField value={experience} id="experience" name='experience' type='number'  variant="outlined"  onChange={handleChange}/>
            </div>
        </div>
    </div>
  )
}

export default FilterBox