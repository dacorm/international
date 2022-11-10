import React, {useState} from 'react';
import styles from './GraphColumn.module.css';

interface GraphColumnProps {
    height: number;
    index: number;
    isGold: boolean;
    isStart?: boolean;
}

const GraphColumn: React.FC<GraphColumnProps> = ({height, index, isGold = false, isStart= false}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    }

    const handleMouseLeave = () => {
        setIsVisible(false);
    }

    const heightConverter = (height: number) => {
        let newHeight = height / 20;
        if (newHeight > 235) {
            return 240
        }
        return newHeight
    }

    if (isStart) {
        return (<div style={{
            height: `${heightConverter(height)}px`,
        }} className={styles.columnStart} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {height ? <p className={styles.number}>{index}</p> : null}
            {isVisible && (<div className={styles.labelBottom}>
                <p className={styles.text}>Преимущество команды тьмы по {isGold ? 'золоту' : 'опыту'} - {Math.abs(height)}</p>
            </div>)}
        </div>)
    }

    return (
        <div style={{
            height: `${heightConverter(height)}px`,
        }} className={styles.column} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {height ? <p className={styles.number}>{index}</p> : null}
            {isVisible && (<div className={styles.label}>
                <p className={styles.text}>Преимущество команды света по {isGold ? 'золоту' : 'опыту'} - {Math.abs(height)}</p>
            </div>)}
        </div>
    );
};

export default GraphColumn;