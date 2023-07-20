import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './providers/ThemeProvider';

import {ThemeContext, themes} from './contexts/ThemeContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        <ThemeProvider>
            <ThemeContext.Consumer>

                {({theme, setTheme}) => (
                    <App
                        onChange={() => {
                            if (theme === themes.light) setTheme(themes.dark)
                            if (theme === themes.dark) setTheme(themes.light)
                        }}
                        value={theme === themes.dark}
                    />
                )}
            </ThemeContext.Consumer>
        </ThemeProvider>
    </React.StrictMode>
);


reportWebVitals();

