# Node.js + SQLite Authentication System

A complete login and registration system built with a Node.js/Express backend and a vanilla HTML, CSS, and JavaScript frontend. It uses SQLite for the database, meaning no external database server setup is required.

## Features

- User Registration with secure password hashing (bcrypt).

- User Login with JSON Web Token (JWT) authentication.

- Protected frontend routes that redirect unauthenticated users.

- Auto-initializing SQLite database.

- Clean separation of frontend concerns (HTML, CSS, JS).

## Dependencies

This project relies on the following npm packages:

- express: Fast, unopinionated, minimalist web framework for Node.js.

- sqlite3: Asynchronous, non-blocking SQLite3 bindings for Node.js.

- sqlite: A wrapper that provides a Promise-based API for sqlite3.

- bcrypt: A library to help you hash passwords securely.

- jsonwebtoken: An implementation of JSON Web Tokens for session management.

- cors: Express middleware to enable CORS (Cross-Origin Resource Sharing).

- dotenv: Loads environment variables from a .env file into process.env.

- nodemon: (Development dependency) Automatically restarts the node application when file changes are detected.

## Project Structure

```bash
project-root/
├── .env
├── init.sql
├── package.json
├── src/
│   ├── config/
│   │   └── database.js
│   └── server.js
└── public/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── dashboard.js
    │   ├── login.js
    │   └── register.js
    ├── index.html
    ├── login.html
    └── register.html
```

## Prerequisites

- Node.js installed on your machine (v14.x or higher is recommended).

- npm (Node Package Manager) which comes installed with Node.js.

## Step-by-Step Installation and Setup

### Step 1: Initialize the Project

Navigate to your project root directory in your terminal and install the required dependencies:

```bash
npm install
```


### Step 2: Configure Environment Variables

In the root of your project directory, create a file named `.env`.
Open the `.env` file and add the following configuration:

```text
PORT=3000
DB_FILE=./database.sqlite
JWT_SECRET=super_secret_jwt_key_change_in_production
```

Note: You can change the `JWT_SECRET` to any secure random string. The `DB_FILE` defines where your SQLite database file will be created.

### Step 3: Start the Server

You can start the server in development mode (which automatically restarts on file changes) by running:

```bash
npm run dev
```

Alternatively, to start it in standard mode, run:

```bash
npm start
```

When the server starts successfully, you will see the following messages in your terminal:

```text
SQLite database initialized.
Server is running on http://localhost:3000
```

Note: The application will automatically create the `database.sqlite` file and build the `users` table the first time it starts up.

### Step 4: Access the Application

1. Open your web browser.

2. Navigate to `http://localhost:3000`

3. Since you are not logged in, the application will automatically redirect you to `http://localhost:3000/login.html`.

4. Click on "Sign up" to create a new user account.

5. After successfully registering, log in with your new credentials to access the secure dashboard (`index.html`).

## Troubleshooting

- "Address already in use": If you get an error that port 3000 is already in use, open your `.env` file and change `PORT=3000` to a different number, like `PORT=8080`.

- Database locked: If the SQLite database becomes locked during development, stop the Node server (Ctrl+C) and restart it.
