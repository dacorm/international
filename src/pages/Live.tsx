import React from 'react';
import styles from './Live.module.css';
import Layout from "../components/Layout/Layout";

const Live = () => {
    return (
        <Layout seoDescription='Live матчи Dota2'
                seoTitle={`Live матчи Dota2`}
                title={`Live матчи Dota2`}>
            <div className={styles.content}>
                Matches
                <ul className={styles.table}>
                    <li className={styles.tableHeading}>22.11.2022</li>
                </ul>
            </div>
        </Layout>
    );
};

export default Live;