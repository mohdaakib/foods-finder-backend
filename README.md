# Food Finder Backend Service

## Overview
A backend service for finding pizza, juice, and combo restaurants using the Yelp Fusion API.

## Prerequisites
- Node.js 16+
- Yelp Fusion API Key

## Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file with `YELP_API_KEY=your_yelp_api_key`
4. Run the server: `npm start`

## API Endpoints
- `GET /search/pizza?location=city`: Search pizza places
- `GET /search/juice?location=city`: Search juice places
- `GET /search/combo?location=city`: Search places with both pizza and juice

## GraphQL
Access GraphQL playground at `/graphql`

## Example Queries
```graphql
query {
  searchPizza(location: "San Francisco") {
    name
    address
    rating
  }
}
```

## Testing
- Run unit tests: `npm run test:unit`
- Run integration tests: `npm run test:integration`

## Technologies
- Node.js
- Express
- Apollo GraphQL
- Axios
- Winston Logger

## Environment Variables
- `YELP_API_KEY`: Your Yelp Fusion API key
- `PORT`: Server port (default: 3000)
