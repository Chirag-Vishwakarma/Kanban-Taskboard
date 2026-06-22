import { Sidebar } from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.page}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
