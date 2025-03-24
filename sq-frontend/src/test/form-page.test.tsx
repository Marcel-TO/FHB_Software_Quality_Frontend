import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import FormPage from "../pages/form-page";

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual as any,
        useNavigate: () => mockNavigate
    };
});

const renderWithRouter = (component: React.ReactNode) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    );
};

describe('MovingForm', () => {
    afterEach(() => {
        cleanup();
        vi.clearAllMocks();
    });

    it('should render the form with all required fields', () => {
        renderWithRouter(<FormPage />);

        expect(screen.getByTestId('moving-form-heading')).toHaveTextContent("Let's get Moving");
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/from address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/to address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/moving date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it('should show validation errors when submitting empty form', async () => {
        renderWithRouter(<FormPage />);

        const submitButton = screen.getByText(/submit/i);
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/from address is required/i)).toBeInTheDocument();
            expect(screen.getByText(/to address is required/i)).toBeInTheDocument();
        });
    });

    it('should have a working back navigation link', () => {
        renderWithRouter(<FormPage />);

        const backLink = screen.getByText(/go back/i);
        expect(backLink).toBeInTheDocument();
        expect(backLink.closest('a')).toHaveAttribute('href', '/');
    });
});
