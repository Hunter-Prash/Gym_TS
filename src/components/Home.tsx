import ActionButton from '../ActionButton';
import { SelectedPage } from '../types'
import HomePageText from '../assets/HomePageText.png';
import HomePageGraphic from '../assets/HomePageGraphic.png';
import SponsorRedBull from '../assets/SponsorRedBull.png';
import SponsorForbes from '../assets/SponsorForbes.png';
import SponsorFortune from '../assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setselectedPage:(value:SelectedPage)=>void;
}

const Home = ({setselectedPage}: Props) => {
  return (
    <>
        <div className='p-2 m-5 flex gap-2 justify-between'>
            

            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{duration:1}}
            variants={{
              hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}
            }}

            className='mt-[110px] ml-7'>
             <img src={HomePageText} alt='' className=''/>
                <p className='text-red-700 font-bold'>Unparalled Training and fitness classes.</p>
                <p className='text-red-700 font-bold'>World class studios to get the body shapes that you dream.</p>

                <div className='mt-5 m-5'>
                    <ActionButton setselectedPage={setselectedPage}>Join Now</ActionButton>

                    <AnchorLink
                    onClick={() => setselectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    className="text-sm font-bold text-red-500 underline hover:text-slate-200">

                    </AnchorLink>
                </div>
            </motion.div>
            
            <div className='h-[400px] mr-[200px]'>
            <img src={HomePageGraphic} alt='' className='w-full h-full object-cover'/>
        </div>
        </div>


        <div className='flex justify-between gap-2 m-5 p-5 bg-red-100 rounded-xl'>
              <img src={SponsorForbes} alt='' className='object-cover h-full'/>
              <img src={SponsorFortune} alt='' className='object-cover h-full' />
              <img src={SponsorRedBull} alt='' className='object-cover h-full'/>
        </div>

    </>
  )
}

export default Home