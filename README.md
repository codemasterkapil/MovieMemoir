
# MovieMemoir

MovieMemoir is a simple web application that allows users to manage and keep track of their movie collections. Users can add, edit, and delete movies from their collection, and view details about each movie.

## Table of Contents
- [Getting Started](#getting-started)
  - [Server (Backend)](#server-backend)
  - [MovieMemoir (Frontend)](#moviememoir-frontend)
- [Usage](#usage)
- [Contributing](#contributing)
- [Demo Video](#demo-video)
- [Postman Collection Link](#postman-collection-link)

## Getting Started

Follow these steps to set up and run the MovieMemoir project.

### Server (Backend)

1. Clone the repository:

   git clone https://github.com/codemasterkapil/MovieMemoir.git


2. Navigate to the server folder:
```
   cd MovieMemoir/server
```

3. Create a PostgreSQL database on Render and obtain the external connection string. You can create a database on Render by following the instructions [here](https://dashboard.render.com/new/database).

4. Create a `.env` file in the server folder and set the `DB_CONNECTION_STRING` variable to your database's external connection string:

   ```
   DB_CONNECTION_STRING=your-database-connection-string
   ```

5. Install the server's dependencies:

   ```
   npm install
   ```

6. Start the server:

   ```
   npm start
   ```

7. The server should be running on `http://localhost:8080`.

### MovieMemoir (Frontend)

1. Open a new terminal window and navigate to the MovieMemoir folder:

   ```
   cd MovieMemoir/moviememoir
   ```

2. Install the frontend's dependencies:

   ```
   npm install
   ```

3. Start the frontend:

   ```
   npm start
   ```

4. The frontend should be running on `http://localhost:3000`.

## Usage

1. Access the MovieMemoir web application by opening your web browser and navigating to `http://localhost:3000`.

2. Register and log in to your MovieMemoir account.

3. Use the application to manage your movie collection. You can add, edit, and delete movies, as well as view details about each movie.

## Contributing

Contributions to MovieMemoir are welcome! If you have any ideas for improvements or new features, please create an issue or a pull request.


## Demo Video

[here is the link of the demo video]()

## Postman Collection Link

[here is the link of postman collection](https://documenter.getpostman.com/view/30087249/2s9YXfbP9X)