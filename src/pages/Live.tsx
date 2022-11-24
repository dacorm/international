import React, {useEffect, useState} from 'react';
import styles from './Live.module.css';
import Layout from "../components/Layout/Layout";
import LiveTableItem from "../components/LiveTableItem/LiveTableItem";
import axios from "axios";

const Live = () => {
    const [matches, setMatches] = useState();

    const fetchMatches = async () => {
        try {
            const data = await axios.get('http://prt.betcity.ru/api/v2/events', {
                headers: {
                    PRTN: 'aTSSx0NEY8INJk9J69PQk1nE',
                    'Accept-Encoding': 'gzip'
                }
            });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
       fetchMatches();
    }, [])

    return (
        <Layout seoDescription='Live матчи Dota2'
                seoTitle={`Live матчи Dota2`}
                title={`Live матчи Dota2`}>
            <div className={styles.content}>
                Matches
                <ul className={styles.table}>
                    <li className={styles.tableHeading}>22.11.2022</li>
                    <LiveTableItem />
                </ul>
            </div>
        </Layout>
    );
};

export default Live;