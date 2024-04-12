import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { SelectedPage } from './types';
SelectedPage

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <>
      <Navbar selectedPage={selectedPage} setselectedPage={setSelectedPage}/>
    </>
  )
}

export default App
