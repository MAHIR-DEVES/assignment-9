# HoodHappiness - Event Management Platform (Frontend Only)

![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-4.x-yellow)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-cyan)

The frontend application for HoodHappiness - an event booking platform for
weddings, corporate events, and tech conferences. (Backend integration will be
added in future development phases)

## ✨ Frontend Features

### 1. User Interface

- 🎨 **Modern UI** with TailwindCSS
- 📱 **Fully Responsive** design
- 🖼️ **Interactive Event Galleries**
- 🎟️ **Event Card Components**

### 2. Core Functionalities

- 🔍 **Event Search & Filtering**
  - By category (Wedding/Corporate/Tech)
  - By location
- 📅 **Booking Simulation**
- 👤 **User Authentication UI**
  - Login/Registration forms
  - Password recovery flow

### 3. Demo Data Handling

- 📦 **Mock Data Integration**
- 🛠️ **API Simulation**
  - Axios mock adapters
  - Loading states

## 🛠 Tech Stack

- **Framework**: React.js
- **Build Tool**: Vite
- **Styling**: TailwindCSS + DaisyUI
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Icons**: React Icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourrepo/hoodhappiness-frontend.git
cd hoodhappiness-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run on [http://localhost:5173](http://localhost:5173)

## 🎯 Key Components

### 1. Event Listing Page

- Category tabs

### 2. Event Details Page

- Image carousel
- Date/venue information
- Capacity indicator
- "Book Now" CTA

### 3. Booking Flow

- Date selection calendar
- Attendee count selector
- Contact form
- Confirmation modal

## 🔌 Future API Integration Points

These endpoints will be implemented when backend is developed:

```javascript
// Authentication
POST /api/auth/login
POST /api/auth/register

// Events
GET /api/events
GET /api/events/:id

// Bookings
POST /api/bookings
GET /api/bookings/:userId
```

## 💻 Development Notes

### Working with Mock Data

All current functionality uses mock data in `src/data/`:

- `events.js` - Sample event data
- `users.js` - Mock user profiles
- `bookings.js` - Sample booking records

### Styling Guidelines

- Use Tailwind utility classes primarily
- For complex styles, add to `src/styles/`
- Follow BEM-like naming for custom classes

## 📜 License

MIT License © 2023 HoodHappiness

---

**Next Phase Development**

- [ ] Integrate with Node.js backend
- [ ] Implement real authentication
- [ ] Add payment processing
- [ ] Develop admin dashboard
