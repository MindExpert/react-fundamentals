import apiClient from "./api-client";
import create from "./http-service";

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

    deleteProduct(prodId: number) {
        return apiClient.delete(`/products/${prodId}`);
    }

    createProduct(product: Product): void {
        // Logic to create a new product
        console.log(product);
    }

    //NOTE: when updating it should take prodId and the object it is updating [updateProduct(productId: string, updatedProduct: Product)]
    updateProduct(prodId: number, product: Product) {
        // Mociking the update data
        const itemData = {
            id: prodId,
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: product.image,
            category: 'electronic',
            rating: { rate: 4.6, count: 400 }
        }

        return apiClient.put(`/products/${prodId}`, itemData)
    }
}
export default new ProductService();

// export default create<Product>('/products');