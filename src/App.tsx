import React, { Suspense, useEffect } from 'react';
import './index.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import { useAppDispatch, useAppSelector } from './assets/hooks';
import FallbackLoader from './components/FallbackLoader/FallbackLoader';
import Background from './components/Background/Background';
import { Portal } from './components/Portal/Portal';

const ArticlePage = React.lazy(() => import('./pages/Article'));
const LoginPage = React.lazy(() => import('./pages/Login'));
const RegisterPage = React.lazy(() => import('./pages/Register'));
const ProfilePage = React.lazy(() => import('./pages/Profile'));
const MatchesPage = React.lazy(() => import('./pages/Matches'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));
const AdminPanelPage = React.lazy(() => import('./pages/Admin'));
const TournamentPage = React.lazy(() => import('./pages/Tournament'));
const MatchOverviewPage = React.lazy(() => import('./pages/MatchInfo'));
const PlayersPage = React.lazy(() => import('./pages/Players'));
const NewsPage = React.lazy(() => import('./pages/News'));
const PlayerPage = React.lazy(() => import('./pages/PlayerOverview'));
const LivePage = React.lazy(() => import('./pages/Live'));
const HeroesPage = React.lazy(() => import('./pages/Heroes'));
const HeroPage = React.lazy(() => import('./pages/HeroInfo'));
const GuidesAdminPage = React.lazy(() => import('./pages/GuidesAdmin'));

const modal = document.getElementById('modal') as HTMLElement;

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(selectIsAuth);

    useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    return (
        <div className="app">
            <Portal element={modal}>
                <Background />
            </Portal>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="article/:id"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <ArticlePage />
                        </Suspense>
                    )}
                />
                <Route
                    path="article/:title"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <ArticlePage />
                        </Suspense>
                    )}
                />
                <Route
                    path="login"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <LoginPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="register"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <RegisterPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="profile"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <ProfilePage />
                        </Suspense>
                    )}
                />
                <Route
                    path="calendar"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <MatchesPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="calendar/:id"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <MatchesPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="admin"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <AdminPanelPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="admin/:id"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <AdminPanelPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="guides/:id"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <GuidesAdminPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="tournament"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <TournamentPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="match/:id"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <MatchOverviewPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="match/:title"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <MatchOverviewPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="players"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <PlayersPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="players/:id"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <PlayerPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="news"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <NewsPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="live"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <LivePage />
                        </Suspense>
                    )}
                />
                <Route
                    path="heroes"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <HeroesPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="heroes/:id"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <HeroPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="*"
                    element={(
                        <Suspense fallback={<FallbackLoader />}>
                            <NotFoundPage />
                        </Suspense>
                    )}
                />
            </Routes>
        </div>
    );
}

export default App;
