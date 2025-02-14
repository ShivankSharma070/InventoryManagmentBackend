# Inventory Managment Backend

A REST API built with Express.js and Mongoose for connecting to MongoDB. This application provides user authentication and CRUD operation for a Inventory Managment System.

## Features

- RESTful API endpoints
- MongoDB integration with Mongoose
- JWT authentication
- Rate limitting Middleware

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://npmjs.com/) (v6 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher) or MongoDB Atlas account
- API testing tool (e.g., [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/))

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShivankSharma070/InventoryManagmentBackend.git
   cd InventoryManagmentBackend/
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your configuration (see [Configuration](#configuration))

4. **Start the server**
   ```bash
   npm start
   ```

## Configuration

Create a `.env` file with these variables:

```env
PORT=3000
MONGODB_CONNECT_URL="<your-mongodb-connection-url>"
JWT_PRIVATE_KEY="<Your-private-key>"

```

Replace `MONGODB_CONNECT_URL` with your MongoDB connection string (use MongoDB Atlas URI for cloud databases) and `JWT_PRIVATE_KEY` with a private key you want to use for you JWT authentication.

## Running the Application

- **Development mode :**
  ```bash
  npm run dev
  ```

- **Production mode:**
  ```bash
  npm start
  ```

The server will be available at `http://localhost:3000` by default.

## API Endpoints

### Items Resource

| Method | Endpoint            | Description                       |
| ------ | ------------------- | --------------------------------- |
| POST   | `/auth/login`       | Login using email and password    |
| POST   | `/auth/register`    | Register new user.                |
| GET    | `/auth/logout`      | Logout current user.              |
| GET    | `/inventory/s`      | Get items by ID/Sno/Name          |
| POST   | `/inventory/add`    | Create a new item                 |
| PUT    | `/inventory/update` | Update an existing item by ID/Sno |
| DELETE | `/inventory/delete` | Delete an item by ID/Sno          |

### Example Requests

#### Login (POST /auth/login)
```
/auth/login
```

Request Body should contain a json containing email and password
```json
{
"email":<user-email>,
"password":<user-password>
}
```

#### Logout (GET /auth/logout)
```
/auth/logout
```

#### Register (POST /auth/register)
```
/auth/register
```

Request body should have a json object like this 
```json
{
"name":<user-name>,
"email":<user-email>,
"password":<user-password>
}
```

#### Search Items (GET /inventory/s)
```
/inventory/s?query="yourQuery"
```

| Parameter | Description                           |
| --------- | ------------------------------------- |
| sno       | Item Serial No                        |
| id        | Item unique id                        |
| query     | Query used to search items names      |
| page      | Page no (if multiple search results)  |
| limit     | No of resutls to show (defaults to 5) |
#### Add Items (POST /inventory/add)
```
/inventory/add
```

Request body should contains a json like
```json
{
"sno":<serial-no>, // Required & should be unique for all items 
"name":<item-name>, // Required
"quantity":<item-quantity>, // Required
"price":<item-price>
"manufacturer":<item-manufacturer> // Optional
}
```

#### Update Items (POST /inventory/update)
```
/inventory/update?sno="item-sno"
```

| Parameter | Description         |
| --------- | ------------------- |
| sno       | Item Serial No      |
| id        | Unique id for items |
Request Body should contain a json with fields to update. For example 
```json
{
"name":"<new-name>"
}
```

#### Delete Items (GET /inventory/delete)
```
/inventory/delete?sno="item-sno"
```

| Parameter | Description         |
| --------- | ------------------- |
| sno       | Item Serial No      |
| id        | Unique id for items |


## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



---

**Note:** Replace all placeholder values (your-username, your-repo-name, etc.) with your actual project details. Update API endpoints and validation rules according to your specific application requirements.
```
