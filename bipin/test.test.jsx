import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button with the correct label', () => {
    render(<Button label="Click Me" />);
    
    // Check if the button contains the correct text
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();  // Mock function to track clicks
    render(<Button label="Click Me" onClick={handleClick} />);
    
    // Click the button
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    
    // Check if the mock function was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick if no function is passed', () => {
    render(<Button label="Click Me" />);
    
    // Click the button
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    
    // No function passed, so it should not throw an error or call anything
    expect(true).toBe(true);  // No assertion needed, just verifying no error occurs
  });
});
