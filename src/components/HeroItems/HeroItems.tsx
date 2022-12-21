import React, { memo, useState } from 'react';
import styles from './HeroItems.module.css';
import { Item } from '../MatchTableItem/MatchTableItem';

interface HeroItemsProps {
    items: Item[];
}

export const HeroItems: React.FC<HeroItemsProps> = memo(({ items }: HeroItemsProps) => (
    <div className={styles.heroItems}>
        <div className={styles.heading}>
            <p className={styles.title}>Стартовая закупка</p>
        </div>
        <div className={styles.itemsContainer}>
            {
                items && items.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <img
                            src={`https://api.opendota.com${item.img}?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`}
                            className={styles.itemImage}
                            alt="Item Icon"
                        />
                        <p className={styles.itemName}>{item.dname}</p>
                    </li>
                ))
            }
        </div>
    </div>
));
