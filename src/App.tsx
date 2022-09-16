import React, {Suspense, useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import {fetchAuthMe, selectIsAuth} from "./redux/slices/auth";
import {useAppDispatch, useAppSelector} from "./assets/hooks";

const ArticlePage = React.lazy(() => import('./pages/Article'));
const LoginPage = React.lazy(() => import('./pages/Login'))
const RegisterPage = React.lazy(() => import('./pages/Register'));
const ProfilePage = React.lazy(() => import('./pages/Profile'));
const MatchesPage = React.lazy(() => import('./pages/Matches'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));

const ScrollToTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(selectIsAuth);

    useEffect(() => {
        dispatch(fetchAuthMe());
    }, [])


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
                <Route
                    path="profile"
                    element={
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <ProfilePage/>
                        </Suspense>
                    }
                />
                <Route
                    path="calendar"
                    element={
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <MatchesPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="calendar/:id"
                    element={
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <MatchesPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <NotFoundPage/>
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
