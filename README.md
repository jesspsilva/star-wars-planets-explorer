# 🌌 Star Wars Planets Explorer

A **Next.js** application that displays Star Wars planet data in a rich, interactive interface. With advanced features such as search, column toggling, pagination, and modal dialogs, this app offers a comprehensive view of planets from the Star Wars universe.

## ✨ Features

- 🌍 **Planet Search**: Easily search for specific planets by name.
- 📋 **Table View**: Organized data display for a clear overview of planet details.
- 👁 **Column Visibility Toggle**: Show or hide columns.
- 🗃 **Pagination**: Efficient navigation through pages of planet data.
- 🔍 **Modal Dialog**: Click on a planet to view detailed information in a modal window.
- 🌐 **Responsive Design**: Seamless experience across all devices and screen sizes.
- 📶 **Offline Mode**: Access data even without an internet connection.
- ⏳ **Loading & Error States**: Provides visual feedback during data loading and in case of errors.
- 🚀 **TypeScript Support**: Enhanced type safety for more reliable development.

## 🛠️ Technologies Used

This project is built with:

- **Framework**: [Next.js](https://nextjs.org)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Styling**: [Styled Components](https://styled-components.com) & [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com)
- **Icons**: [Radix Icons](https://icons.radix-ui.com)
- **Testing**: [Jest](https://jestjs.io) & [React Testing Library](https://testing-library.com)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 20 or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jesspsilva/star-wars-planets-explorer.git
   ```

2. Navigate to project directory:
   ```bash
   cd star-wars-planets-explorer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the App

To run the app in development mode:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing

This project includes integration and unit tests using Jest and React Testing Library. To run tests:

**Run all tests**:

```bash
npm run test
```

or

```bash
yarn test
```

## 📂 Project Structure

The project follows a modular and organized structure:

```plaintext
├── src/                    # Source code
│   ├── app/                # Main app logic
│   │   ├── api/            # API functions and data fetching
│   │   ├── components/     # Reusable UI components
│   │   ├── fonts/          # Font loading and styling
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility libraries
│   │   ├── provider/       # Context providers and global state
│   │   ├── types/          # Type definitions
│   │   ├── utils/          # Helper functions and utilities
│   │   ├── global.css      # Global styles for the entire app
│   │   ├── layout.tsx      # Layout component for the app
│   │   ├── page.tsx        # Main page displaying planet data
```

## Contributing

Contributions to this project are welcome! If you have any ideas, bug fixes, or enhancements, please feel free to open an issue or submit a pull request. Make sure to follow the existing code style and provide clear documentation for your changes. Just take into account that this is an experimental project and a work in progress.