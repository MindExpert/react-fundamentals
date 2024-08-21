import { useState } from "react";
import { Product } from '../App'
import styled from 'styled-components';


interface ListGroupProps {
    items: Product[];
    heading: string;
    onItemSelect?: (item: Product) => void;
}

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

// Define the props for the styled component
interface ListItemProps {
    active: boolean;
}
const ListItem = styled.li.withConfig({
    shouldForwardProp: (prop) => prop !== 'active'
}) <ListItemProps>`
    padding: 10px;
    cursor: pointer;
    background-color: ${({ active }) => (active ? '#f9f9f9' : 'white')};
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
                        key={index}
                        active={selectedIndex === index}
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