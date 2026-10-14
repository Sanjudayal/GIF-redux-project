# 🎬 Media Search App

A responsive media discovery application built with **React, Redux Toolkit, and Tailwind CSS** that lets users search for images, videos, and GIFs in one place. Users can explore search results, save their favorite media to a personal collection, and manage saved items.

🔗 **[Live Demo](https://media-search-app-redux-project.vercel.app/)** · **[GitHub Repository](https://github.com/Sanjudayal/media-search-app-redux.git)**

## 📸 Preview

Home Page

![App Preview](./public/media%20search%20app.png)

Collection Page

![App Preview](./public/collection%20page%20of%20media%20search%20app.png)

---

## ✨ Features

- 🔍 **Search Media** — Search for media using any keyword.
- 🖼️ **Image Search** — Discover images using the Unsplash API.
- 🎥 **Video Search** — Find videos using the Pixabay API.
- 🎞️ **GIF Search** — Explore GIFs using the GIPHY API.
- 🏷️ **Media Details** — View media titles and relevant information.
- 🔗 **Original Source Links** — Open the original media source on the respective provider's website.
- ❤️ **Save to Collection** — Save interesting media to your personal collection.
- 📚 **Collection Management** — View and manage your saved media in one place.
- 🗑️ **Remove Saved Media** — Delete individual items from your collection.
- 🧹 **Clear Collection** — Remove all saved items with one action.
- 💾 **Persistent Storage** — Keep saved media in localStorage, even after refreshing the page.
- ⚛️ **Centralized State Management** — Manage search and collection states using Redux Toolkit.
- 📱 **Responsive UI** — Browse media across different screen sizes.

---

## 🛠️ Tech Stack

| Technology        | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| React             | Building the user interface with reusable components |
| JavaScript (ES6+) | Application logic and interactivity                  |
| Redux Toolkit     | Centralized state management                         |
| React Redux       | Connecting React components to the Redux store       |
| Tailwind CSS      | Responsive styling and layout                        |
| Vite              | Development server and build tooling                 |
| Unsplash API      | Image search                                         |
| Pixabay API       | Video search                                         |
| GIPHY API         | GIF search                                           |
| localStorage      | Persisting the saved media collection                |
| Vercel            | Deployment                                           |

---

## 🧠 Redux Architecture

This project uses **Redux Toolkit** to organize and manage application state through a centralized store and two feature slices.

### 1. Search Slice — `searchSlice.js`

Responsible for managing the search-related state.

- Stores the current search query.
- Updates the query when the user searches for media.
- Helps coordinate the search experience across components.

### 2. Collection Slice — `collectionSlice.js`

Responsible for managing the user's saved media collection.

- Adds media items to the collection.
- Removes individual items.
- Clears the entire collection.
- Manages collection-related state updates.

### 3. Redux Store — `store.js`

Combines the feature reducers into a centralized Redux store, making the relevant state available throughout the application.

### State Management Flow

```text
        User Searches for Media
                  |
                  v
             Search Slice
                  |
                  v
           Search Components
                  |
                  v
       Images / Videos / GIFs
                  |
                  v
          Save a Media Item
                  |
                  v
           Collection Slice
                  |
                  v
          Redux Store State
                  |
                  v
            localStorage
                  |
                  v
           Collection Page
```

_Note: This diagram represents the application's conceptual workflow. API requests are handled through the project's API integration code._

---

## 💾 How Collection Persistence Works

The application uses browser `localStorage` to preserve the user's saved media collection.

1. A user saves a media item from the search results.
2. Redux Toolkit updates the collection state.
3. The collection is persisted in localStorage.
4. The Collection page displays saved items.
5. Users can remove individual items or clear the entire collection.
6. The saved collection remains available after a page refresh.

Because the collection is stored in browser localStorage, it is specific to that browser and device rather than synchronized across multiple devices or user accounts.

---

## 📂 Project Structure

```text
media-search-app-redux/
│
├── src/
│   ├── api/
│   │   └── mediaApi.js
│   │
│   ├── components/
│   │   ├── CollectionCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── ResultCard.jsx
│   │   ├── ResultGrid.jsx
│   │   ├── SearchBar.jsx
│   │   └── Tabs.jsx
│   │
│   ├── pages/
│   │   ├── CollectioinPage.jsx
│   │   └── HomePage.jsx
│   │
│   ├── redux/
│   │   ├── features/
│   │   │   ├── collectionSlice.js
│   │   │   └── searchSlice.js
│   │   │
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Sanjudayal/media-search-app-redux.git
```

### 2. Navigate to the project directory

```bash
cd media-search-app-redux
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure API keys

Create a `.env` file in the project root and add the API credentials required by your application.

For example, if your code uses Vite environment variables:

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
VITE_PIXABAY_API_KEY=your_pixabay_api_key
VITE_GIPHY_API_KEY=your_giphy_api_key
```

Use the exact variable names expected by your `mediaApi.js` file. The names above are examples; change them if your implementation uses different names.

**Important:** Never commit real API credentials to GitHub. Keep `.env` in `.gitignore` and provide a safe `.env.example` file containing placeholder values instead.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal to use the application.

### 6. Create a production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📚 What I Learned

Building this project helped me practice React development beyond individual components and small demonstrations.

### React Development

- Building reusable components.
- Organizing an application into pages, components, and API modules.
- Passing data and handling user interactions.
- Managing application state across different parts of the UI.

### Redux Toolkit

- Creating a centralized Redux store.
- Organizing application state using slices.
- Defining reducers and actions.
- Updating state in response to user interactions.
- Separating search state from collection state.
- Connecting React components to Redux state.

### API Integration

- Working with multiple third-party APIs.
- Organizing API logic in a separate module.
- Handling different types of media data.
- Connecting search functionality with API results.

### Browser Storage

- Storing structured data using localStorage.
- Converting data between JavaScript objects and JSON.
- Persisting a collection across page refreshes.
- Keeping saved items manageable through add, remove, and clear operations.

### Project Organization

- Building a multi-component React application.
- Separating concerns across components, pages, APIs, and Redux features.
- Using Git and GitHub to track development.
- Deploying a React application using Vercel.

---

## 🔮 Future Improvements

Potential improvements for future iterations include:

- Add loading indicators and meaningful error messages.
- Add empty states for searches with no results.
- Improve search performance with debouncing.
- Prevent duplicate items in the collection.
- Add filtering and sorting options.
- Improve keyboard accessibility.
- Add automated tests for Redux reducers and core user flows.
- Explore more robust API credential protection through a backend.
- Add user accounts and cloud-synced collections.

---

## 👨‍💻 Author

**Sanju Dayal**

- [GitHub](https://github.com/Sanjudayal)
- [LinkedIn](https://linkedin.com/in/sanjudayal)

---

⭐ If you find this project interesting, feel free to explore the repository and try the live demo.

**Built as part of my journey toward becoming a better React developer.**
