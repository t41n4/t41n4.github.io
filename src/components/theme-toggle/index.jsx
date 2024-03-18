import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.replace(newTheme === 'dark' ? 'light' : 'dark', newTheme);
    };

    useEffect(() => {
        // Apply the initial theme setting
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className="theme">
            <div className="dark">
                <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={() => handleThemeChange('dark')}
                />
                <div className="_text">Dark</div>
            </div>

            <div className="light">
                <input
                    type="checkbox"
                    checked={theme === 'light'}
                    onChange={() => handleThemeChange('light')}
                />
                <div className="_text">Light</div>
            </div>
        </div>
    );
}

export default ThemeToggle;
