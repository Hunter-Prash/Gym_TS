import ActionButton from '../ActionButton';
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
        
    <div className='flex m-2 p-2 gap-2 bg-red-100 rounded-lg'>
          <img src={Logo} alt='Logo' className='h-[50%] w-[10%] object-cover mt-5'/>

          <div className='ml-[20px] flex gap-3 py-4 font-bold text-red-700'>
            <Links  page='Home' selectedPage={selectedPage} setselectedPage={setselectedPage} />
            <Links page='Benefits' selectedPage={selectedPage} setselectedPage={setselectedPage}/>
            <Links page='Classes' selectedPage={selectedPage} setselectedPage={setselectedPage}/>
            <Links page='Contact Us' selectedPage={selectedPage} setselectedPage={setselectedPage}/>
          </div>
          
          <div className='flex justify-center absolute ml-[80%] gap-1 p-1'>
            <p className='m-1 p-2   font-bold'>Sign In</p>
            <ActionButton setselectedPage={setselectedPage}>Become Member</ActionButton>
          </div>

    </div>
    
  </div>

  )
}

export default Navbar
