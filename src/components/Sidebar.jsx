import styles from './Sidebar.module.css';

export function Sidebar() {
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
        </div>
    );
}
