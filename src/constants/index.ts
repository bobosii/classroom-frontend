export const DEPARTMENTS = ["Computer science", "Math", "English"];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3mb
export const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

// Validator for environment variables
const getEnvVar = (key: string) => {
    const value = import.meta.env[key];
    if (!value) {
        throw new Error(`Missing Environment variable ${key}`);
    }
    return value;
};

// Cloudinary
export const CLOUDINARY_UPLOAD_URL = getEnvVar("VITE_CLOUDINARY_UPLOAD_URL");
export const CLOUDINARY_CLOUD_NAME = getEnvVar("VITE_CLOUDINARY_CLOUD_NAME");
export const CLOUDINARY_UPLOAD_PRESET = getEnvVar("VITE_CLOUDINARY_UPLOAD_PRESET");

// Backend
export const BACKEND_BASE_URL = getEnvVar("VITE_BACKEND_BASE_URL");
export const BASE_URL = import.meta.env.VITE_API_URL;

// Auth storage keys
export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;
export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY;

export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;
