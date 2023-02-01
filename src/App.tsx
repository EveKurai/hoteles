import { Home } from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Barranquilla } from './components/Barranquilla/Barranquilla';
import { Cali } from './components/Cali/Cali';
import { Cartagena } from './components/Cartagena/Cartagena';
import { Bogota } from './components/Bogota/Bogota';
import { DataProvider } from './providers/DataContext';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barranquilla" element={<Barranquilla />} />
          <Route path="/cali" element={<Cali />} />
          <Route path="/cartagena" element={<Cartagena />} />
          <Route path="/bogota" element={<Bogota />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
