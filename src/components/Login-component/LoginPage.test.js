import { screen, fireEvent, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import LoginPage from './LoginPage';
import { BrowserRouter } from "react-router-dom";
import { renderWithProviders } from "../Commons/test-utils";
import { LogActions } from "../Commons/store/Store";

test('reders login form', () => {
    renderWithProviders(<BrowserRouter><LoginPage/></BrowserRouter>, {});

    const emailField = screen.getByLabelText(/Email/);
    const passwordField = screen.getByLabelText(/Password/);
    const logInBtn = screen.getByText(/Log In/);

    expect(emailField).toBeInTheDocument;
    expect(passwordField).toBeInTheDocument;
    expect(logInBtn).toBeInTheDocument;
})

// test('submit login form', () => {
//     //const submitLoginFormHandler = jest.fn();
//     renderWithProviders(<BrowserRouter><LoginPage /></BrowserRouter>, {});

//     act(async () => {
//         const emailField = screen.getByLabelText(/Email/);
//         const passwordField = screen.getByLabelText(/Password/);
//         const logInBtn = screen.getByText(/Log In/);
    
//         await userEvent.type(emailField, "a@a.com")
//         await userEvent.type(password, "")
    
    
//        await userEvent.click(logInBtn);
//     })
   
// //expect(logInBtn).toBeDisabled;
//    //expect(screen.getByText('/*password is required/')).toBeInTheDocument;
//    //(emailField).toHaveValue('a@a.com')
    
// //     const btn = screen.getByText('Log In').closest('button');
// //     //const btn = screen.getByRole("button");
// // const errorMsg = screen.getByText('/*Email must not be empty./')
//     // expect(errorMsg).toBeInTheDocument;

// })