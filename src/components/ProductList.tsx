import { useEffect, useState } from 'react';


const ProductList = ({ category }: { category: string }) => {
    const [product, setProduct] = useState<Object[]>([]);

    useEffect(() => {
        if (category) {
            fetch(`https://fakestoreapi.com/products/category/${category}`)
                .then((res) => res.json())
                .then((json) => {
                    setProduct(json);
                });
        } else {
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) => {
                    setProduct(json);
                });
        }
    }, [category]);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {
                    product.map((p: any) => (
                        <li key={p.id}>
                            {p.title} - ${p.price}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductList;