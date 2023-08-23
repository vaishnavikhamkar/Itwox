import {render,screen} from "@testing-library/react";
import Home from "../src/Components/Home";
import {expect, jest, test} from '@jest/globals';

test('Home', () => { 
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    
})