import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import { lazy } from 'react';
const ContactPage = lazy(() => import('./pages/ContactPage'));
const EmployeePage = lazy(() => import('./pages/EmployeePage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/partners/:slug" element={<EmployeePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
