import React from "react";
import ListItem from "./ListItem";
import styles from  './List.module.css';

const List = ({items}) => (
    <>
    {items.length ? (
        <ul className={styles.listWrapper__wrapper}>
            {items.map(item => (
                <ListItem key={item.title} {...item}/>
            ))}
        </ul>
    ) : (
    <h1 className={styles.noItemsHeader}>Hey! There's no content yet, please add some items!</h1>
    )}
    </>
)

export default List;