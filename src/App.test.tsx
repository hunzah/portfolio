import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {ThemeContext, themes} from './contexts/ThemeContext';

test('renders learn react link', () => {
    render(<ThemeContext.Consumer>

        {({theme, setTheme}) => (
            <App
                onChange={() => {
                    if (theme === themes.light) setTheme(themes.dark)
                    if (theme === themes.dark) setTheme(themes.light)
                }}
                value={theme === themes.dark}
            />
        )}
    </ThemeContext.Consumer>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
