
const Header = () => {
    return (
        <div className="p-4 flex items-center justify-between bg-slate-900 space-y-5"> 
            <div className="flex items-center space-x-4">
                <h1 className="text-2xl text-red-600 uppercase font-bold font-serif">Phimhay</h1>
                <nav className="text-white flex items-center space-x-4"> 
                    <a href="#"> Home </a>
                    <a href="#"> About </a>
                    <a href="#"> Contact Us </a>
                </nav>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Search movie" className="text-black"></input>
                </div>
            </div>
        </div>
      )
    }
export default Header
