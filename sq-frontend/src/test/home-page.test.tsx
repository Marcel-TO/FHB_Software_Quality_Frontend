import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import HomePage from '../pages/home-page';

const renderWithRouter = (component: React.ReactNode) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    );
};

describe('HomePage', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render the main title', async () => {
        renderWithRouter(<HomePage />);
        expect(await screen.findByText('S T')).toBeInTheDocument();
        expect(await screen.getByText('Smooth Transitions')).toBeInTheDocument();
    });

    it('should render the main marketing text', () => {
        renderWithRouter(<HomePage />);
        expect(screen.getByText(/Save stress, time, and money with our moving services/)).toBeInTheDocument();
    });

    it('should have a working link to the form page', () => {
        renderWithRouter(<HomePage />);
        const formLink = screen.getByText('Get moving');
        expect(formLink).toBeInTheDocument();
        expect(formLink.getAttribute('href')).toBe('/form');
    });

    it('should have a working learn more link', () => {
        renderWithRouter(<HomePage />);
        const learnMoreLink = screen.getByText('Learn more');
        expect(learnMoreLink).toBeInTheDocument();
        expect(learnMoreLink.closest('a')).toHaveAttribute('href', '/');
    });

    it('should render the welcome message for desktop view', () => {
        renderWithRouter(<HomePage />);
        const welcomeMessage = screen.getByText(/Welcome to the only moving-company you will ever need/);
        expect(welcomeMessage).toBeInTheDocument();
    });

    it('should render read more link in welcome section', () => {
        renderWithRouter(<HomePage />);
        const readMoreLink = screen.getByText('Read more');
        expect(readMoreLink).toBeInTheDocument();
        expect(readMoreLink.closest('a')).toHaveAttribute('href', '/');
    });

    it('should render ArrowRightIcon components', () => {
        renderWithRouter(<HomePage />);
        const arrows = document.querySelectorAll('svg');
        expect(arrows.length).toBe(2); // Two arrows - one for read more, one for learn more
    });

    it('should have proper styling classes for main container', () => {
        const { container } = renderWithRouter(<HomePage />);
        const mainDiv = container.firstChild;
        expect(mainDiv).toHaveClass('bg-linear-300', 'from-[#360033]', 'to-[#0b8793]');
    });

    it('should render the main title', () => {
        renderWithRouter(<HomePage />);
        expect(screen.getByText('S T')).toBeInTheDocument();
        expect(screen.getByText('Smooth Transitions')).toBeInTheDocument();
    });

    it('should render the main marketing text', () => {
        renderWithRouter(<HomePage />);
        expect(screen.getByText(/Save stress, time, and money with our moving services/)).toBeInTheDocument();
    });

    it('should have a working link to the form page', () => {
        renderWithRouter(<HomePage />);
        const formLink = screen.getByText('Get moving');
        expect(formLink).toBeInTheDocument();
        expect(formLink.getAttribute('href')).toBe('/form');
    });

    it('should have a working learn more link', () => {
        renderWithRouter(<HomePage />);
        const learnMoreLink = screen.getByText('Learn more');
        expect(learnMoreLink).toBeInTheDocument();
        expect(learnMoreLink.closest('a')).toHaveAttribute('href', '/');
    });
});
