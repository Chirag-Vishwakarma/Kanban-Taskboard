import { NavLink } from 'react-router-dom';

import { useApp } from '../context/AppContext';
import styles from './Sidebar.module.css';

export function Sidebar() {
    const { theme, setTheme } = useApp();

    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                        x="3"
                        y="3"
                        width="7"
                        height="7"
                        rx="1.5"
                        fill="var(--accent)"
                    />
                    <rect
                        x="14"
                        y="3"
                        width="7"
                        height="7"
                        rx="1.5"
                        fill="var(--accent)"
                        opacity="0.6"
                    />
                    <rect
                        x="3"
                        y="14"
                        width="7"
                        height="7"
                        rx="1.5"
                        fill="var(--accent)"
                        opacity="0.4"
                    />
                    <rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                        rx="1.5"
                        fill="var(--accent)"
                        opacity="0.2"
                    />
                </svg>
                Kanban Pro
            </header>
            <nav className={styles.menu}>
                <NavLink to="/board" className={styles.menuItem}>
                    Boards
                </NavLink>

                {/* {map boards & take outside} */}

                <NavLink to="/analytics" className={styles.menuItem}>
                    Analytics
                </NavLink>
                <NavLink to="/archive" className={styles.menuItem}>
                    Archive
                </NavLink>
            </nav>

            <footer className={styles.themeToggler}>
                <button
                    onClick={() =>
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                    Dark Mode
                </button>
            </footer>
        </div>
    );
}
