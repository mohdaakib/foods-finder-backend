import axios from 'axios';
import { YELP_API_KEY, YELP_API_BASE_URL } from '../config/yelp.config.js';
import logger from '../utils/logger.js';

class YelpService {
  constructor() {
    this.client = axios.create({
      baseURL: YELP_API_BASE_URL,
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`,
        'accept': 'application/json'
      }
    });
  }

  async searchBusinesses(params) {
    try {
      const response = await this.client.get('', { params });
      return response.data.businesses.map(b => ({
        name: b.name,
        address: b.location.address1,
        rating: b.rating,
        phone: b.phone
      }));
    } catch (error) {
      logger.error('Yelp API Search Error', error);
      throw new Error('Failed to fetch businesses');
    }
  }
}

export default new YelpService();