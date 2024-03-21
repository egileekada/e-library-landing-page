import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom' 
import Home from './pages/home';

function App() {

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/"> 
        <Route index element={<Home />} /> 
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
