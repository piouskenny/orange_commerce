# Ecommerce Website

![React Logo](react-logo.png) ![PHP Logo](php-logo.png)

This repository contains the source code for an Ecommerce website built using React and PHP. The website provides various features for users, including adding items to the cart, an admin dashboard to upload products, user account management, and seamless checkout and instant payment integration with Paystack.

## Technologies Used

- React
- PHP
- Paystack

## Setup Instructions

1. Clone the repository: `git clone https://github.com/piouskenny/orange-commerce.git`
2. Navigate to the project directory: `cd ecommerce-website`
3. Install the required dependencies for React: `npm install`
4. Set up the PHP backend and REST API. (Details provided in the next section)
5. Start the development server for React: `npm start`
6. Access the website in your browser at `http://localhost:5173`
7. Start the PHP backend server with `php -S localhost:8000` 

## PHP Backend and REST API Setup

To set up the PHP backend and REST API, follow these steps:

1. Ensure you have PHP installed on your system.
2. Copy the PHP files to your web server's document root directory or a directory accessible to your web server.
3. Update the necessary configuration details in the PHP files, such as database credentials and Paystack API keys.
4. Configure your web server to handle PHP files. For example, if you are using Apache, ensure that PHP is installed and enabled. Restart the server if necessary.
5. Test the REST API endpoints using a tool like Postman or by making HTTP requests from your frontend React application.

## Features

1. **Adding to Cart:** Users can add items to their cart while browsing the website, allowing them to gather multiple items for purchase.
2. **Admin Dashboard:** An intuitive admin dashboard is provided for managing products. Admin users can upload new products, edit existing products, and delete products from the inventory.
3. **User Account:** Users can create and manage their accounts. They can update their personal information, view order history, and track the status of their orders.
4. **Checkout and Instant Payment with Paystack:** The website integrates with Paystack, a popular payment gateway. Users can proceed to checkout and make instant payments for their orders using various payment methods supported by Paystack.

## Contributing

Contributions to this project are welcome! If you would like to make any improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix: `git checkout -b my-feature`.
3. Make your changes and commit them: `git commit -m "Description of my changes"`.
4. Push to the branch: `git push origin my-feature`.
5. Submit a pull request outlining your changes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the license terms.

## Acknowledgments

We would like to acknowledge the following resources for their valuable contributions:

- [React](https://reactjs.org/)
- [PHP](https://www.php.net/)
- [Paystack](https://paystack.com/)

Please refer to their respective documentation for more information on these technologies.
