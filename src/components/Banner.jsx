
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
</style>
import ratingStar from '../assets/rating.png';

const Banner = () => {
  return (
    <div className="w-full h-[650px] bg-banner bg-center bg-no-repeat bg-cover relative">
        <div className="absolute w-full h-full bg-black top-0 left-0 opacity-30" /> 
        <div className="w-full h-full flex items-center justify-center space-x-[40px] p-10 relative z-20">
            <div className="flex flex-col space-y-5 items-baseline" >
               <p className="bg-gradient-to-r text-lg from-red-800 to-neutral-400 px-3 py-2 text-white " >
                    Nexflix Show
               </p>
               <div className="flex flex-col space-y-4">
                  <h2 className="text-white text-3xl font-quicksand italic "> Doona! </h2>
                  <div className='flex items-center space-x-2'>
                    <img src={ratingStar} alt="rating" className='size-8'></img>
                    <img src={ratingStar} alt="rating" className='size-8'></img>
                    <img src={ratingStar} alt="rating" className='size-8'></img>
                    <img src={ratingStar} alt="rating" className='size-8'></img>
                    <h2 className="text-white text-3xl font-quicksand italic "> <div className=' w-20 text-center p-1 rounded-sm bg-slate-400'> 4/5</div>  </h2>
                  </div>
                    <p className='text-white w-[50%] '>
                      Phim Doona! (2023) là tác phẩm đánh dấu sự trở lại của Suzy sau thành công vang dội từ bộ phim đình đám Anna. 
                      So với hình ảnh trưởng thành, trầm buồn ở Anna, lần này Suzy xuất hiện với giao diện tươi trẻ, xinh đẹp hơn hẳn.
                      Một sinh viên đại học xoay xở với cuộc sống và trường 
                      học trong khi ứng phó với tình cảnh dở khóc dở cười có một không hai: sống cùng một cựu thần tượng K-pop xinh đẹp.
                    </p>
                    <p className='text-orange-300 w-[50%] '> Diễn viên chính: <h5 className='text-white w-[50%] '> <a href='https://en.wikipedia.org/wiki/Bae_Suzy'> Suzy </a>,<a href='https://en.wikipedia.org/wiki/Yang_Se-jong'> Yang Se Jong </a>, <a href='https://en.wikipedia.org/wiki/Ha_Young_(actress)'>Ha Young</a> </h5> </p>
               </div>
            </div>
            <div> Banner </div>
        </div>
    </div>
  )
}

export default Banner