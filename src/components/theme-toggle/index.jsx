import { useEffect, useState } from 'react';
import './index.scss';

const prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const ThemeToggle = () => {

    useEffect(() => {
        // Add listener to update styles
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => handleThemeChange(e.matches ? 'dark' : 'light'));
        // Remove listener
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
            });
        }
    }, []);

    const handleThemeChange = (newTheme) => {
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        document.documentElement.classList.replace(currentTheme, newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <div className="theme">
            <div className="dark">
                <input
                    type="checkbox"
                    checked={prefersTheme === 'dark'}
                    onChange={() => handleThemeChange('dark')}
                />
                <div className="_text">Dark</div>
            </div>

            <div className="light">
                <input
                    type="checkbox"
                    checked={prefersTheme === 'light'}
                    onChange={() => handleThemeChange('light')}
                />
                <div className="_text">Light</div>
            </div>

            {/* <div className="os">
                <input
                    type="checkbox"
                    checked={theme === prefersTheme}
                    onChange={() => handleThemeChange('os')}
                />
                <div className="_text">OS</div>
            </div> */}
        </div>
    );
}

export default ThemeToggle;
