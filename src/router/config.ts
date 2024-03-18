const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/", "/about"],
    exact: true,
    component: "About",
  },
  {
    path: ["/solutions/it"],
    exact: true,
    component: "IT",
  },
  {
    path: ["/solutions/pac"],
    exact: true,
    component: "PAC",
  },
  {
    path: ["/solutions/aeronautics"],
    exact: true,
    component: "Aeronautics",
  },
  {
    path: ["/solutions/bac"],
    exact: true,
    component: "Bac",
  },
];

export default routes;
