import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = ({onAdd}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const onsubmit = event => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || '', // ref에 있는 current value가 있으면 문자열을 쓰고 없으면 비워져있는상태로 남긴다
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: '',
            fileURL: '',
        };
        formRef.current.reset();
        onAdd(card);
    };
    return (
        <form ref={formRef} className={styles.form}>
            <input 
                ref={nameRef} 
                className={styles.input} 
                type="text" 
                name="name" 
                placeholder="Name"
            />
            <input 
                ref={companyRef} 
                className={styles.input} 
                type="text" 
                name="company" 
                placeholder="Company"
            />
            <select ref={themeRef} className={styles.select}  name="theme" placeholder="theme">
                <option placeholder="light">light</option> {/* placeholder의 light 값과 option의 light값을 정확히 맞춰줘야 함 */}
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input 
                ref={titleRef} 
                className={styles.input} 
                type="text" 
                name="title" 
                placeholder="Title"
            />
            <input 
                ref={emailRef} 
                className={styles.input} 
                type="text" 
                name="email" 
                placeholder="Email"
            />
            <textarea 
                ref={messageRef} 
                className={styles.textarea} 
                name="message" 
                placeholder="Message" 
            />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Add" onClick={onsubmit}/>
        </form>
    );
};

export default CardAddForm;