import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const apikey = import.meta.env.VITE_API_KEY;
    const endpoint = import.meta.env.VITE_ENDPOINT;

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [tvs, setTvs] = useState([]);

    const HandleSubmit = (e) => {
        e.preventDefault();

        
        if (!query) return;

        Promise.all([
            axios.get(`${endpoint}movie?api_key=${apikey}&query=${query}`),
            axios.get(`${endpoint}tv?api_key=${apikey}&query=${query}`) 
        ])
            .then(([moviesRes, tvsRes]) => {
                setMovies(moviesRes.data.results);
                setTvs(tvsRes.data.results);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
       
        if (query) {
            console.log("Chiamata API per film e serie TV con query:", query);
        }
    }, [movies, tvs, query]);

    const value = {
        query,
        setQuery,
        HandleSubmit,
        movies,
        tvs,
    };

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
