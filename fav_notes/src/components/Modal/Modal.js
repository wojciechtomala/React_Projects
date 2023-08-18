import React from "react";
import styles from './Modal.module.css';
import Form from '../Form/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ closeModalFn }) => (
    <div className={styles.wrapper}>
        <button className={styles.closeBtn} onClick={closeModalFn}><FontAwesomeIcon icon={faTimes} /></button>
        <Form/>
    </div>
)

export default Modal;