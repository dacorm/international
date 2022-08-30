import React, {Suspense, useEffect} from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/Home";

const ArticlePage = React.lazy(() => import('./pages/Article'));
const LoginPage = React.lazy(() => import('./pages/Login'))
const RegisterPage = React.lazy(() => import('./pages/Register'));

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
                <Route
                    path="login"
                    element={
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <LoginPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="register"
                    element={
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <RegisterPage/>
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
