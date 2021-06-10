import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({cards}) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card maker</h1>
        {
            cards.map((card,i) => (
                <CardEditForm card={card} key={i} />
            ))
        }
    </section>
);

export default Editor;