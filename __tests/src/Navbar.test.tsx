import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Navbar from '@components/Navbar';

describe('App', () => {
    
    it('renders with classes', () => {
        render(<Navbar/>);
        const navbar = screen.getByRole('navigation');
        
        expect(navbar).toHaveTextContent("EFT RAID-RUNNER")
    });
});