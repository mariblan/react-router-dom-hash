import './App.css';
import { media, sections } from './assets/media.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/routingComponents/Home';
import Films from './components/routingComponents/Films';
import Film from './components/routingComponents/Film';
import Series from './components/routingComponents/Series';
import Serie from './components/routingComponents/Serie';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route
              path={'/'}
              element={<Home media={media} sections={sections} />}
            ></Route>
            <Route
              path={'/films'}
              element={<Films media={media} sections={sections} />}
            ></Route>
            <Route path={'/films/:id'} element={<Film media={media} />} />
            <Route
              path={'/series'}
              element={<Series media={media} sections={sections} />}
            />
            <Route
              path={'/series/:id'}
              element={<Serie media={media} sections={sections} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
