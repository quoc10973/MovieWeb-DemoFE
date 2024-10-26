import { createContext, useState } from "react";
import Modal from 'react-modal';
import YouTube from 'react-youtube';
const MovieContext = createContext();
const customStyles = {
    overlay: {
        position: 'fixed',
        zIndex: 9999,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
const MovieProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [trailerKey, setTrailerKey] = useState('');

    const handleTrailer = async (id) => {
        setTrailerKey(''); // Reset trailer key when modal is new opened;
       try {
         const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
         const options = {
           method: 'GET',
           headers: {
             accept: 'application/json',
             Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
           }
         };
   
         const movieKey = await fetch(url, options);
         const data = await movieKey.json();
         setTrailerKey(data.results[0].key);
         setModalIsOpen(true);
         console.log(data);
         
       } catch (error) {
         setModalIsOpen(false);
         console.log(error);
       }
     }
     return (
         <MovieContext.Provider value={handleTrailer}>
            {children}
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} />
      </Modal>
         </MovieContext.Provider>
     )
}

export { MovieProvider, MovieContext }