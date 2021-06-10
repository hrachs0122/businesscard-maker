import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Heera',
            company: 'Imform',
            theme: 'dark',
            title: 'Sofeware Engineer',
            email: 'heera@gmail.com',
            message: 'go for it!',
            fileName: 'heera',
            fileURL: null,
        },
        {
            id: '2',
            name: 'Heera1',
            company: 'Imform',
            theme: 'light',
            title: 'Sofeware Engineer',
            email: 'heera@gmail.com',
            message: 'go for it!',
            fileName: 'heera',
            fileURL: 'heera.png'
        },
        {
            id: '3',
            name: 'Heera2',
            company: 'Imform',
            theme: 'colorful',
            title: 'Sofeware Engineer',
            email: 'heera@gmail.com',
            message: 'go for it!',
            fileName: 'heera',
            fileURL: null,
        }
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user){
                history.push('/');
            }
        })
    });

    const addCard = card => {
        const updated = [...cards, card];
        setCards(updated);
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
};

export default Maker;