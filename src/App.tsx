import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import SinglePage from './pages/SinglePage';
import Todos from './pages/Todos';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Todos />} />
          <Route path="about" element={<About />} >
            <Route path=":slug" element={<SinglePage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}