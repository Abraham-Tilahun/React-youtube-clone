YouTube Clone App

Welcome to the YouTube Clone App, a fully responsive and functional video streaming platform inspired by YouTube. Built with the latest web technologies, including React and Vite, this application aims to provide a seamless and engaging user experience for video content consumption. This project utilizes the YouTube Data API to fetch and display video data, ensuring an up-to-date and dynamic content experience.
Features

   1. Responsive Design: The app is designed to be fully responsive, ensuring a smooth user experience across all devices, from desktops to mobile phones.
   2.  Video Playback: Users can watch videos with a clean and intuitive video player, featuring essential controls for play, pause, volume adjustment, and fullscreen mode.
   
   3. Video Details: View detailed information about each video, including title, description, view . count, and more, fetched directly from the YouTube Data API.
    Comments and Likes: Engage with the community by viewing comments and likes on videos, providing a complete user experience.

Technologies Used

  #  React: Leveraging React for building a dynamic and performant user interface, utilizing component-based architecture for maintainability and scalability.
   # Vite: Utilized Vite as the build tool and development server, offering fast development cycles and optimized production builds.
   # Google YouTube Data API: Integrated with the YouTube Data API to fetch video data, including search results, video details, comments, and more.
   # CSS Modules: Used CSS Modules for styling, ensuring modular and maintainable CSS with no conflicts.

Installation and Setup

    Clone the Repository:

    bash

git clone https://github.com/abraham-tilahun/React-youtube-clone.git
cd youtube-clone

Install Dependencies:

bash

npm install

Configure API Key:

    Obtain an API key from the Google Developers Console by enabling the YouTube Data API.
    Create a .env file in the root directory and add your API key:

    plaintext

    VITE_YOUTUBE_API_KEY=your_api_key_here

Start the Development Server:

bash

npm run dev

Build for Production:

bash

    npm run build

Contribution

Contributions are welcome! If you have suggestions for new features, improvements, or bug fixes, please open an issue or submit a pull request. Let's work together to enhance this project and make it even better.
License

This project is licensed under the MIT License. See the LICENSE file for more details.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
