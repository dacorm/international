import React, { Suspense } from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

const ArticlePage = React.lazy(() => import('./pages/Article'));

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="article/:id"
                element={
                    <Suspense fallback={<div>Идёт загрузка...</div>}>
                        <ArticlePage />
                    </Suspense>
                }
            />
        </Routes>
    );
}

export default App;
