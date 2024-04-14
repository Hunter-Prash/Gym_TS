import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { SelectedPage } from './types';
SelectedPage
import Home from './components/Home';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <>
      <Navbar selectedPage={selectedPage} setselectedPage={setSelectedPage}/>
      <Home setselectedPage={setSelectedPage}/>
    </>
  )
}

export default App
