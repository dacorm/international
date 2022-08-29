import React, {Suspense, useEffect} from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/Home";

const ArticlePage = React.lazy(() => import('./pages/Article'));

const ScrollToTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route
                    path="article/:id"
                    element={
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <ArticlePage/>
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
