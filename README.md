# Forum App

Welcome to the Forum App repository! This web application allows users to engage in discussions, share threads, and participate in a community forum.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Features

- User authentication (Register, Login, Logout)
- Browse threads and discussions
- Create new threads
- View thread details
- Comment on threads
- Vote on threads and comments
- Leaderboards to track user activity

## Getting Started

### Prerequisites

Ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/forum-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd forum-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

## Folder Structure

The project structure is organized as follows:

- `cypress`: Cypress end-to-end test scripts.
- `public`: Static assets and HTML template.
- `src`: Contains the source code for the React application.
- `components`: contains reusable React components that can be used across different parts of the application.
- `hooks`: folder houses custom React Hooks, which are functions allowing the use of React features within functional components.
- `pages`: folder contains components representing the main pages of your application.
- `states`: folder is related to global state management using Redux or other state management solutions.
- `utils`: folder comprises utility functions or helper functions that can be used throughout the project.
- `styles`: CSS stylesheets.
