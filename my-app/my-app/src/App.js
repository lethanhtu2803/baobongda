import {createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom';

import "primereact/resources/themes/lara-light-cyan/theme.css";

import Home from './pages/Home/Home';

import Product from './pages/Blog/Blog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Blog from './pages/Blog/Blog';
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
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Profile from './components/Login/Profile';
import TestPage from './pages/Test/TestPage';
import Test2 from './pages/Test/Test2';
import NewsDetails from './pages/Details/NewsDetails';
import Euro from './pages/Euro/Euro';
import ScheduleEuro from './pages/Euro/ScheduleEuro';
import ResultEuro from './pages/Euro/ResultEuro';
import RankingEuro from './pages/Euro/RankingEuro';
import StatisticalEuro from './pages/Euro/StatisticalEuro';
import TopSoccerEuro from './pages/Euro/TopSoccerEuro';
import IdentifyEuro from './pages/Euro/IdentifyEuro';
import FootballEnglish from './components/football-en/FootballEnglish';
import SaveNews from './pages/SaveNews/SaveNews';

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
        element: <Blog />
      },
      {
        path: '/blog-details',
        element: <BlogDetails></BlogDetails>
      },
      {
        path: '/euro',
        element: <Euro></Euro>
      },
      {
        path: '/schedule-euro',
        element: <ScheduleEuro></ScheduleEuro>
      },
      {
        path: '/result-euro',
        element: <ResultEuro></ResultEuro>
      },
      {
        path: '/charts-euro',
        element: <RankingEuro></RankingEuro>
      },
      {
        path: '/statistical-euro',
        element: <StatisticalEuro></StatisticalEuro>
      },
      {
        path: '/top-goal-euro',
        element: <TopSoccerEuro></TopSoccerEuro>
      },
      {
        path: '/identify-euro',
        element: <IdentifyEuro></IdentifyEuro>
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
        path: '/news-details/:articleId',
        element: <NewsDetails></NewsDetails>
      },
      {
        path: '/test2',
        element: <Test></Test>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/english',
        element: <FootballEnglish></FootballEnglish>
      },
      {
        path: '/save-news',
        element: <SaveNews></SaveNews>
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