import apiClient from "./api-client";

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

class ProductService {
    getAllProducts() {
        const controller = new AbortController();

        const request = apiClient.
            get<Product[]>('/products?limit=5', {
                signal: controller.signal,
            });

        return {
            request,
            cancel: () => controller.abort(),
        };
    }

    deleteProduct(product: Product) {
        return apiClient.delete(`/products/${product.id}`);
    }


    // createProduct(product: Product): void {
    //     // Logic to create a new product
    // }

    //NOTE: when updating it should take prodId and the object it is updating [updateProduct(productId: string, updatedProduct: Product)]
    updateProduct(product: Product) {
        // Mociking the update data
        const itemData = {
            id: product.id,
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: product.image,
            category: 'electronic',
            rating: { rate: 4.6, count: 400 }
        }

        return apiClient.put(`/products/${itemData.id}`, itemData)
    }


}

export default new ProductService();