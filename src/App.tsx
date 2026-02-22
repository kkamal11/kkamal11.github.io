import { Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import RedirectHandler from "./utils/RedirectHandler"
import PageLoader from "./components/layout/PageLoader"


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const VisionComp = lazy(() => import("./components/Vision"));
const Footer = lazy(() => import("./components/layout/Footer"));
const Projects = lazy(() => import("./pages/Projects"));
const Blogs = lazy(() => import("./pages/Blogs"));
const ScrollToTop = lazy(() => import("./utils/ScrollToTop"));
const VaultShell = lazy(() => import("./vault/VaultShell"));
const FloatingResumeButton = lazy(() => import("./components/FloatingResumeButton"));
const ResumeViewer = lazy(() => import("./components/resume/ResumeViewer"));
const ProjectMarkdown = lazy(() => import("./components/MarkDownPreview"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const SHOW_VISON_COMP_ROUTES: string[] = ['/','/contact','/about','/blog','/projects', '/resume'];
const HIDE_VISION_COMP_ROUTES: string[] = ['/contact', '/blog','/Vault'];

function App() {

  const location = useLocation();
  const isRouteHidden: boolean = HIDE_VISION_COMP_ROUTES.includes(location.pathname);
  const isRouteNotFound: boolean = !SHOW_VISON_COMP_ROUTES.includes(location.pathname);
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
            <Route path="/vault/*"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <VaultShell />
                  </Suspense>
                }
            />
            <Route path="/resume" element={<ResumeViewer />} />
            <Route path="/projects/:id" element={<ProjectMarkdown />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      {!shouldBeHidden && <VisionComp />}
      {location.pathname !== '/resume' && <FloatingResumeButton />}
      <Footer />
    </div>
  );
}

export default App
