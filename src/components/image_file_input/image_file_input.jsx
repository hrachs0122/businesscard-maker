import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange }) => {
    const [loading, setLoading] = useState(false); // 이미지 loading 될때 상태 추가
    const inputRef = useRef();
    
    const onButtonClick = (event) => {
        event.preventDefault(); // button을 클릭하면 refresh가 되는것을 방지하기 위함
        inputRef.current.click();
    };

    const onChange = async event => { 
        // console.log(event.target.files[0]);
        setLoading(true); // 파일이 변경이 될때 true 가 됨
        const uploaded = await imageUploader.upload(event.target.files[0]); 
        // console.log(uploaded);
        setLoading(false); // await다음에 loading이 끝나면 false가 됨
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
        {!loading && (<button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}> {/* loading이 아닐때 보여줌 */}
            {name || 'No File'}
        </button>)} 
        {loading && (<div className={styles.loading}></div>)} {/* loading일때 보여줌 */}
    </div>
   )
}

export default ImageFileInput;
