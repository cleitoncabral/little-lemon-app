import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import BookingForm from './components/BookingForm';

describe('Renders the BookingForm heading', () => {
    it ('component is rendering', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    })
})