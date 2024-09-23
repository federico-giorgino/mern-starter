# MERN Stack Starter

A starter template for building web applications using the MERN stack (MongoDB, Express.js, React, Node.js) with end-to-end testing using Playwright.

## Features

- **MongoDB**: NoSQL database for data storage.
- **Express.js**: Web framework for building APIs.
- **React**: Frontend library for creating user interfaces.
- **Node.js**: JavaScript runtime for server-side development.
- **RESTful API**: Seamless integration with the frontend.
- **End-to-End Testing**: Automated tests using Playwright.
- **Responsive Design**: Mobile-friendly user interface.
- **Environment Variables**: Configurable settings for different environments.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/))

## Getting Started

Follow these steps to set up your development environment:

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/mern-stack-starter.git
   cd mern-stack-starter
   ```

2. **Install backend dependencies**

   Navigate to the backend directory and install the required packages:

   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**

   Create a .env file in the backend directory and configure your MongoDB connection string, JWT secret key and Frontend URL:

   ```bash
   MONGO_CONNECTION_STRING=mongodb+srv://********************************** #Get this string from MongoDB/Cloud
   JWT_SECRET_KEY= #Feel free to generate a secure key with your own preferred method
   FRONTEND_URL= #Insert your  frontend url i.e. localhost:5173
   ```

4. **Run the backend server**

   Start the server

   ```bash
   npm start
   ```

5. **Install frontend dependencies**

   Navigate to the frontend directory and install the required packages:

   ```bash
   cd ../frontend && npm install
   ```

6. **Run the frontend development server**

   Start the React app:

   ```bash
   npm start
   ```

7. **Run end-to-end tests**

   Navigate to the e2e-tests directory and install Playwright:

   ```bash
   cd ../e2e-tests
   npm install
   ```

   To run the tests, use:

   ```bash
   npx playwright test
   ```

8. **Access the application**

   Open your browser and go to http://localhost:3000 to see the application in action.

## Folder Structure

    mern-stack-starter/
    ├── backend/           # Server-side code
    │   ├── models/        # MongoDB models
    │   ├── routes/        # API routes
    │   ├── controllers/   # Business logic
    │   └── config/        # Configuration files
    ├── frontend/          # Client-side code
    │   ├── public/        # Static files
    │   ├── src/           # React components and styles
    │   └── package.json    # Frontend dependencies
    └── e2e-tests/         # End-to-end tests using Playwright
        ├── tests/         # Test scripts
        └── playwright.config.js # Playwright configuration

## Contributing

Contributions are welcome! Please follow these steps:

    1.Fork the project.
    2.Create your feature branch (git checkout -b feature/YourFeature).
    3.Commit your changes (git commit -m 'Add some feature').
    4.Push to the branch (git push origin feature/YourFeature).
    5.Open a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
