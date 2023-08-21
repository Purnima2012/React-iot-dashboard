import { render, screen } from "@testing-library/react";
import Card from "../Card";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

test('reders login form', () => {
    const title='Test Name'
    const details='Test detail'
    const imageurl= 'test url '
    const targetPage = 'test url'
    const navText = 'test id'
 
    render (<BrowserRouter><Card  title= {title}
        details = {details}
        imageurl = {imageurl}
        targetPage = {targetPage}
        navText = {navText}/></BrowserRouter>);
    
    expect(screen.getByText('Test Name')).toBeInTheDocument;
    expect(screen.getByText('Test detail')).toBeInTheDocument;
    expect(screen.getByText('test id')).toBeInTheDocument;

})