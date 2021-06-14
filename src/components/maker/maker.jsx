import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState({ // {}오브젝트 안에 key는 1 이런식으로 작성
        '1': { // id가 1, 아래는 해당하는 오브젝트...
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
        '2': { 
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
        '3': {
            id: '3',
            name: 'Heera2',
            company: 'Imform',
            theme: 'colorful',
            title: 'Sofeware Engineer',
            email: 'heera@gmail.com',
            message: 'go for it!',
            fileName: 'heera',
            fileURL: null,
        }, 
    }); // card라는 오브젝트는 배열에서 바꿔줬기 때문에, 배열처럼 이용한곳을 다 수정해줘야함 
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

    // const addCard = card => {
    //     const updated = [...cards, card];  // updated 되는것은 기존에 있는 카드를 그대로 가지고 오고, 카드를 하나 더 추가 해주기
    //     setCards(updated); // setState에 적용된 setCards를 가져와서 update 적용!
    // }; // addCard, updateCard 는 처리해줘야 하는것이 동일하기때문에 하나로 만들어줌
    
    const createOrUpdateCard = card => { // updateCard 라는 함수에서 createOrUpdateCard로 변경
        // const updated = {...cards};
        // updated[card.id] = card;
        // setCards(updated);
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    };

    const deleteCard = card => { // update 함수처리된 것을 그대로 복사함. updated 를 delete으로 수정 
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
};

export default Maker;