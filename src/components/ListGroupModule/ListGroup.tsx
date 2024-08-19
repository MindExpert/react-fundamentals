import { useState } from "react";
import styles from './ListGroup.module.css';

interface ListGroupProps {
    items: string[];
    heading: string;
    onItemSelect?: (item: string) => void;
}

function ListGroup({ items, heading, onItemSelect }: ListGroupProps) {

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No Items Found</p>}
            <ul className={styles['list-group']}>
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? 'list-group-item active'
                                : 'list-group-item'
                        }
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index);
                            if (onItemSelect) {
                                onItemSelect(item);
                            }
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListGroup;