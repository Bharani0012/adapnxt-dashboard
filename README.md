# Dashboard Application

This project is a React-based dashboard application featuring a sidebar, main content area, and various charts. The application uses several third-party libraries for routing, icons, styling, and charting.

## Technologies Used

- **Recharts**: For rendering charts.
- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: For client-side routing.
- **React Icons**: For using icons in the application.
- **Bootstrap**: For styling and responsive design.

## Project Setup

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/dashboard-app.git

Navigate into the project directory:

cd dashboard-app

Install the dependencies:


npm install

Running the Application

To start the development server, run:

npm start


This will launch the application at http://localhost:3000.
Folder Structure

    src/: Contains all source files.
        components/: Contains React components.
            Account.js: Account management component.
            Calculators.js: Calculators component.
            Channel.js: Channel management component.
            Customers.js: Customers management component.
            DashBoard.js: Dashboard component.
            Integration.js: Integration management component.
            Inventory.js: Inventory management component.
            Order.js: Order management component.
            Reports.js: Reports component.
            Returns.js: Returns management component.
            Shipping.js: Shipping management component.
            SideBar.js: Sidebar component.
            charts/:
              SalesPieChart: Displays a pie chart comparing sales between WooCommerce and Shopify stores.
              SalesOrdersChart: Displays a line chart comparing sales and orders.
        App.js: Main application component with routing setup.
        App.css: Custom CSS styles for the application.
        index.js: Entry point for the React application.

Components

    SideBar: Displays the sidebar navigation with links to different sections.
    MainContent: Renders the main section based on the current route.
Styling

    Bootstrap and Mediaqueries are used for general styling and responsive design.
    Custom CSS in App.css for additional styling and layout adjustments.
