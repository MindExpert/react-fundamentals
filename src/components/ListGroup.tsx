import { useState } from "react";
import { Post } from '../App'
import styled from 'styled-components';

interface ListGroupProps {
    items: Post[];
    heading: string;
    onItemSelect?: (item: Post) => void;
}

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

// Define the props for the styled component
interface ListItemProps {
    active: boolean;
}
const ListItem = styled.li<ListItemProps>`
    padding: 10px;
    cursor: pointer;
    background-color: ${(props) => (props.active ? '#f9f9f9' : 'white')};
    &:hover {
        background-color: #f9f9f9;
    }
`;

function ListGroup({ items, heading, onItemSelect }: ListGroupProps) {

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No Items Found</p>}
            <List>
                {items.map((item, index) => (
                    <ListItem
                        active={selectedIndex === index}
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index);
                            if (onItemSelect) {
                                onItemSelect(item);
                            }
                        }}
                    >
                        {item.title}
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ListGroup;