export const BACKEND_URL = 'http://localhost:8001';
export const AUTH_URL = 'http://localhost:8000';

export const REGISTER = {
    url: '/register',
    method: 'POST',
};

export const LOGIN = {
    url: '/login',
    method: 'POST',
};

export const VALIDATE_TOKEN = {
    url: '/token/validation',
    method: 'POST',
};

export const GET_CONTENT = {
    url: '/contentType',
    method: 'GET',
};

export const CONTENT_ENTRY = (id) => ({
    url: `/contentType/${id}`,
    method: 'GET',
});

export const CREATE_CONTENT = {
    url: '/contentType',
    method: 'POST',
};

export const GET_CONTENT_FIELDS = (id) => ({
    url: `/contentType/${id}/fields`,
    method: 'GET',
});

export const CREATE_CONTENT_ENTRY = (id) => ({
    url: `/contentType/${id}`,
    method: 'POST',
});

export const UPDATE_CONTENT_TYPE = (id) => ({
    url: `/contentType/${id}`,
    method: 'PUT',
});

export const DELETE_CONTENT = (id) => ({
    url: `/contentType/${id}`,
    method: 'DELETE',
});

export const DELETE_CONTENT_ENTRY = (id, feildId) => ({
    url: `/contentType/${id}/${feildId}`,
    method: 'DELETE',
});

export const UPDATE_CONTENT = (id, feildId) => ({
    url: `/contentType/${id}/${feildId}`,
    method: 'PUT',
});



