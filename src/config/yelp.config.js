import dotenv from 'dotenv';
dotenv.config();

export const YELP_API_KEY = process.env.YELP_API_KEY || '';
export const YELP_API_BASE_URL = 'https://api.yelp.com/v3/businesses/search';