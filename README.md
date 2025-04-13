# All Rice inc. - E-commerce Frontend

This project is the frontend for an e-commerce website specializing in selling Thailand rice varieties. It's built using React and Vite, styled with Tailwind CSS, and utilizes shadcn/ui for components.

## ✨ Key Features

-   Browse different types of rice products.
-   View detailed information for each product.
-   Add products to a shopping cart.
-   Manage items within the shopping cart.
-   Contact form for user inquiries (integrated with EmailJS).
-   Responsive design for various screen sizes.

## 🚀 Tech Stack

-   **Framework:** React 19+
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Routing:** React Router DOM v7
-   **State Management:** (Specify if using Context API, Zustand, Redux, etc., otherwise omit or mention React Hooks)
-   **Form Handling (Contact):** EmailJS (`@emailjs/browser`)

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Chonnawit-Khumchoo/jsd9-pheonix_wicianburi_grill-frontend.git
    cd jsd9-pheonix_wicianburi_grill-frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of the project directory. Copy the contents of `.env.example` (if it exists) or add the following variables required for the application to run correctly. **Note:** Vite requires environment variables exposed to the client to be prefixed with `VITE_`.

    ```dotenv
    # .env

    # EmailJS Credentials (for the contact form)
    VITE_EMAILJS_SERVICE_ID=YOUR_EMAILJS_SERVICE_ID
    VITE_EMAILJS_TEMPLATE_ID=YOUR_EMAILJS_TEMPLATE_ID
    VITE_EMAILJS_PUBLIC_KEY=YOUR_EMAILJS_PUBLIC_KEY

    # Add any other environment variables needed (e.g., API base URL)
    # VITE_API_BASE_URL=http://localhost:5000/api
    ```

    Replace the placeholder values with your actual credentials from EmailJS.

## 📜 Available Scripts

In the project directory, you can run:

-   **`npm run dev`** or **`yarn dev`**
    Runs the app in development mode with Hot Module Replacement (HMR). Open http://localhost:5173 (or the port specified in the output) to view it in the browser.

-   **`npm run build`** or **`yarn build`**
    Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

-   **`npm run lint`** or **`yarn lint`**
    Lints the project files using ESLint (if configured).

-   **`npm run preview`** or **`yarn preview`**
    Serves the production build locally from the `dist` folder. Useful for checking the final build before deployment.

## 📁 Folder Structure (Simplified)

```md
jsd9-pheonix_wicianburi_grill-frontend/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images, fonts, etc.
│ ├── components/ # Reusable UI components (including shadcn/ui)
│ ├── lib/ # Utility functions (e.g., shadcn utils)
│ ├── pages/ # Page-level components
│ ├── styles/ # Global styles (e.g., index.css)
│ ├── App.jsx # Main application component with routing
│ └── main.jsx # Entry point of the application
├── .env # Local environment variables (ignored by git)
├── .env.example # Example environment variables
├── .eslintrc.cjs # ESLint configuration
├── .gitignore # Files ignored by git
├── index.html # HTML entry point
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration (for Tailwind)
├── README.md # This file
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js # Vite configuration
```

## 📄 License

MIT license
