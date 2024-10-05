## Overview

This project is a responsive web application built with React and Chakra UI. The application consists of a sidebar, a top navigation bar, and a main content area where Admin users can view and manage their subscription plans.

## Features

- **Responsive Design**: The application is currently optimised for large screens
- **User Management**: Display user subscriptions with relevant details such as name, title, phone number, email, and plan.
- **Search Functionality**: Users can search for subscriptions easily using a search input field in the top navigation bar.
- **Tabs for Navigation**: Users can navigate between different views (Overview and Plans) using a tabbed interface.

## Folder Structure

```
my-project/
├── src/
│   ├── components/
│   │   ├── mainContent/
│   │   │   ├── MainContent.tsx
│   │   │   └── tableData.tsx
│   │   ├── sidebar/
│   │   │   └── Sidebar.tsx
│   │   ├── Topbar.tsx
│   │   └── AdminInfo.tsx
│   ├── App.tsx
│   └── index.tsx
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library that provides a set of React components for faster and easier web development.
- **TypeScript**: Used for writing the application logic.

## Development Progress

### UI Components

- Implemented a responsive **Sidebar** component with sections for user management.
- Created a **Topbar** component with a search input field for quick access to subscription information.
- Developed the **MainContent** area to display user subscription details in a table format, including user avatars and contact information.

### Styling Improvements

- Applied consistent color schemes and styles across components using Chakra UI.
- Added soft borders and rounded corners to input fields and buttons for a modern look.
- Ensured that the sidebar and main content area fill the available height using flexbox layout.

## Future Improvements

- Add user authentication and management features.
- Implement more advanced filtering and sorting options for the subscription table.
- Enhance mobile responsiveness for better usability on smaller devices.

## Acknowledgements

- [Chakra UI](https://chakra-ui.com/) for the component library.
- [React](https://reactjs.org/) for building interactive UIs.

```

```
