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
import PremierLeague from './components/football-en/PremierLeague';
import ScheduleEPL from './components/football-en/ScheduleEPL';
import ResultEPL from './components/football-en/ResultEPL';
import RankEPL from './components/football-en/RankEPL';
import StatisticalEPL from './components/football-en/StatisticalEPL';
import FACup from './components/football-en/FACup';
import LeagueCup from './components/football-en/LeagueCup';
import FootballSpain from './components/football-spain/FootballSpain';
import HotNews from './pages/HotNews/HotNews';
import Laliga from './components/football-spain/Laliga';
import ScheduleLaliga from './components/football-spain/ScheduleLaliga';
import ResultLaliga from './components/football-spain/ResultLaliga';
import RankLaliga from './components/football-spain/RankLaliga';
import StatisticalLaliga from './components/football-spain/StatisticalLaliga';
import FootballFrance from './components/football-france/FootballFrance';
import League1 from './components/football-france/League1';
import ScheduleL1 from './components/football-france/ScheduleL1';
import ResultL1 from './components/football-france/ResultL1';
import RankL1 from './components/football-france/RankL1';
import StatisticalL1 from './components/football-france/StatisticalL1';
import FootballGermany from './components/football-ger/FootballGermany';
import Bundesliga from './components/football-ger/Bundesliga';
import ScheduleBundesliga from './components/football-ger/ScheduleBundesliga';
import ResultBundesliga from './components/football-ger/ResultBundesliga';
import RankBundesliga from './components/football-ger/RankBundesliga';
import StatisticalBundesliga from './components/football-ger/StatisticalBundesliga';
import FootballItaly from './components/football-italy/FootballItaly';
import SeriA from './components/football-italy/SeriA';
import ScheduleSeriA from './components/football-italy/ScheduleSeriA';
import ResultSeriA from './components/football-italy/ResultSeriA';
import RankSeriA from './components/football-italy/RankSeriA';
import StatisticalSeriA from './components/football-italy/StatisticalSeriA';
import FootballVietNam from './components/football-vn/FootballVietNam';
import VLeague from './components/football-vn/VLeague';
import ScheduleVLeague from './components/football-vn/ScheduleVLeague';
import ResultVLeague from './components/football-vn/ResultVLeague';
import RankVLeague from './components/football-vn/RankVLeague';
import StatisticalVLeague from './components/football-vn/StatisticalVLeague';
import CupQG from './components/football-vn/CupQG';
import DTQGVN from './components/football-vn/DTQGVN';
import ScheduleDTQGVN from './components/football-vn/ScheduleDTQGVN';
import ResultDTQGVN from './components/football-vn/ResultDTQGVN';
import CopaAmerica from './components/football-international/CopaAmerica';
import WorldCup from './components/football-international/WorldCup';
import AsianCup from './components/football-international/AsianCup';
import Olympic from './components/football-international/Olympic';
import SeaGames from './components/football-international/SeaGames';
import C1 from './components/football-eu/C1';
import FootballEU from './components/football-eu/FootballEU';
import C2 from './components/football-eu/C2';
import C3 from './components/football-eu/C3';
import NationsLeague from './components/football-eu/NationsLeague';

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
        path: '/hotnews',
        element: <HotNews></HotNews>
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
      {
        path: '/premier-league',
        element: <PremierLeague></PremierLeague>
      },
      {
        path: '/schedule-epl',
        element: <ScheduleEPL></ScheduleEPL>
      },
      {
        path: '/result-epl',
        element: <ResultEPL></ResultEPL>
      },
      {
        path: '/rank-epl',
        element: <RankEPL></RankEPL>
      },
      {
        path: '/statistic-epl',
        element: <StatisticalEPL></StatisticalEPL>
      },
      {
        path: '/fa-cup',
        element: <FACup></FACup>
      },
      {
        path: '/league-cup',
        element: <LeagueCup></LeagueCup>
      },
      {
        path: '/spain',
        element: <FootballSpain></FootballSpain>
      },
      {
        path: '/laliga',
        element: <Laliga></Laliga>
      },
      {
        path: '/schedule-laliga',
        element: <ScheduleLaliga></ScheduleLaliga>
      },
      {
        path: '/result-laliga',
        element: <ResultLaliga></ResultLaliga>
      },
      {
        path: '/rank-laliga',
        element: <RankLaliga></RankLaliga>
      },
      {
        path: '/statistic-laliga',
        element: <StatisticalLaliga></StatisticalLaliga>
      },
      {
        path: '/france',
        element: <FootballFrance></FootballFrance>
      },
      {
        path: '/league1',
        element: <League1></League1>
      },
      {
        path: '/schedule-l1',
        element: <ScheduleL1></ScheduleL1>
      },
      {
        path: '/result-l1',
        element: <ResultL1></ResultL1>
      },
      {
        path: '/rank-l1',
        element: <RankL1></RankL1>
      },
      {
        path: '/statistic-l1',
        element: <StatisticalL1></StatisticalL1>
      },
      {
        path: '/germany',
        element: <FootballGermany></FootballGermany>
      },
      {
        path: '/bundes',
        element: <Bundesliga></Bundesliga>
      },
      {
        path: '/schedule-bundes',
        element: <ScheduleBundesliga></ScheduleBundesliga>
      },
      {
        path: '/result-bundes',
        element: <ResultBundesliga></ResultBundesliga>
      },
      {
        path: '/rank-bundes',
        element: <RankBundesliga></RankBundesliga>
      },
      {
        path: '/statistic-bundes',
        element: <StatisticalBundesliga></StatisticalBundesliga>
      },
      {
        path: '/italy',
        element: <FootballItaly></FootballItaly>
      },
      {
        path: '/seria',
        element: <SeriA></SeriA>
      },
      {
        path: '/schedule-seria',
        element: <ScheduleSeriA></ScheduleSeriA>
      },
      {
        path: '/result-seria',
        element: <ResultSeriA></ResultSeriA>
      },
      {
        path: '/rank-seria',
        element: <RankSeriA></RankSeriA>
      },
      {
        path: '/statistic-seria',
        element: <StatisticalSeriA></StatisticalSeriA>
      },
      {
        path: '/vn',
        element: <FootballVietNam></FootballVietNam>
      },
      {
        path: '/vleague',
        element: <VLeague></VLeague>
      },
      {
        path: '/schedule-vleague',
        element: <ScheduleVLeague></ScheduleVLeague>
      },
      {
        path: '/result-vleague',
        element: <ResultVLeague></ResultVLeague>
      },
      {
        path: '/rank-vleague',
        element: <RankVLeague></RankVLeague>
      },
      {
        path: '/statistic-vleague',
        element: <StatisticalVLeague></StatisticalVLeague>
      },
      {
        path: '/cupqg',
        element: <CupQG></CupQG>
      },
      {
        path: '/dtqgvn',
        element: <DTQGVN></DTQGVN>
      },
      {
        path: '/schedule-dtqg',
        element: <ScheduleDTQGVN></ScheduleDTQGVN>
      },
      {
        path: '/result-dtqg',
        element: <ResultDTQGVN></ResultDTQGVN>
      },
      {
        path: '/copa',
        element: <CopaAmerica></CopaAmerica>
      },
      {
        path: '/worldcup',
        element: <WorldCup></WorldCup>
      },
      {
        path: '/asian',
        element: <AsianCup></AsianCup>
      },
      {
        path: '/olympic',
        element: <Olympic></Olympic>
      },
      {
        path: '/sea-games',
        element: <SeaGames></SeaGames>
      },
      {
        path: '/chauau',
        element: <FootballEU></FootballEU>
      },
      {
        path: '/c1',
        element: <C1></C1>
      },
      {
        path: '/c2',
        element: <C2></C2>
      },
      {
        path: '/c3',
        element: <C3></C3>
      },
      {
        path: '/nations-league',
        element: <NationsLeague></NationsLeague>
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