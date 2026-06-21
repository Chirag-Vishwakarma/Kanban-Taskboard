import { Sidebar } from './Sidebar.jsx';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <>
            <div>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
}
