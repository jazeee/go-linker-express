# go-linker-express
A simple Node Express app to manage name to url mapping.
All data is memory based, so restarting will reset the contents.
While it is straightforward enough to persist data in a database, I chose to keep everything in memory to simplify deployment.

## Install
1. `npm install`

## Test and watch
1. `npm test`

## Test all
1. `npm test-all`

## Lint (and fix)
1. `npm run lint-fix`

## Run Server (nodemon)
1. `npm start`

## Server Details
This app provides a REST API interface to a simple key-value memory model.
By default, server will provide API endpoint on http://localhost:42666

### API Endpoints
#### Read all via `GET /api/v1/go-links`
Retrieves all name to URL pairs. Example:
```
curl http://localhost:42666/api/v1/go-links | jq
```
Returns:
```
{
  "links": [
    {
      "name": "g",
      "url": "https://www.google.com"
    }
  ]
}
```
#### Create via `POST /api/v1/go-links`
Create a name to URL PAIR. (Technically, this also updates an existing link as a PUT would.) Example:
```
curl \
  -H "Content-Type: application/json" \
  -X POST http://localhost:42666/api/v1/go-links \
  -d '{"name": "g", "url": "https://www.google.com"}' | jq
```
Returns:
```
{
  "message": "Saved 'g'",
  "link": {
    "id": "g",
    "url": "https://www.google.com"
  }
}
```
#### Read one item via `GET /api/v1/go-links/:id`
Retrieves one name to URL pair. Example:
```
curl http://localhost:42666/api/v1/go-links/g | jq
```
Returns:
```
{
  "link": {
    "name": "g",
    "url": "https://www.google.com"
  }
}
```
#### Update via `PUT /api/v1/go-links/:id`
Update a name to URL PAIR for a given `id`. Example:
```
curl \
  -H "Content-Type: application/json" \
  -X PUT http://localhost:42666/api/v1/go-links/g \
  -d '{"name": "g", "url": "https://www.google.com"}' | jq
```
Returns:
```
{
  "message": "Updated 'g'",
  "link": {
    "id": "g",
    "url": "https://www.google.com"
  }
}
```
#### Delete via `DELETE /api/v1/go-links/:id`
Update a name to URL PAIR for a given `id`. Example:
```
curl -X DELETE http://localhost:42666/api/v1/go-links/g | jq
```
Returns:
```
{
  "message": "Deleted 'g'"
}
```
