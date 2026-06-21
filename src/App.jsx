import { Layout } from './components/Layout.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="board" replace />} />
                <Route path="*" element={<Navigate to="board" replace />} />
            </Route>
        </Routes>
    );
}

export default App;
