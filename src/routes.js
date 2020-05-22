// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import CitasList from "views/CitasList/CitasList.js";
import HistoryList from "views/HistoryList/HistoryList.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Inicio",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Perfil de usuario",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/citas",
    name: "Citas",
    icon: Notifications,
    component: CitasList,
    layout: "/admin"
  },
  {
    path: "/history",
    name: "Historial",
    icon: "content_paste",
    component: HistoryList,
    layout: "/admin"
  },
  // {
  //   path: "/olddashboard",
  //   name: "OLD Dashboard",
  //   icon: Dashboard,
  //   component: oldDashboardPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
];

export default dashboardRoutes;
