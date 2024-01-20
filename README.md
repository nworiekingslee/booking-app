# Booking App

Welcome to the Booking App project! This application is a clone inspired by Airbnb, I built it as a playground to enhance my Node.js and React skills, especially my Node.js skills. This is my first project since I started learning Node.js. Please feel free create an issue on the repo if you have suggestions to improve any part of the code.  

The project includes both the client-side, built with React and styled using Tailwind CSS, and the server-side, implemented with Node.js.


## Getting Started

Follow these steps to set up and run the Booking App on your local machine.

### Prerequisites

- **Node.js:** Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/nworiekingslee/booking-app.git
   ```

2. Navigate to the project directory:
    ```
    cd booking-app
    ```

3. Install dependencies for both the client and server:
    ```
    # Install client dependencies
    cd client
    npm install

    # Install server dependencies
    cd ../api
    npm install
    ```

# Running the App

Once you have completed the installation, you can run the Booking App using the following command:

```
# Run the client (React app)
cd client
npm start

# Run the server (Node.js API)
cd ../api
npm start

```

This will start the client on http://localhost:5173 and the server on http://localhost:3000.


# Features

- _Feature 1_: 


# Project Structure

```
booking-app/
|-- client/
|   |-- src/
|   |   |-- components/
|   |   |-- styles/
|   |   |-- App.js
|-- api/
|   |-- src/
|   |   |-- routes/
|   |   |   |-- index.js
|   |   |-- controllers/
|   |   |   |-- mainController.js
|   |   |-- views/
|   |   |   |-- home.ejs
|-- public/
|   |-- styles/
|   |   |-- main.css
|-- app.js
|-- package.json
|-- README.md
```

