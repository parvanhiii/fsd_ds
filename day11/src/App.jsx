import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CounterApp from './Components/CounterApp';
import ImageApp from './Components/ImageApp';
import MainLayout from './Components/MainLayout'; 
import 'MainLayout.css';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/counterapp" element={<CounterApp />} />
          <Route path="/imageapp" element={<ImageApp />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;