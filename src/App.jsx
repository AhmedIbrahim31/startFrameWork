import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import Home from "./components/Home/Home"
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error'

function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
      ],
    },

  ]);
  return <RouterProvider router={routers} />;

}

export default App
