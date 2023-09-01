# Project README

## Folder Structure
This project follows a structured folder organization to maintain code organization and readability:


- `app`: Contains the main application pages.
- `components`: React components used in the application.
- `contexts`: React context providers for managing global state.
- `hooks`: Custom React hooks for reusing logic.
- `icons`: SVG or image icons used in the app.
- `themes`: Theme configurations, including default and complex themes.
- `utils`: Utility functions and helpers.
- `constants`: Constants and configuration files.
- `types`: TypeScript type definitions.

## Tech Stack
- **Next.js**: Utilized for its features, enhancements, and easy development process.
- **Chakra UI**: Used as the primary styling system.
- **Custom Utilities**: Created custom utilities similar to Material-UI's styled components to avoid unnecessary component renders based on themes.
- **Formik With Yup**: Used for form validation.

## Blog Page
The project includes a blog page, which is statically generated.
- **Incremental Static Generation (ISG)**: To balance performance and user experience, ISG is implemented with a revalidation period of about every 1 minute. This ensures that the recent posts are updated periodically while not overloading the server with frequent regenerations of less-accessed pages.

## Blog Post Details
The project includes a blog post details page, which is not statically generated. However, the recent posts component is statically generated. Here's why:

- **Page Usage**: The blog post details page is not frequently accessed by users.
- **Incremental Static Generation (ISG)**: To balance performance and user experience, ISG is implemented with a revalidation period of about every 1 hour. This ensures that the recent posts are updated periodically while not overloading the server with frequent regenerations of less-accessed pages.

## Create Blog Page
The project includes a create blog page, which is not statically generated. and applied form validation with the help of formik and yup

## Setting Up and Running the Project
To set up and run this project, follow these steps:

1. **Clone the Repository**:
   git clone <repository-url>
   cd <repository-folder>

2. **Install Dependencies**:
   npm install

**Start the Development Server**:
npm run dev


4. **Access the Application**:
   The application should now be running locally. Open your web browser and go to `http://localhost:3000` to access it.

5. **Exploring the Code**:
- Explore the `src` folder for React components, contexts, hooks, and other application-specific code.
- Custom utility functions can be found in the `utils` folder.
- Theme configurations are located in the `themes` folder.
- Constants and configuration files are in the `constants` folder.
- TypeScript type definitions are present in the `types` folder.

## Design Decisions
- Next.js was chosen for its server-side rendering capabilities, making it suitable for SEO optimization and faster page loads.
- Chakra UI was selected as the primary styling system for its ease of use and customization options.
- Custom utilities were created to optimize styling performance and reduce unnecessary re-renders.
- Incremental Static Generation (ISG) was employed to balance performance and ensure the recent posts are updated at reasonable intervals, considering the page's usage pattern.

## Assignment Instructions
Applied everything mentioned including bonus assignment