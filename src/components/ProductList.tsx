import { useEffect, useState } from 'react';

interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Record<string, number>;
}

const ProductList = ({ category }: { category: string }) => {
    const [product, setProduct] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        if (category) {
            fetch(`https://fakestoreapi.com/products/category/${category}`)
                .then((res) => res.json())
                .then((json) => {
                    setProduct(json);
                    setLoading(false);
                });
        } else {
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) => {
                    setProduct(json);
                    setLoading(false);
                });
        }
    }, [category]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {
                    product.map((prod) => (
                        <li key={prod.id}>
                            {prod.title} - ${prod.price}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductList;