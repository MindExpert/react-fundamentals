import apiClient from "./api-client";

export interface Entity {
    id: number;
    title: string;
}

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {
            signal: controller.signal,
        });
        return { request, cancel: () => controller.abort() };
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + "/" + id);
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint, entity);
    }

    update<T extends Entity>(id: number, entity: T) {
        //Mocking the update data
        entity.title = "test product";

        return apiClient.patch(this.endpoint + "/" + id, entity);
    }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;