import { About } from "../Pages/About";
import { AboutDetailA } from "../Pages/AboutDetailA";
import { AboutDetailB } from "../Pages/AboutDetailB";

export const AboutRoutes = [
  {
    path:"",
    exact: true,
    children: <About />
  },
  {
    path:"/detailA",
    exact: false,
    children: <AboutDetailA />
  },
  {
    path:"/detailB",
    exact: false,
    children: <AboutDetailB />
  }
]