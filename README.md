# EXSM 3946 .Net Core API w/ React - 04

This project is a .NET Core application with Next.js front-end, leveraging multiple APIs, Entity Framework for database management, and MUI for styling. It features three pages: home, static, dynamic, and news. The dynamic page utilizes the API chain to fetch data from the Entity Framework database. While the news page leverages the "newsapi" api to gather the top 10 most recent news stories and displays a brief portion of their information for you to read. While also allowing you to search the api as well. It also includes a basic vehicle managment section where you can create, view, view all, delete, an update vehicles through an api connection to the database.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Application Architecture](#application-architecture)
- [Built With](#built-with)
- [Authors](#authors)

## Getting Started

To get started, clone the repository to your local machine.

## Prerequisites

- .NET Core 5.0 or higher
- Node.js 14.0.0 or higher
- npm 6.14.8 or higher
- A suitable IDE such as Visual Studio or Visual Studio Code
- Entity Framework
- Axios

## Installation

1. Open your terminal or command prompt.
2. Clone the repository: `git clone https://github.com/Web-Development-UAlberta/module-02-assignment-Caelan-Ross`.
3. Navigate into the project directory: `cd <local file location>/module-02-assignment/frontend/next-app`.
4. Install the required npm packages: `npm install`.
5. Navigate to the API project directory: `cd Backend/WebApi`.
6. Restore the .NET packages: `dotnet restore`.
7. Update the database with Entity Framework: `dotnet ef database update`.

## Running the Application

1. Open your preferred IDE and load the solution.
2. Set the ports for the Next.js app and the .NET API. You can find the ports in the configuration files or set your preferred ports. Make sure they are all different.
3. Start the .NET Core API project by running `dotnet run` in the API directory.
4. Start the Next.js application by running `npm run dev` in the application root directory.
5. Open a web browser and navigate to the localhost port you set for the Next.js application.

## Application Architecture

The application has a multi-tier architecture:

- NextJS Component: The front-end is built with Next.js. It includes three pages: home, static, and dynamic.
- NextJS API: The Next.js application makes requests to the Next.js API.
- .NET Core API: The Next.js API interacts with a .NET Core API for processing requests.
- Entity Framework Database: The .NET Core API connects to the database using Entity Framework.

This architecture allows data to be sent from the Entity Framework database, through the .NET Core API and Next.js API, and finally displayed on the Next.js component.

## Built With

- [.NET Core](https://dotnet.microsoft.com/download)
- [Next.js](https://nextjs.org/)
- [Entity Framework](https://docs.microsoft.com/en-us/ef/)
- [Material-UI](https://mui.com/)
- [Axios](https://axios-http.com/)

## Authors

- **Caelan Ross** - *Initial work* - [Caelan-Ross](https://github.com/Caelan-Ross)
