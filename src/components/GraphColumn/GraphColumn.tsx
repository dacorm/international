import React, {useState} from 'react';
import styles from './GraphColumn.module.css';

interface GraphColumnProps {
    height: number;
    index: number;
    isGold: boolean;
}

const GraphColumn: React.FC<GraphColumnProps> = ({height, index, isGold = false}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    }

    const handleMouseLeave = () => {
        setIsVisible(false);
    }

    const heightConverter = (height: number) => {
        let newHeight = height / 10;
        if (newHeight < 0) {
            newHeight = Math.abs(newHeight) / 5;
        }
        if (newHeight > 350) {
            newHeight = 340
        }
        return newHeight
    }

    return (
        <div style={{
            height: `${heightConverter(height)}px`,
        }} className={styles.column} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className={styles.number}>{index}</p>
            {isVisible && (<div className={styles.label}>
                <p className={styles.text}>Преимущество команды по {isGold ? 'золоту' : 'опыту'} - {Math.abs(height)}</p>
            </div>)}
        </div>
    );
};

export default GraphColumn;