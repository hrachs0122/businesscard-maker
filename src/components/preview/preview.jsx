import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({cards}) => ( 
    <section className={styles.preview}>
        <h1 className={styles.title}>Card preview</h1>
        <ul className={styles.cards}>
            {
                cards.map( (card, i) => ( // 각각의 card를 해당하는 컴포넌트로 변환
                    <Card card={card} key={i}/>
                ))
            }
        </ul>
    </section>
);
export default Preview;