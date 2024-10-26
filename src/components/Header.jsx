import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="p-3 flex flex-col md:flex-row items-center justify-between bg-slate-900 bg-gradient-to-r from-slate-900 to-gray-800 pl-4 md:pl-14">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <h1 className="text-2xl md:text-3xl text-red-600 uppercase font-bold font-serif">Phimhay</h1>
        <nav className="text-white text-sm flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 font-quicksand pl-0 md:pl-12">
          <a className="hover:text-fuchsia-700 transition duration-300" href="#">Home</a>
          <a className="hover:text-fuchsia-700 transition duration-300" href="#">About</a>
          <a className="hover:text-fuchsia-700 transition duration-300" href="#">Contact Us</a>
          <a className="hover:text-fuchsia-700 transition duration-300" href="#">Popular</a>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 pr-0 md:pr-7 mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search movie"
          className="text-black p-2 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:text-gray-800 transition duration-300"
          onClick={() => onSearch(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;