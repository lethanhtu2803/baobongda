import {createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home/Home';

import Product from './pages/Blog/Blog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Category from './pages/Category/Category';
import Latest from './pages/Latest/Latest';


const Layout = () => {
  return (
    <div className='app'>
       <Header></Header>
        <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/blog-details',
        element: <BlogDetails></BlogDetails>
      },
      {
        path: '/about',
        element: <About></About>
      },
      
      {
        path: '/category',
        element: <Category></Category>
      },
      
      {
        path: '/latest',
        element: <Latest></Latest>
      },
    ]
  },

])

function App(){
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  );
}
export default App;