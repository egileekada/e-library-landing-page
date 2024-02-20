import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {
  
  const router = createBrowserRouter(
    
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<>
        </>} /> 
        <Route path='/dashboard' element={<>
        </>} /> 
      </Route>
    )
  );
  return ( 
    <RouterProvider router={router} />
  )
}

export default App
