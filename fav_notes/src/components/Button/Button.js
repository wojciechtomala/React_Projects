import React from "react";
import styles from './Button.module.css';

const Button = ({children, href, secondary, ...props}) => {

    const buttonClass = secondary ? styles.secondary : styles.button;

    return (
        <>
        {
            href ? (<a rel="noopener noreferrer" target="_blank" className={buttonClass} href={href}> {children} </a> )
            :
            (<button className={buttonClass} {...props} type="submit"> {children} </button>)
        }
        </>
    )
}

export default Button;