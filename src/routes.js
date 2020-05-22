/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
