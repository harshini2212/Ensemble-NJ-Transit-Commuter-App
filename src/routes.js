import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/common/DashboardLayout';
import MainLayout from './components/common/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RailwayStations from './pages/RailwayStations';
import TrainSchedule from './pages/TrainSchedule';
import TrainDelays from './pages/TrainDelays';
import TrainCancellations from './pages/TrainCancellations';
import TicketReservation from './pages/TicketReservations';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'railwayStations', element: <RailwayStations /> },
      { path: 'trainSchedule', element: <TrainSchedule /> },
      { path: 'trainDelays', element: <TrainDelays /> },
      { path: 'trainCancellations', element: <TrainCancellations /> },
      { path: 'ticketReservation', element: <TicketReservation /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
