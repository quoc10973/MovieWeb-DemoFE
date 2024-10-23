import '@fortawesome/fontawesome-free/css/all.min.css';
const Header = () => {
    return (
        <div className="p-3 flex items-center justify-between bg-slate-900 bg-gradient-to-r from-slate-900 to to-gray-800 pl-14">

            <div className="flex items-center space-x-4">

                <h1 className="text-3xl text-red-600 uppercase font-bold font-serif">Phimhay</h1>

                <nav className="text-white text-sm flex items-center space-x-10 font-quicksand pl-12 ">
                    <a className="hover:text-fuchsia-700 transition duration-300" href="#"> Home  </a>
                    <a className="hover:text-fuchsia-700 transition duration-300" href="#"> About  </a>
                    <a className="hover:text-fuchsia-700 transition duration-300" href="#"> Contact Us  </a>
                    <a className="hover:text-fuchsia-700 transition duration-300" href="#"> Popular  </a>
                </nav>

            </div>

            <div className="flex items-center space-x-5 pr-7" >
                <input type="text" placeholder="Search movie" className="text-black p-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"></input> 
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:text-gray-800 transition duration-300">Search</button>
            </div>
        </div>
    )
}
export default Header
