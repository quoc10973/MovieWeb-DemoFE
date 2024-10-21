
<style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
</style>
import ratingStar from '../assets/rating.png';
import poster from '../assets/poster.jpg';
import playButton from '../assets/play-button.png';

const Banner = () => {
  return (
    <div className="w-full h-[650px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full bg-black top-0 left-0 opacity-30" />
      <div className="w-full h-full flex items-center justify-center space-x-[40px] p-10 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline ml-2 justify-center" >
          <p className="bg-gradient-to-r text-lg from-red-800 to-neutral-400 px-3 py-2 text-white " >
            Nexflix Show
          </p>
          <div className="flex flex-col space-y-4 w-[800px]">
            <h2 className="text-white text-3xl font-quicksand italic "> Doona! </h2>
            <div className='flex items-center space-x-2'>
              <img src={ratingStar} alt="rating" className='size-8'></img>
              <img src={ratingStar} alt="rating" className='size-8'></img>
              <img src={ratingStar} alt="rating" className='size-8'></img>
              <img src={ratingStar} alt="rating" className='size-8'></img>
              <h2 className="text-white text-3xl font-quicksand italic "> <div className=' w-20 text-center p-1 rounded-sm bg-slate-400'> 4/5</div>  </h2>
            </div>
            <p className='text-white w-[80%] '>
              Phim Doona! (2023) là tác phẩm đánh dấu sự trở lại của Suzy sau thành công vang dội từ bộ phim đình đám Anna.
              So với hình ảnh trưởng thành, trầm buồn ở Anna, lần này Suzy xuất hiện với giao diện tươi trẻ, xinh đẹp hơn hẳn.
              Một sinh viên đại học xoay xở với cuộc sống và trường
              học trong khi ứng phó với tình cảnh dở khóc dở cười có một không hai: sống cùng một cựu thần tượng K-pop xinh đẹp.
            </p>
            <p className='text-orange-300 w-[50%] '> Diễn viên chính: <h5 className='text-white w-[50%] '> <a href='https://en.wikipedia.org/wiki/Bae_Suzy'> Suzy </a>,<a href='https://en.wikipedia.org/wiki/Yang_Se-jong'> Yang Se Jong </a>, <a href='https://en.wikipedia.org/wiki/Ha_Young_(actress)'>Ha Young</a> </h5> </p>
            <div className='flex items-center space-x-4'>
              <button className='p-3 bg-black text-white font-quicksand font-bold text-sm rounded-lg hover:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out'>
                  Detail
              </button>

              <button className='p-3 bg-red-600 text-white font-quicksand  font-bold text-sm rounded-lg hover:bg-red-700 shadow-lg transition-all duration-300 ease-in-out'>
                  Watch Movie
              </button>

            </div>
          </div>
        </div>
        
        {/* group để chứa poster và button play, khi group hover thì hiện button play */}
        <div className="w-[400px] h-[600px] ml-14 relative group cursor-pointer">  
            <div className='w-full h-full object-cover '>
                <img  src={poster} alt='poster'></img>
           </div>
           
           <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300'>
                <img className='w-[70px] h-[70px]' src={playButton} alt='button'></img>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Banner