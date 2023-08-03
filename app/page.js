import RightBanner from '../components/banner/RightBanner'
import LeftBanner from '../components/banner/LeftBanner'

export default function Home() {
  return (
    <section id="home" 
    className='w-full pt-10  pb-20 flex items-center flex border-b-[1px] 
    border-b-black'>
        <LeftBanner />
        <RightBanner />
    </section>
  )
}
