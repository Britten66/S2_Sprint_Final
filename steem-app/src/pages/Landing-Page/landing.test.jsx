


// starting off with imports for the tests

import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './landing'

describe('landingPage', () => { 
    
    test('should rending components on page with no error', () => { 
        render(
            <BrowserRouter>
            <LandingPage/>
            </BrowserRouter>
        );

     
 });

 test('displays Welcome heading', () => {
        render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );
        const heading = screen.getByRole('heading', { name: /welcome/i });
        expect(heading).toBeInTheDocument();
    });
test('displays Featured Games heading', () => {
    render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    );
    const heading = screen.getByRole('heading', { name: /featured games/i });
    expect(heading).toBeInTheDocument();
});
 test('displays Featured Games heading', () => {
        // RENDER - Put component on fake page
        render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );
        
        // /featured games/i = regex pattern, case insensitive
        const heading = screen.getByRole('heading', { name: /featured games/i });
        
        // CHECK HERE !! -- This Was wrong earlier on the last test - Verify the heading is in the DOM
        expect(heading).toBeInTheDocument();
    });
});