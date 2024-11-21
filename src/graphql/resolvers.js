import YelpService from '../services/yelpService.js';

const resolvers = {
  Query: {
    searchPizza: async (_, { location }) => {
      return YelpService.searchBusinesses({ 
        term: 'pizza', 
        location 
      });
    },
    searchJuice: async (_, { location }) => {
      return YelpService.searchBusinesses({ 
        term: 'juice', 
        location 
      });
    },
    searchCombo: async (_, { location }) => {
      const [pizzaResults, juiceResults] = await Promise.all([
        YelpService.searchBusinesses({ term: 'pizza', location }),
        YelpService.searchBusinesses({ term: 'juice', location })
      ]);
      
      return pizzaResults.filter(pizza => 
        juiceResults.some(juice => juice.name === pizza.name)
      );
    }
  }
};

export default resolvers;