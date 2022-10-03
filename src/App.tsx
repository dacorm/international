import React, {Suspense, useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import {fetchAuthMe, selectIsAuth} from "./redux/slices/auth";
import {useAppDispatch, useAppSelector} from "./assets/hooks";
import FallbackLoader from "./components/FallbackLoader/FallbackLoader";

const ArticlePage = React.lazy(() => import('./pages/Article'));
const LoginPage = React.lazy(() => import('./pages/Login'))
const RegisterPage = React.lazy(() => import('./pages/Register'));
const ProfilePage = React.lazy(() => import('./pages/Profile'));
const MatchesPage = React.lazy(() => import('./pages/Matches'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));
const AdminPanelPage = React.lazy(() => import('./pages/Admin'));
const TournamentPage = React.lazy(() => import('./pages/Tournament'));
const MatchOverviewPage = React.lazy(() => import('./pages/MatchInfo'));
const PlayersPage = React.lazy(() => import('./pages/Players'));


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
                        <Suspense fallback={<FallbackLoader />}>
                            <ArticlePage/>
                        </Suspense>
                    }
                />
                <Route
                    path="login"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <LoginPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="register"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <RegisterPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <ProfilePage/>
                        </Suspense>
                    }
                />
                <Route
                    path="calendar"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <MatchesPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="calendar/:id"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <MatchesPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="admin"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <AdminPanelPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="admin/:id"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <AdminPanelPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="tournament"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <TournamentPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="match/:id"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <MatchOverviewPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="players"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <PlayersPage/>
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<FallbackLoader />}>
                            <NotFoundPage/>
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
