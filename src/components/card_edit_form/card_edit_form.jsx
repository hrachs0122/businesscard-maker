import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => { // onChange가 될때, updateCard, deleteCard 를 props로 가져옴
    const {name, company, theme, title, email, message, fileName } = card;

    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        });
    };

    const onChange = (event) => { 
        if(event.currentTarget == null) { 
            return;
        }
        event.preventDefault(); 
        updateCard({ // updateCard를 받아옴
            ...card, 
            [event.currentTarget.name]: event.currentTarget.value, 
        });
    };

    const onsubmit = () => {
        deleteCard(card);
    };

    return (
        <form className={styles.form}>
            <input 
                className={styles.input} 
                type="text" 
                name="name" 
                value={name}
                onChange={onChange}
            />
            <input 
                className={styles.input} 
                type="text" 
                name="company" 
                value={company}
                onChange={onChange}
            />
            <select className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input
                className={styles.input} 
                type="text" 
                name="title" 
                value={title}
                onChange={onChange}
            />
            <input 
                className={styles.input} 
                type="text" 
                name="email" 
                value={email}
                onChange={onChange}
            />
            <textarea className={styles.textarea} name="message" value={message} onChange={onChange} />
            <div className={styles.fileInput}>
                <FileInput  name={fileName} onFileChange={onFileChange} />
            </div>
            <Button name="Delete" onClick={onsubmit}/>
        </form>
    );
};

export default CardEditForm;