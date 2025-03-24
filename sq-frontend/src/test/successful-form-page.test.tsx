import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import FormSuccessPage from '../pages/successful-form-page';

const renderWithRouter = (component: React.ReactNode) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    );
};

describe('FormSuccessPage', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render the success message', () => {
        renderWithRouter(<FormSuccessPage />);
        expect(screen.getByText('Form submitted successfully')).toBeInTheDocument();
    });

    it('should have a working link back to home', () => {
        renderWithRouter(<FormSuccessPage />);
        const homeLink = screen.getByText('Go back to Home Screen');
        expect(homeLink).toBeInTheDocument();
        expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    });

    it('should render the arrow icon', () => {
        renderWithRouter(<FormSuccessPage />);
        const arrowIcon = document.querySelector('svg');
        expect(arrowIcon).toBeInTheDocument();
    });

    it('should have correct styling classes', () => {
        const { container } = renderWithRouter(<FormSuccessPage />);
        const mainDiv = container.firstChild;
        expect(mainDiv).toHaveClass('bg-white', 'h-screen', 'w-screen');
    });
});
