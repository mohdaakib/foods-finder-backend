import YelpService from '../services/yelpService.js';
import logger from '../utils/logger.js';

class SearchController {
  async searchPizza(req, res) {
    try {
      const location = req.query.location;
      const results = await YelpService.searchBusinesses({ 
        term: 'pizza', 
        location 
      });
      res.json(results);
    } catch (error) {
      logger.error('Pizza Search Error', error);
      res.status(500).json({ error: 'Search failed' });
    }
  }

  async searchJuice(req, res) {
    try {
      const location = req.query.location;
      const results = await YelpService.searchBusinesses({ 
        term: 'juice', 
        location 
      });
      res.json(results);
    } catch (error) {
      logger.error('Juice Search Error', error);
      res.status(500).json({ error: 'Search failed' });
    }
  }

  async searchCombo(req, res) {
    try {
      const location = req.query.location;
      const [pizzaResults, juiceResults] = await Promise.all([
        YelpService.searchBusinesses({ term: 'pizza', location }),
        YelpService.searchBusinesses({ term: 'juice', location })
      ]);
      
      const comboResults = pizzaResults.filter(pizza => 
        juiceResults.some(juice => juice.name === pizza.name)
      );
      
      res.json(comboResults);
    } catch (error) {
      logger.error('Combo Search Error', error);
      res.status(500).json({ error: 'Search failed' });
    }
  }
}

export default new SearchController();