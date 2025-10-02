# Tara Chain Project README

## Overview
Tara Chain is a Next.js-based web application focused on cryptocurrency, integrating Web3 wallet functionality and token data management. The project leverages modern tools like React Query for data fetching, Wagmi for Web3 integration, and Tailwind CSS for styling. This README provides an overview of the project's structure and key components.

## Project Structure
The application is built with Next.js and uses client-side rendering for dynamic features. Key files and their purposes are outlined below:

### Core Components
- **Root Layout (`app/layout.tsx`)**
  - Defines the global structure of the application.
  - Includes providers (`ReactQueryProvider`, `WagmiContainer`) for data fetching and Web3 functionality.
  - Features a full-screen background image with a gradient overlay for visual effect.

- **Home Page (`app/page.tsx`)**
  - The main landing page of the application.
  - Composes key UI sections: `Header`, `HeroSection`, `TokenList`, and `Footer`.

- **Skeleton Component (`Skeleton.tsx`)**
  - A reusable loading placeholder with a pulsing animation.
  - Uses Tailwind CSS for styling and supports custom class names.

- **Button Component (`Button.tsx`)**
  - A customizable button with variants (`success`, `outline`) and sizes (`default`, `sm`, `lg`).
  - Built with `class-variance-authority` for dynamic styling and Tailwind CSS.

- **Wallet Actions (`WalletActions.tsx`)**
  - Manages Web3 wallet interactions using Wagmi hooks.
  - Handles connection/disconnection and displays BNB balance for the Binance Smart Chain (BSC).
  - Passes wallet state to child components via a render prop.

- **Tokens Query Hook (`useTokensQuery.tsx`)**
  - A React Query hook for fetching and caching token data.
  - Configured with a 5-minute stale time, 3 retries, and disabled refetch on window focus.

- **Utility Functions (`lib/utils.ts`)**
  - `cn`: Combines class names using `clsx` and `tailwind-merge` for Tailwind compatibility.
  - `shortenAddress`: Truncates wallet addresses for concise display (e.g., `0x123...456`).

- **React Query Provider (`providers/queryProvider.tsx`)**
  - Sets up React Query with a `QueryClient` for data fetching and caching.
  - Configures default query options: 5-minute stale time and 3 retries.

- **Wagmi Provider (`providers/wagmiProvider.tsx`)**
  - Configures Wagmi for Web3 integration with Binance Smart Chain (BSC) and MetaMask connector.
  - Provides Web3 context to the application via `WagmiProvider`.

- **Global Styles (`styles/globals.css`)**
  - Includes a `.bg-gradient-overlay` class for a gradient background with a blur effect.

## Key Features
- **Web3 Integration**: Connects to MetaMask and retrieves BNB balance on BSC (chain ID 56).
- **Token Data Management**: Fetches token data with React Query, caching results for performance.
- **Responsive UI**: Uses Tailwind CSS for responsive and customizable styling.
- **Loading States**: Displays skeleton placeholders during data fetching.
- **Custom Buttons**: Supports multiple button styles and sizes for consistent UI.

## Technologies Used
- **Next.js**: Framework for server-side rendering and static site generation.
- **React Query**: Data fetching and state management for token data.
- **Wagmi**: Web3 library for wallet connections and blockchain interactions.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Class Variance Authority (CVA)**: Dynamic class management for button variants.
- **TypeScript**: Ensures type safety across the application.

## Getting Started
1. **Clone the Repository**:
   ```bash:disable-run
   git clone <https://github.com/OmidJavaherii/tara-chain.git>
   cd tara-chain
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment**:
   - Ensure you have an Infura API key for BSC (`https://bsc-mainnet.infura.io`) or replace with another RPC provider in `wagmiProvider.tsx`.

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The app is available at `tara-chain.vercel.app`.
   The app will be available at `http://localhost:3000`.

## Usage
- **Wallet Connection**: Use the `WalletActions` component to connect/disconnect a MetaMask wallet and display the BNB balance.
- **Token List**: The `TokenList` component fetches and displays token data using the `useTokensQuery` hook.
- **Styling**: Customize styles via Tailwind CSS in `globals.css` or component-specific classes.
- **Buttons**: Use the `Button` component with `success` or `outline` variants and `default`, `sm`, or `lg` sizes.

## Notes
- The project is configured for Binance Smart Chain (BSC). Update `BSC_CHAIN_ID` or RPC URL in `wagmiProvider.tsx` for other chains.
- Ensure MetaMask is installed in the browser for wallet functionality.
- The `fetchTokens` function (in `actions/get-token`) is assumed to be implemented separately for token data retrieval.

```