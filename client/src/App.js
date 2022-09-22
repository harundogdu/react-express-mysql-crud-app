import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Create, Home, Update } from 'pages';
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
