import React, { memo } from 'react';
import styles from './card.module.css';


const DEFAULT_IMAGE ='/images/default_logo.png';
const Card = memo(({card}) => {
        const {name, company, theme, title, email, message, fileURL} = card;
        const url = fileURL || DEFAULT_IMAGE; // 새로운 카드가 추가될때 나오는 기본이미지
        
        return (
            <li className={`${styles.card} ${getStyles(theme)}`}> {/* class를 이중으로 사용해야함으로 `` 사용하여 하나는 스타일호출 나머지는 getStyles함수 불러옴 */}
                <img className={styles.avatar} src={url} alt="profile"/> {/* img속성에 변수를 적용해야 함으로 코드블록 적용함 */}
                <div className={styles.info}>
                    <h1 className={styles.name}>{name}</h1>
                    <p className={styles.company}>{company}</p>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.email}>{email}</p>
                    <p className={styles.message}>{message}</p>
                </div>
            </li>
        );
    }
);

function getStyles(theme) {
    switch(theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown theme: ${theme}`);
    }
}

export default Card;