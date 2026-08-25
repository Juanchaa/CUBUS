import { ApiError } from './apiError';

// TODO: definir EXPO_PUBLIC_API_URL en un .env cuando el backend entregue la URL real.
const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? '';

type RequestOptions = {
    headers?: Record<string, string>;
    body?: unknown;
};

let authToken: string | null = null;

// Lo llama la capa de auth cuando haya login (guardar/borrar el token acá, no en cada service).
export function setAuthToken(token: string | null) {
    authToken = token;
}

async function request<T>(method: string, path: string, options: RequestOptions = {}): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
            ...options.headers,
        },
        body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new ApiError(response.status, data?.message ?? response.statusText, data);
    }

    return data as T;
}

export const httpClient = {
    get: <T>(path: string, options?: RequestOptions) => request<T>('GET', path, options),
    post: <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>('POST', path, { ...options, body }),
    put: <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>('PUT', path, { ...options, body }),
    delete: <T>(path: string, options?: RequestOptions) => request<T>('DELETE', path, options),
};
