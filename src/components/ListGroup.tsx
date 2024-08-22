import { useState } from "react";
import { Product } from '../services/product-service';
import styled from 'styled-components';


interface ListGroupProps {
    items: Product[];
    heading: string;
    onItemSelect?: (item: Product) => void;
    onItemDelete?: (item: Product) => void;
    onItemUpdate?: (item: Product) => void;
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
    display: flex;
    justify-content: space-between;
    background-color: ${({ active }) => (active ? '#f1eaeae6' : 'white')};
    &:hover {
        background-color: #f9f9f9;
    }
`;

function ListGroup({ items, heading, onItemSelect, onItemDelete, onItemUpdate }: ListGroupProps) {

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
                        <div>
                            <button type="button" className="btn btn-sm btn-outline-info mx-1" onClick={(event) => {
                                event.stopPropagation();
                                if (onItemUpdate) {
                                    onItemUpdate(item);
                                }
                            }}>Update</button>
                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={(event) => {
                                event.stopPropagation();
                                if (onItemDelete) {
                                    onItemDelete(item);
                                }
                            }}>Delete</button>
                        </div>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ListGroup;