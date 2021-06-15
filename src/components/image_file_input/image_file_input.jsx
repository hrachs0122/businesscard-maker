import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange }) => {
    const inputRef = useRef();
    
    const onButtonClick = (event) => {
        event.preventDefault(); // button을 클릭하면 refresh가 되는것을 방지하기 위함
        inputRef.current.click();
    };

    const onChange = async event => { 
        // console.log(event.target.files[0]);
        const uploaded = await imageUploader.upload(event.target.files[0]); 
        // console.log(uploaded);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        }) // upload에서 구현
    };
   return (
    <div className={styles.container}>
        <input 
            ref={inputRef} 
            className={styles.input} 
            type="file" 
            accept="image/*" 
            name="file"
            onChange={onChange}
        />
        <button className={styles.button} onClick={onButtonClick}>
            {name || 'No File'}
        </button>
    </div>
   )
}

export default ImageFileInput;
