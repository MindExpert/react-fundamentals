import axios, { AxiosInstance, AxiosError, CanceledError } from 'axios';

// Create an instance of Axios with custom configuration
const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com', // Replace with your API base URL
    timeout: 5000, // Set a timeout value in milliseconds
    headers: {
        'Content-Type': 'application/json', // Set the content type header
    },
});


export default apiClient;
export { AxiosError, CanceledError };