import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import ProductService, { Product } from "../services/product-service";

const useProducts = () => {
    const [items, setItems] = useState<Product[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const { request, cancel } = ProductService.getAll<Product>();
        request
            .then(res => setItems(res.data))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            })
            .finally(() => setLoading(false));

        return () => cancel();
    }, []);

    return { items, error, isLoading, setItems, setError };
}

export default useProducts;