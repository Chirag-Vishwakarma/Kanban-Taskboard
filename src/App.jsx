import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout.jsx';
import { AnalyticsPage } from './pages/AnalyticsPage.jsx';
import { ArchivePage } from './pages/ArchivePage.jsx';
import { BoardPage } from './pages/BoardPage.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/board" replace />} />
                <Route path="board" element={<BoardPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="archive" element={<ArchivePage />} />
                <Route path="*" element={<Navigate to="/board" replace />} />
            </Route>
        </Routes>
    );
}

export default App;
