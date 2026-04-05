# Finance-Dashboard
A responsive Finance Dashboard UI built using HTML, CSS, and JavaScript that allows users to track financial activity, view summaries, explore transactions, and understand spending patterns with interactive charts and role-based UI simulation.
# Finance Dashboard UI

## Overview

This project is a simple **Finance Dashboard** built using **HTML, CSS, and JavaScript**. The goal of this application is to provide users with a clean and interactive interface to track financial activity, explore transactions, and understand spending patterns.

The dashboard focuses on demonstrating frontend development skills such as UI design, responsive layout, state management, and role-based interface behavior. The project uses static/mock data and does not require a backend.

This implementation was designed to meet the evaluation requirements for a frontend dashboard assignment, emphasizing clarity, usability, and modular code structure rather than production-level complexity.

---

## Features

### 1. Dashboard Overview

The main dashboard provides a quick summary of financial data through visual and numerical components.

* Total Balance card
* Total Income card
* Total Expenses card
* Line chart showing balance trend over time
* Pie chart showing spending breakdown by category

These components help users quickly understand their financial status.

---

### 2. Transactions Section

The transactions table displays financial records in a structured format.

Each transaction includes:

* Date
* Category
* Amount
* Type (Income or Expense)

Functionalities implemented:

* Search transactions by category
* Filter transactions by type (All / Income / Expense)
* Dynamic table rendering
* Empty state handling when no data is available

---

### 3. Role-Based UI Simulation

The application simulates basic role-based access control on the frontend.

Roles available:

Viewer:

* Can view dashboard data
* Cannot add transactions

Admin:

* Can view data
* Can add new transactions

A dropdown menu allows switching between roles for demonstration purposes.

---

### 4. Insights Section

The insights panel provides simple analytical observations derived from transaction data.

Examples include:

* Highest spending category
* Monthly spending comparison

These insights demonstrate basic data processing and user-focused reporting.

---

### 5. State Management

Application state is managed using JavaScript variables and functions.

State includes:

* Transactions data
* Search input value
* Filter selection
* Selected user role

The UI updates dynamically whenever the state changes.

---

### 6. Responsive Design

The layout adapts to different screen sizes using CSS Grid and media queries.

Responsive behavior includes:

* Flexible card layout
* Mobile-friendly header alignment
* Scalable charts and table

---

## Technology Stack

Frontend Technologies Used:

* HTML5
* CSS3
* JavaScript (ES6)
* Chart.js (for data visualization)

No backend or database is required.

---

## Project Structure

finance-dashboard/

index.html      -> Main HTML structure
styles.css      -> Styling and layout
script.js       -> Application logic and state management
README.md       -> Project documentation

---

## Setup Instructions

Follow these steps to run the project locally.

Step 1: Download or Clone the Project

You can either download the project files or clone the repository.

Step 2: Ensure the following files exist in the same folder:

index.html
styles.css
script.js

Step 3: Open the Application

Simply double-click the index.html file or open it in any modern web browser such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

No installation, build tools, or dependencies are required.

---

## How the Application Works

1. The page loads initial transaction data stored in JavaScript.
2. Summary values (income, expenses, balance) are calculated.
3. Charts are generated using Chart.js.
4. The transaction table is rendered dynamically.
5. Filters and search update the displayed data.
6. Admin users can add new transactions.

---

## Assumptions Made

* Data is static and stored locally in JavaScript.
* Role-based access control is simulated on the frontend only.
* Charts use sample data for demonstration.
* The application focuses on UI functionality rather than backend integration.

---

## Optional Enhancements (Future Improvements)

The following features can be added to enhance the dashboard:

* Local storage data persistence
* Edit and delete transactions
* Dark mode toggle
* Export data to CSV or JSON
* Form-based transaction modal
* API integration
* Authentication system

---

## Evaluation Criteria Alignment

This project demonstrates the following:

Design and Creativity:
Clean card-based layout with visual charts and structured data presentation.

Responsiveness:
Layout adapts to different screen sizes using CSS Grid and media queries.

Functionality:
Implements dashboard summary, transactions, filtering, role-based UI, and insights.

User Experience:
Simple navigation, readable interface, and clear interaction behavior.

Technical Quality:
Code is separated into HTML, CSS, and JavaScript files with modular functions.

State Management:
Application state is handled using JavaScript logic and dynamic rendering.

Documentation:
This README provides setup instructions, feature explanation, and project overview.

---

## Author

Name: Avinash Kumar
Role: Frontend Developer / Student
Project: Finance Dashboard UI



