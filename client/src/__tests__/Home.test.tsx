import { screen, waitFor } from '@testing-library/react';

import Home from '../components/Common/Home/Home';
import { renderWithProviders } from '../utils-tests/store-wrapper';
import {  userActions } from '../store/userSlice';
import { setupStore } from '../utils-tests/store-init';

import userEvent from "@testing-library/user-event";

describe('HOME PAGE TEST CASES',()=>{
    test('initialize "HomePage" with initialValue', () => {
        //with test values
        const store = setupStore();
        store.dispatch(userActions.setUser(null));
        renderWithProviders(<Home />, {store});
        const HomeElement = screen.getByText("Perfect Job");
        expect(HomeElement).toBeInTheDocument();
   });


   test('renders Login button on Home page',async()=>{
    const store = setupStore();
    store.dispatch(userActions.setUser(null));
    renderWithProviders(<Home />, {store});


    //const user = userEvent.setup();
    const btnElement = screen.getByRole("button", { name: /login/i });

    expect(btnElement).toBeInTheDocument();
    })


   test('render auth page on button click',async()=>{
        renderWithProviders(<Home/>);


        //const user = userEvent.setup();
        userEvent.click(screen.getByRole("button", { name: /login/i }));

        await waitFor(()=>{
            const loginElement = screen.getByText(/login/i);
            expect(loginElement).toBeInTheDocument();
        })
   })
})
