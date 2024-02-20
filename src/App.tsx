import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import DashboardPage from './pages/dashboard';
import DashboardLayout from './components/shared_components/dashboard_layout';

function App() {

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/">
        <Route index element={
          <>
          Login
          </>
        } />
        <Route path='/dashboard' element={<DashboardLayout />} >
        <Route index element={<DashboardPage />}  />
        </Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
