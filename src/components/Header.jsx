import '@fortawesome/fontawesome-free/css/all.min.css';
const Header = () => {
    return (
        <div className="p-4 flex items-center justify-between bg-slate-900 "> 
            <div className="flex items-center space-x-10">
                <h1 className="text-2xl text-red-600 uppercase font-bold font-serif">Phimhay</h1>
                <nav className="text-white flex items-center space-x-4 font-mono "> 
                    <a className="hover:text-fuchsia-700 transition duration-300" href="#"> Home  </a> 
                    <a className="hover:text-fuchsia-700 transition duration-300" href="#"> About  </a> 
                    <a className="hover:text-fuchsia-700 transition duration-300" href="#"> Contact Us  </a> 
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Search movie" className="text-black p-2"></input>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:text-gray-800 transition duration-300">Search</button>
                </div>
        </div>
      )
    }
export default Header
