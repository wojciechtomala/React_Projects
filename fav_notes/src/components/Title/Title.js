import React from "react";
import styles from './Title.module.css';

const Title = ({children}) => (
    <h2 className={styles.name}>{children}</h2>
);

export default Title;