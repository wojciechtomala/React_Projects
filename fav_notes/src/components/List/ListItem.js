import React from "react";
import styles from './ListItem.module.css';
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Title from "../Title/Title";

const ListItem = ({
    image,
    title,
    description,
    link
}) => {

    const ImageTag = image ? 'img' : 'div';

    return (
        <li className={styles.listItem__wrapper}>
            { image !== null ? ( <ImageTag 
                className={styles.listItem__image} 
                src={image} 
                alt='Note image'
            />) : (<ImageTag 
                className={styles.imageNone} 
                src={image} 
                alt='Note image'
            />) }
            <div>
                <Title>{title}</Title>
                <p className={styles.listItem__description}>{description}</p>
                { link && <Button href={link}>Visit the website</Button> }
            </div>
        </li>
    )
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
}

ListItem.defaultProps = {
    link: null,
    image: null
}

export default ListItem;