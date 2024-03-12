import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Analytics from './scenes/dashboard/Analytics.jsx'
import { CRM } from './scenes/dashboard/CRM.jsx'
import Calendar from './scenes/app/Calendar.jsx'
import Contact from './scenes/team/Contact.jsx'
import Chart from './scenes/chart/Chart.jsx'
import './index.css'
import { store } from "./state/store.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Navigate to="/dashboard/analytics" />} />
      <Route path="dashboard">
        <Route path="analytics" element={<Analytics />} />
        {/* <Route path="crm" element={<CRM />} /> */}
      </Route>
      <Route path="app">
        <Route path="calendar" element={<Calendar />} />
      </Route>
      <Route path="team">
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="chart" element={<Chart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
