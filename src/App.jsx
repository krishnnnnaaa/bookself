
import './App.css';
import Header from './components/Header';
import { BookStateProvider } from './context/bookState';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <BookStateProvider>
    <div className='h-screen'>
      <Header/>
      <Outlet/>
    </div>
    </BookStateProvider>
  );
}

export default App;
