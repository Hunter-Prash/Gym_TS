
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div>
        
      <div className='flex m-2 p-2 gap-2'>
            <img src={Logo} alt='Logo' className=''/>
            <p className='m-1 p-2 relative ml-3 font-bold '>Home</p>
            <p className='m-1 p-2 font-bold'>Benefits</p>
            <p className='m-1 p-2 font-bold'>Classes</p>
            <p className='m-1 p-2 font-bold'>Contact Us</p>

            <p className='m-1 p-2 relative ml-[40%]  font-bold'>Sign In</p>
            <button className='m-1 p-2  bg-yellow-500 hover:bg-blue-400 rounded-lg'>Become Member</button>
      </div>
      
    </div>
  )
}

export default Navbar;
