# Jammming

Jammming is a single-page web application that allows users to search for songs using Spotify's vast music library, create custom playlists, and save them directly to their Spotify accounts. Built with HTML, CSS, JavaScript, and React, this project leverages the Spotify Web API for a seamless music management experience.

## Screenshot

![Jammming App Screenshot](/src/assets/images/app-image.png)

## Features

- **Spotify Integration**: Authorize and manage Spotify content within the app.
- **Search Functionality**: Find songs, albums, and artists from Spotify's extensive library.
- **Playlist Management**: Create, edit, and delete custom playlists.
- **Responsive Design**: A sleek, user-friendly interface adaptable to a wide range of devices.

## Live Demo

You can try out Jammming live at [Jammming on Netlify](https://jammming-reactapp.netlify.app/).

## Project Motivation

This project was an exploratory journey into React development, aimed at understanding component-based architecture and state management in real-world applications. It served as a significant learning experience, particularly in integrating third-party APIs and creating a fully functional web application.

## Technical Challenges

Building Jammming as my first fully functional React web application presented a series of challenges that were crucial in my journey to understanding the intricacies of React's component-based architecture. Here are some of the hurdles I encountered and insights I gained:

- **Component Structure**: Determining the hierarchy and composition of components was initially daunting. I had to think critically about which components should maintain their own state and which should be stateless functional components. This was a practical exercise in planning and implementing a clean component architecture.

- **State Management**: Understanding how to lift state up and pass it down to the necessary components via props was a concept that took some practice to get right. Ensuring the components were updated and rendered correctly when the state changed was an exercise in managing React's unidirectional data flow.

- **API Integration**: Working with the Spotify Web API was my first experience with a third-party API in a React application. Handling authentication and managing API requests/responses while keeping the UI responsive was a significant learning curve.

- **Asynchronous Operations**: Implementing asynchronous operations and handling promises were challenging. I learned to manage state in an asynchronous environment, ensuring that the UI components reflect the correct state at all times.

Reflecting on these challenges, each obstacle provided a valuable lesson that deepened my understanding of React and front-end development. This project served as a practical guide through the React landscape, teaching me not just how to use the library, but how to think in React.

## Components

- `App.js`: The central hub of the application, managing state and rendering child components.
- `SearchBar`: Handles song searches and displays the search input field.
- `SearchResults`: Lists the results of the search query.
- `Playlist`: Enables users to manage their custom playlists.
- `TrackList`: Renders a list of tracks either from search results or playlists.
- `Track`: Displays individual songs within the TrackList.

## Util

- `Spotify.js`: Contains functions for interacting with the Spotify Web API, including user authentication, song search, and playlist management.

## Authorization Flow

Jammming uses the `Implicit Grant Flow` from the Spotify Web API for user authentication, which simplifies the login process without the need for server-side code.

## Getting Started

To run Jammming locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm start`.

## Future Improvements

While Jammming is a fully functional React web application, there is always room for growth and enhancement. The following are some of the improvements I am considering for future versions:

- **Enhanced Security**: Transitioning the authorization flow from "Implicit Grant Flow" to "Authorization Code Flow with PKCE" to provide a more secure experience for users.

- **Search Term Persistence**: Implementing functionality to remember the user's search term after they are redirected during the login process, so they can pick up right where they left off.

- **Search Optimization**: Refining the search feature to exclude songs from the search results that are already in the playlist, thereby streamlining the user experience and preventing duplicate entries.

- **Loading Indicators**: Adding a loading screen or animation when playlists are being saved. This will provide users with visual feedback that their request is being processed, improving the overall user experience.

These enhancements aim to make Jammming more user-friendly, secure, and efficient, and I look forward to implementing these features as I continue to learn and grow as a developer.

## Contributions

As this is a practice project, contributions are not actively sought. However, feedback and suggestions are always welcome.

## License

Jammming is open-source software [licensed as MIT](LICENSE).
