import React, {useEffect} from 'react';
import styles from './GraphColumn.module.css';

interface GraphColumnProps {
    height: number;
    index: number;
    isGold: boolean;
}

const GraphColumn: React.FC<GraphColumnProps> = ({ height, index, isGold = false }) => {

    const heightConverter = (height: number) => {
        let newHeight = height / 10;
        if (newHeight < 0) {
            newHeight = Math.abs(newHeight) / 5;
        } if (newHeight > 350) {
            newHeight = 350
        }
        return newHeight
    }

    return (
        <div style={{
            height: `${heightConverter(height)}px`,
        }} className={styles.column}>
            <p className={styles.number}>{index}</p>
        </div>
    );
};

export default GraphColumn;