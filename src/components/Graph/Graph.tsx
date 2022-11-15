import React, {useEffect, useState} from 'react';
import styles from './Graph.module.css';
import GraphColumn from "../GraphColumn/GraphColumn";

interface GraphProps {
    data: number[];
    isGold: boolean;
}

const Graph: React.FC<GraphProps> = ({data, isGold = false}) => {
    const [positiveNums, setPositiveNums] = useState<number[]>([]);
    const [negativeNums, setNegativeNums] = useState<number[]>([]);

    useEffect(() => {
        const positiveData = data.map((item) => {
            if (item < 0) {
                return 0
            } else return item
        })
        const negativeData = data.map((item) => {
            if (item > 0) {
                return 0
            } else return item*-1
        })
        setPositiveNums(positiveData);
        setNegativeNums(negativeData)
    }, [])

    return (
        <>
            <div className={styles.graph}>
                <p className={styles.columnText}>Сторона света</p>
                {positiveNums.map((num, index) => (
                    <GraphColumn height={num} index={index} key={index*10} isGold={isGold} isStart={false} />
                ))}
            </div>
            <hr className={styles.line}/>
            <div className={styles.graphBot}>
                <p className={styles.columnTextBot}>Сторона тьмы</p>
                {negativeNums.map((num, index) => (
                    <GraphColumn height={num} index={index} key={index*8} isGold={isGold} isStart={true} />
                ))}
            </div>
        </>
    );
};

export default Graph;