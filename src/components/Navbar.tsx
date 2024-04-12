import Logo from '../assets/Logo.png';
import { SelectedPage } from '../types';
import Links from './Links';


type Props = {
  selectedPage:SelectedPage,
  setselectedPage:(value:SelectedPage)=>void;
}

const Navbar = ({selectedPage,setselectedPage}: Props) => {
  return (
    <div>
        
    <div className='flex m-2 p-2 gap-2'>
          <img src={Logo} alt='Logo' className=''/>

          <div className='ml-[20px] flex gap-3 py-4 font-bold text-red-400'>
            <Links  page='Home' selectedPage={selectedPage} setselectedPage={setselectedPage} />
            <Links page='Benefits' selectedPage={selectedPage} setselectedPage={setselectedPage}/>
            <Links page='Classes' selectedPage={selectedPage} setselectedPage={setselectedPage}/>
            <Links page='Contact Us' selectedPage={selectedPage} setselectedPage={setselectedPage}/>
          </div>
          

          <p className='m-1 p-2 relative ml-[40%]  font-bold'>Sign In</p>
          <button className='m-1 p-2  bg-yellow-500 hovetext-red-400 rounded-lg'>Become Member</button>
    </div>
    
  </div>

  )
}

export default Navbar
