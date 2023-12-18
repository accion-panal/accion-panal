import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_PANAL,
});

export const mapbox = process.env.NEXT_PUBLIC_KEY_MAPBOX_TOKEN;
