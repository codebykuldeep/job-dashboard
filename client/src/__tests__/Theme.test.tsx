import {  screen  } from '@testing-library/react';

import Home from '../components/Common/Home/Home';
import { renderWithProviders } from '../utils-tests/store-wrapper';
;

describe('THEME TEST CASES',()=>{
    test('check light theme on default',async()=>{
        
        renderWithProviders(<Home/>)
        const HomeElement = screen.getByTestId('home-bg')
        expect(HomeElement).toHaveStyle({backgroundColor:'#fff'});
 
    })

    // test('check dark theme on default',async()=>{
        
    //     renderWithProviders(<ModeButton/>)

    //     const btnElement = screen.
    //     expect(btnElement).toBeInTheDocument();
    //     //const HomeElement = screen.getByTestId('home-bg')
    //     //expect(HomeElement).toHaveStyle({backgroundColor:'#121212'});
 
    // })
})
