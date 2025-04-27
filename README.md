# MAX Platform Documentation

## Welcome to MAX: The Entertainment Revolution

---

## Project Overview
The MAX platform is a modern IPTV service offering seamless access to over 400+ channels, movies, series, sports, and more. This documentation provides detailed instructions for setting up the platform, using its features, and leveraging its functionalities.

## Features and Components

### 1. Main Features:
- Infinite scrolling text showcasing offers.
- Responsive design for all screen sizes (mobile, tablet, desktop).
- Smooth animations powered by AOS and Animate.css.

### 2. Core Components:
- **Navbar**: Provides intuitive navigation across the platform.
- **PromoPage**: Landing page for promotions.
- **Plataforma**: Displays device compatibility.
- **AndroidPromo**: Highlights the app availability for Android.
- **ScrollingText**: Features continuous text scroll animation.
- **PromoOffer**: Special promotional components (e.g., 7-day access).
- **Footer**: Contact details, policies, and app download links.

## Setup Guide

### Step 1: Prerequisites
- Ensure you have Node.js installed.
- Recommended: Install a code editor such as Visual Studio Code.

### Step 2: Installation
- Clone the repository:
```bash
git clone https://github.com/your-repo/max-platform.git
```
- Navigate to the max directory:
```bash
cd max
```
- Install dependencies:
```bash
npm install
```
- Start the development server:
```bash
npm run dev
```

### Step 3: Build for Production
- To optimize the app for production:
```bash
npm run build
```

## File Structure

### public Directory:
Contains images used across the project, such as:
- `banner.png`: Promotional banners.
- `logo.png`: Platform branding.
- Device icons for Android, LG, Samsung, FireTV.

### src Directory:
- **Assets**: Resources like `react.svg` and `vite.svg`.
- **Components**: Reusable components (PromoOffer, Footer, etc.).
- **Styles**:
  - `App.css`: Global styles.
  - `ScrollingText.css`: Custom styles for scrolling text.

---

Happy streaming with MAX!

