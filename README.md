## Checkout Experience Project

## Overview

Welcome to the Checkout Experience project given by the GROWW! In this assignment, you will be creating a user-friendly and visually engaging checkout process. The focus will be on the final three steps of the checkout flow, namely the Checkout Page, Payment Options Page, and Order Confirmation Page.

## Project Overview

This project is made up of four main pages:

1. **Checkout Page**
2. **Payment Options Page**
3. **Order Confirmation Page**
4. **404 Page**

### Checkout Page

- **Dynamic Cart UI:** This page fetches data from [this API](https://groww-intern-assignment.vercel.app/v1/api/order-details) to create a dynamic shopping cart.
- **Order Summary Section:** Summarizes all items in the cart, including quantities, shipping charges, and GST. It features a "Go to Payment" button.
- **Static Shipping Address Card:** Displays a fixed shipping address card.
- **Transaction ID:** Generates a random transaction ID and stores it using our Zustand state manager when the "Go to Payment" button is clicked.

### Payment Options Page

- **Payment Modes:** Presents various payment options for users to choose from.
- **Order Summary:** Displays the order summary along with a "Confirm Transaction" button.

### Order Confirmation Page

- **Random Order Status:** Generates a random order status, including success, failure, and pending.
- **Order Summary:** Displays the order summary, the selected payment method, and a status message indicating the success or failure of the transaction.

## Additional Feature

I've implemented a new feature for diverse themes by introducing a random theme option for different brands. The themes are fetched dynamically using [this API](https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata).


## Tech Stack

- NextJS
- Typescript
- MUI (UI framework)
- Zustand (State Mangement)
- Axios (Rest API fetching)

## Handling Various Scenarios

- Implement a skeleton loader for loading the cart and a full-page loader during theme changes.
- Address potential failures in the cart API or instances where the cart has zero products.
- Develop a logic for generating transaction IDs to prevent page reloads.
- Tackle various minor issues that may arise during usage.
- Ensure the user interface remains responsive across mobile, desktop, and tablet devices.

## Preview

### Checkout page:

<img width="560" src="https://github.com/getlost01/groww-frontend-assignment/assets/79409258/dde1a440-9419-41d7-8ec9-47570975690d">

### Payment Page:

<img width="560" src="https://github.com/getlost01/groww-frontend-assignment/assets/79409258/d37575df-be86-40e1-aac0-e419d4309026">

### Success Page:

<img width="560" src="https://github.com/getlost01/groww-frontend-assignment/assets/79409258/fa7f7550-8e07-49a6-a7e3-8e9e8043a7da">

### 404 Page:

<img width="560" src="https://github.com/getlost01/groww-frontend-assignment/assets/79409258/4da24631-65ba-406f-b61f-a68f444bfb77">

### Checkout Page ( with random theme )

<img width="560" alt="Screenshot 2023-12-20 at 11 10 12 AM" src="https://github.com/getlost01/groww-frontend-assignment/assets/79409258/fa7f7550-8e07-49a6-a7e3-8e9e8043a7da">

### Checkout Page ( in mobile )

<img width="180" alt="Screenshot 2023-12-20 at 11 10 03 AM" src="https://github.com/getlost01/groww-frontend-assignment/assets/79409258/fe1e901d-cbb6-4dc7-bb42-2040f25e0697">


## Getting Started

As this project utilizes the latest version of Next.js (14.0.4), it requires a Node.js environment greater than 18. To set up the appropriate Node.js version, either install the latest version of Node.js or use Node Version Manager (nvm) with the following command:

```bash
nvm use 20
```

### Clone and run this project on your local:

```bash
git clone https://github.com/getlost01/groww-frontend-assignment.git
cd groww-frontend-assignment
npm install
npm run dev
```
After running the server the app should be running on [https://localhost:3000](http://localhost:3000/)

## :v: Contributing

- Once you have cloned and set up the project on your local machine, you can proceed to push the changes to your GitHub fork and create a pull request.
- You have to run the tests locally to ensure that everything is functioning properly.

### Pushing the changes

```bash
git add .
git commit -m "feat: yay I added new stuff"
git push origin branch_name
```

------

Made with :heart: and NextJS (aka Typescript) and Managed by Zustand