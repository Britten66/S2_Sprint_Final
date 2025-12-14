


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

});