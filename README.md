# Country Info App - Backend

## Overview

The backend for the Country Info App provides APIs to retrieve information about countries, including available countries, border countries, population data, and flag images. It is built using **Node.js** with **Nest.js** framework.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (v7 or later)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/diogofernandoj/country-info-app-backend.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the root directory.
   - Add any required configurations (if needed). Example:

     ```env
     # Currently, no environment variables are required for the backend.
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. The backend will be available at:

   ```
   http://localhost:4000
   ```

---

## Available Endpoints

### 1. Get Available Countries

**Endpoint:** `/countries/available`  
**Method:** `GET`  
**Description:** Retrieves a list of available countries.

### 2. Get Country Info

**Endpoint:** `/countries/:code`  
**Method:** `GET`  
**Description:** Retrieves detailed information about a specific country, including border countries, population data, and the flag.

---

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the built application.

---

## Notes

Ensure the backend is running on port 4000 to allow seamless communication with the frontend.

---
