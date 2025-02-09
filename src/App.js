import { RouterProvider } from 'react-router';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import About from './layout/About';
import Dashboard from './layout/Dashboard';
import Description from './layout/projectsComp/Description';
import Image from './layout/projectsComp/Images';
import Projects, { outsideProjects } from './layout/projectsComp/Projects';
import Tech from './layout/projectsComp/Tech';
import EducationDetail from './layout/resume/EducationDetail';
import Resume from './layout/resume/Resume';
import WorkExperienceDetail from './layout/resume/WorkDetail';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} >
        {outsideProjects.map(project => (
          <Route path=":projectName" element={<Outlet />}>
            <Route path="description" element={<Description />} />
            <Route path="tech" element={<Tech tech={project.tech} />} />
            <Route path="images" element={<Image />} />

          </Route>

        ))}
        {/* <Route path=":projectName" element={<ProjectDetail />} /> */}
        {/* <Route path="repo" element={<Repo />} /> */}
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} >
        <Route path="education/:id" element={<EducationDetail />} />
        <Route path="work-experience/:id" element={<WorkExperienceDetail />} />
      </Route>
      <Route path="*" element={<redirect to="/" />} /> {/* Redirects to home if no match */}
    </Route>)
);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
