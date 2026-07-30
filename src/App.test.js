// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PulseCraft title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PulseCraft/i);
    expect(titleElement).toBeInTheDocument();
});
