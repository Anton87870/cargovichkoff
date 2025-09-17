import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import RootLayout from './ui/RootLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import OrderPage from './pages/OrderPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import HelpPage from './pages/HelpPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CalculatorPage from './pages/CalculatorPage.jsx';
import TrackingPage from './pages/TrackingPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { AuthProvider } from './lib/auth.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'payment', element: <PaymentPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'help', element: <HelpPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'account', element: <AccountPage /> },
              { path: 'calculator', element: <CalculatorPage /> },
              { path: 'tracking', element: <TrackingPage /> },
              { path: 'services', element: <ServicesPage /> },
              { path: 'contacts', element: <ContactsPage /> },
              { path: 'about', element: <AboutPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);


