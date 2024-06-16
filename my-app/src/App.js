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
import Test from './pages/Test/Test';
import FootballENG from './pages/Category/FootballENG';
import FootballVN from './pages/Category/FootballVN';
import FootballEURO from './pages/Category/FootballEURO';
import FootballFRANCE from './pages/Category/FootballFRANCE';
import FootballSPAIN from './pages/Category/FootballSPAIN';
import FootballGER from './pages/Category/FootballGER';
import FootballITALIA from './pages/Category/FootballITALIA';
import TestAPI from './pages/Test/TestAPI';


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
        path: '/football-en',
        element: <FootballENG></FootballENG>
      },
      {
        path: '/football-vn',
        element: <FootballVN></FootballVN>
      },
      {
        path: '/football-euro',
        element: <FootballEURO></FootballEURO>
      },
      {
        path: '/football-france',
        element: <FootballFRANCE></FootballFRANCE>
      },
      {
        path: '/football-spanish',
        element: <FootballSPAIN></FootballSPAIN>
      },
      {
        path: '/football-germany',
        element: <FootballGER></FootballGER>
      },
      {
        path: '/football-italia',
        element: <FootballITALIA></FootballITALIA>
      },
      {
        path: '/latest',
        element: <Latest></Latest>
      },
      {
        path: '/test',
        element: <TestAPI></TestAPI>
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