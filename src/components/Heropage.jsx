import kittyImage from '../assets/Untitled_design__2_-removebg-preview.png';
const HeroPage = () => {
    return (
        <div className='mx-24  my-12 flex flex-col gap-12'>
            <div>
                <nav className='flex justify-between items-center bg-[#c87748] text-white py-4 px-8 rounded-md box'>
                    <a href="">
                        <img src=''></img>
                        <h3 className='distinct font-bold'>KITTY</h3>
                    </a>

                    <div className='gap-6 flex'>
                        <a href="">Twitter</a>
                        <a href="">Telegram</a>
                        <a href="">Discord</a>
                    </div>

                    <div>
                        <button className='uppercase bg-[#efb27b] rounded-md px-4 py-2'>Buy Kitty</button>
                    </div>
                </nav>
            </div>


            <div className='flex justify-between items-center gap-12'>
                <div className='flex gap-4 flex-col w-1/2'>
                    <h1 className='distinct text-7xl pb-6'>KITTY</h1>
                    <h3 className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer 
                     took a galley of type and scrambled it to make a type specimen book.
                    </h3>
                    <div className='flex items-center rounded-md bg-[#c87748]  py-3 px-4 justify-between mb-4'>
                        <h3>0xetghu2727772292929</h3>
                        <button className='bg-[#efb27b] box rounded-md px-4 py-2' >COPY</button>
                    </div>
                    <div className='flex justify-between'>
                        <button className='bg-[#c87748] uppercase box rounded-md px-8 py-3'>Dexscrenner</button>
                        <button className='bg-[#c87748] uppercase box rounded-md px-8 py-3'>Dextools</button>
                    </div>
                </div>

                <div className=''>
                    <img className='' src={kittyImage}></img>
                </div>
            </div>

            <div className="carousel-wrapper">
            <div className="carousel-box">
              <p>bcihubiugw</p>
            </div>
          </div>
          

    
        </div>
    )
}

export default HeroPage;