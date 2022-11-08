import React from 'react';
import styles from './Graph.module.css';
import GraphColumn from "../GraphColumn/GraphColumn";

interface GraphProps {
    data: number[];
    isGold: boolean;
}

const Graph: React.FC<GraphProps> = ({data, isGold = false}) => {

    return (
        <div className={styles.graph}>
            {
                data && data.slice(0, 27).map((item, index) => (
                    <GraphColumn height={item} index={index} key={item+index*2} isGold={isGold}/>
                ))
            }
        </div>
    );
};

export default Graph;