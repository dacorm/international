import React from 'react';
import { Helmet, HelmetData } from 'react-helmet-async';
import Header from '../Header/Header';
import WhiteHeading from '../WhiteHeading/WhiteHeading';
import styles from '../../pages/Profile.module.css';
import TextSlide from '../TextSlide/TextSlide';
import Footer from '../Footer/Footer';

const helmetData = new HelmetData({});

interface LayoutProps {
    children: React.ReactNode;
    seoDescription: string;
    title: string;
    seoTitle: string;
    isRedirected?: boolean;
    href?: string;
    withRss?: boolean;
    newsTitle?: string;
    newsDescription?: string;
    image?: string;
    date?: string;
    text?: string;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    seoDescription, title,
    seoTitle,
    isRedirected = false,
    href,
    ...props
}): JSX.Element => (
    <div>
        <Helmet helmetData={helmetData}>
            <meta
                name="description"
                content={seoDescription}
            />
            <title>{seoTitle}</title>
            {isRedirected && <link rel="canonical" href={href} />}
        </Helmet>
        <Header />
        <WhiteHeading />
        <div className={styles.screen}>
            <h1 className={styles.title}>{title}</h1>
        </div>
        <TextSlide />
        {children}
        <Footer />
    </div>
);

export default Layout;
