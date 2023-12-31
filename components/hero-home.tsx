import Link from 'next/link'
import Image from 'next/image'
import VideoThumb from '@/public/images/hero.jpg'
import jem from '@/public/images/jem.jpg'
import ModalVideo01 from '@/components/modal-video-01'
import Slideshow from './Slidshow'
import '../app/css/font.css';
export default function HeroHome() {
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0  pointer-events-none opacity-95 -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true">
      {/* <Image
        className="object-cover object-center w-full h-full"
        src={jem}
        alt="Description of the image"
        
      /> */}


<Slideshow  />
      {/* <div className="relative">
      <Slideshow />
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Your Content Here
        </h1>
      </div>
    </div> */}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">

          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

            {/* Content */}
            <div className="text-center md:text-left  md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-PetitFormalScript-Regular  text-slate-200 mb-4 f">Create stunning web experiences</h1>
              <p className="text-5xl text-slate-400 w-1/2 mb-8 font-FontleroyBrownNF" >Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link className=" btn  text-white bg-blue-600 hover:bg-blue-700 w-full group" href="/request-demo">
                    Book a Session <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
                <div>
                  <Link className="btn text-white bg-slate-700 hover:bg-slate-800 w-full" href="https://forms.gle/ifqaCNpFqLCYpys47">Partner with Us</Link>
                </div>
              </div>
            </div>

            {/* Hero image */}
            {/* <ModalVideo01
              thumb={VideoThumb}
              thumbWidth={540}
              thumbHeight={405}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080} />             */}
                         {/* <Image className="aspect-[3/2] object-cover" src={VideoThumb} width={540} height={405} alt="Team 01" /> */}

          </div>

        </div>
      </div>
    </section>
  )
}