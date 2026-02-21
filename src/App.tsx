import { Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import VisionComp from "./components/Vision"
import RedirectHandler from "./utils/RedirectHandler"
import ScrollToTop from "./utils/ScrollToTop"
import PageLoader from "./components/PageLoader"
import ProtectedRoute from "./vault/ProtectedRoute";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const Blogs = lazy(() => import("./pages/Blogs"));
const VaultLogin = lazy(() => import("./components/VaultLogin"));
const PrivateVault = lazy(() => import("./pages/PrivateVault"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
        <ScrollToTop />
        <RedirectHandler />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/vault" element={<VaultLogin />} />
            <Route
              path="/private-vault"
              element={
                <ProtectedRoute>
                  <PrivateVault />
                </ProtectedRoute>
              }/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      {!shouldBeHidden && <VisionComp />}
      <Footer />
    </div>
  );
}

export default App
