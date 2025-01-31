import { Stack, Switch, useColorScheme } from '@mui/material';
import React, { useState } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { createPortal } from 'react-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';

function ModeButton() {
    const {mode,setMode} = useColorScheme();
    const [open,setOpen] = useState(false);
    const [checked,setChecked] = useState(mode === 'dark' ? true : false);
    if(!mode)
        return null;

    function handleChange(event: React.ChangeEvent<HTMLInputElement>, checked: boolean){
        
        if(checked){
            setMode('dark');
        }
        else{
            setMode('light')
        }
        setChecked(checked);
        handleOpen();
    }

    function handleOpen(){
        setOpen(prev=>!prev);
    }
  return (
    <>
        {createPortal(
            <div className='mode-button'>
                <Stack direction={'row'} alignItems={'center'} className='change-mode'>
                    <div onClick={handleOpen} className='arrow_mode_button'>
                        {open ? (<ArrowForwardIcon />) : (<ArrowBackIcon/>)}
                    </div>
                    {
                        open && (
                            <>
                                <WbSunnyIcon sx={{color:'#f39c12'}}/>
                                <Switch onChange={handleChange}  checked={checked}/>
                                <DarkModeIcon sx={{color:'#848888'}}/>
                            </>
                        )
                    }
                </Stack>
            </div>,
            document.getElementById('mode')!
        )}
    </>
  );
}

export default ModeButton