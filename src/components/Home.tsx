import {ReactComponent as CatImage} from '../assets/cat-unscreen.svg'


const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="flex flex-row">
          <div className="text-crayon-100">
            <div className="text-[60px] leading-[72px]">
              <div className="">
                Smart Aquarium
              </div>
              <div>
                for Smart People
              </div>
            </div>
            <div>
              Live a much smarter life as a fish lover
            </div>
          </div>
          <div>
            <CatImage></CatImage>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
