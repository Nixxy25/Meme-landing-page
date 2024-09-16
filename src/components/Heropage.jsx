import kittyImage from '../assets/Untitled_design__2_-removebg-preview.png';
import { useState, useEffect } from 'react';
import { motion, useAnimation} from 'framer-motion';

const HeroPage = () => {
    const [text, setText] = useState("0x1234567890abcdef1234567890abcdef12345678");
    const [buttonText, setButtonText] = useState("Copy");

    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        .then(() => {
            setButtonText("Copied!");
        // Revert the button text back to 'Copy Text' after 2 seconds
        setTimeout(() => setButtonText(buttonText), 2000);
        })
    }

    const [textVisible, setTextVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        // Trigger image animation and start text animation after image animation completes
        const sequence = async () => {
            await controls.start({ x: 0, opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } });
            setTextVisible(true); // Set text visible after image animation completes
        };
        sequence();
    }, [controls]);
    
    return (
        <div className="" style={{ overflow: 'hidden' }}>
        <div className='mx-24  my-8 flex flex-col gap-14 max-sm:mx-8'>
            <div>
                <motion.nav className='flex justify-between items-center bg-[#FAEBD7] py-4 px-8 max-sm:px-4 max-sm:py-3 rounded-lg box border border-black'
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                >
                    <a href="" className='flex items-center gap-2'>
                        <img className='w-10 p-1 rounded-full bg-[#c87748] ' src={kittyImage}></img>
                        <h3 className='distinct font-bold text-2xl max-sm:hidden uppercase tracking-widest'>$KITTY</h3>
                    </a>

                    <div className='gap-6 flex items-center'>
                        <a href="" className="flex gap-2">
                            <h3 className="max-sm:hidden">Twitter</h3>
                            <div className="lg:hidden button rounded-md border border-black p-2"><svg className="w-5" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></div>
                        </a>
                        <a href="" className="flex gap-2">
                            <h3 className="max-sm:hidden">Telegram</h3>
                            <div className="lg:hidden button rounded-md border border-black p-2"><svg className="w-5" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg></div>
                        </a>
                     
                        <a href="" className='max-sm:hidden'>Discord</a>
                    </div>

                    <div>
                        <button className='uppercase bg-[#c27348] text-white button rounded-md  px-4 py-2 max-sm:text-sm  border border-black '>Buy Kitty</button>
                    </div>
                </motion.nav>
            </div>


            <div className='flex justify-between max-sm:flex-col items-center gap-12'>
                <div className='flex  flex-col lg:w-1/2 '>
                    <motion.h1 className='distinct text-[9rem] max-sm:text-[5rem] text tracking-wider font-[900]'
                        initial={{ x: '30%', opacity: 0 }}
                        animate={{ x: 0, opacity: 2 }}
                        transition={{ duration: 1.5, ease: 'easeOut',  }}
                        style={{ overflow: 'hidden' }}
                    >
                        $KITTY
                    </motion.h1>

                    <motion.h3 className='text-sm pb-8 leading-6  '
                        initial={{ x: '30%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' ,delay: 0.5 }}
                        style={{ overflow: 'hidden' }}
                    >
                    Meet Kitty—the memecoin that’s all about fun and community! Inspired by our favorite internet cats, 
                    Kitty brings a playful twist to the crypto world. Join us for a purr-fectly good time!
                    </motion.h3>

                    <motion.div className='flex items-center rounded-md bg-[#FAEBD7] py-3 px-3 rounded-lg box border border-black justify-between mb-6'
                        initial={{ x: '30%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut',delay: 1 }}
                    >
                        <h3 className="max-sm:text-[0.76rem]" >{text}</h3>
                        <button onClick={handleCopyText} className='bg-[#c27348] text-white box rounded-md px-8 max-sm:px-4 text-center py-2 button uppercase' >{buttonText}</button>
                    </motion.div>

                    <motion.div className='flex gap-8'
                        initial={{ x: '30%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' ,delay: 1.5 }}
                    >
                        <button className='bg-[#c27348] text-white uppercase button rounded-md px-8 py-3 max-sm:px-4 max-sm:py-3 border border-black '>Dexscrenner</button>
                        <button className='bg-[#c27348] text-white uppercase button rounded-md px-8 py-3 max-sm:px-4  border border-black '>Buy Now</button>
                    </motion.div>
                </div>

                <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{ overflow: 'hidden' }} // Ensure no overflow issues
            >
                    <img className='' src={kittyImage} alt="Kitty" />
                </motion.div>
            </div>    
        </div>
        
        <div className="kitty flex gap-10 px-6  bg-[#c27348] mb-6 py-6 ">
            <div className=' flex gap-10  items-center  kitty-slide '>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p> 
            </div>

            <div className=' flex gap-10 items-center kitty-slide '>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p>
                <p className='font-bold text-white tracking-wider'>#KITTY</p> 
            </div>
        </div>

        </div>
    )
}

export default HeroPage;