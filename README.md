)

📸 Image Gallery App (React + Tailwind)

A modern and responsive Image Gallery Application built using React, Axios, and Tailwind CSS.
It fetches images from the Picsum API and displays them in a clean grid layout with pagination.

🚀 Features
📷 Fetch images from API (Picsum)
🎨 Modern UI with Tailwind CSS
⚡ Fast and responsive design
🔄 Pagination (Next / Prev)
⏳ Loading spinner while fetching data
📱 Fully responsive (mobile → desktop)
✨ Smooth hover animations

🛠️ Tech Stack
React (Hooks)
Axios
Tailwind CSS
Picsum API

📦 Installation

Follow these steps to run locally:

# Clone the repository
git clone https://github.com/your-username/image-gallery.git

# Go into the folder
cd image-gallery

# Install dependencies
npm install

# Start the app
npm run dev
🌐 API Used
https://picsum.photos/v2/list?page=1&limit=30
Free image API
No authentication required

📁 Project Structure
src/
│── components/
│   └── Card.jsx
│
│── App.jsx
│── main.jsx

🧠 How It Works
useState → store images & page index
useEffect → fetch data when page changes
axios → API call
map() → render images
Pagination updates page (idx)

🎯 UI Highlights
Grid layout (5 cards per row on large screen)
Glassmorphism style cards
Smooth hover scale effect
Sticky pagination bar
Custom animated loader
🔮 Future Improvements
🔍 Search images
❤️ Like / Save feature
🔄 Infinite scroll
🖼️ Fullscreen preview modal
📂 Category filters

🙌 Author
Virendra Das