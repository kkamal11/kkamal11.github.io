import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import NotFoundPage from "./pages/NotFoundPage"
import Projects from "./pages/Projects"
import VisionComp from "./components/Vision"
import Blogs from "./pages/Blogs"

const KNOWN_ROUTES: string[] = ['/','/contact','/about','/blog','/projects']

function App() {

  const location = useLocation();
  const hideOnRoutes: string[] = ['/contact', '/blog'];
  const isRouteHidden: boolean = hideOnRoutes.includes(location.pathname);
  const isRouteNotFound: boolean = !KNOWN_ROUTES.includes(location.pathname);
  const shouldBeHidden = isRouteHidden || isRouteNotFound;
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!shouldBeHidden && <VisionComp />}
      <Footer />
    </div>
  );
}

export default App
