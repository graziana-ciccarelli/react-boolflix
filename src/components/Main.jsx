import { useGlobalContext } from "../context/GlobalContext";
import Flag from "react-world-flags"; 

export function Main() {
    const { movies, tvs } = useGlobalContext();

    const imageBaseUrl = "https://image.tmdb.org/t/p/";

    const HandleStars = (vote) => {
        const stars = Math.min(Math.ceil(vote / 2), 5);

        const fullStars = Array(stars).fill(<i className="fas fa-star"></i>);
        const emptyStars = Array(5 - stars).fill(<i className="far fa-star"></i>);

        const starIcons = [...fullStars, ...emptyStars].map((icon, index) => (
            <span key={index}>{icon}</span>
        ));

        return <>{starIcons}</>;
    };

    const getImageUrl = (path, size = "w342") => {
        if (!path) return null;
        return `${imageBaseUrl}${size}${path}`;
    };

    const getFlag = (lang) => {
        return <Flag code={lang.toUpperCase()} alt={lang} width={20} height={15} />;
    };

    return (
        <main className="main-content">
            <h2>Film</h2>
            <div className="card-container">
                {movies && movies.length > 0 ? (
                    movies.map((elem) => (
                        <div className="card" key={elem.id}>
                            <img
                                src={getImageUrl(elem.poster_path)}
                                alt={elem.title}
                                className="card-img"
                            />
                            <div className="card-info">
                                <h3>{elem.title}</h3>
                                <p>{getFlag(elem.original_language)}</p> 
                                <div className="stars">{HandleStars(elem.vote_average)}</div>
                                <p>{elem.overview}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nessun film trovato.</p>
                )}
            </div>

            
            <hr className="section-divider" />

            <h2>Serie TV</h2>
            <div className="card-container">
                {tvs && tvs.length > 0 ? (
                    tvs.map((elem) => (
                        <div className="card" key={elem.id}>
                            <img
                                src={getImageUrl(elem.poster_path)}
                                alt={elem.name}
                                className="card-img"
                            />
                            <div className="card-info">
                                <h3>{elem.name}</h3>
                                <p>{getFlag(elem.original_language)}</p> 
                                <div className="stars">{HandleStars(elem.vote_average)}</div>
                                <p>{elem.overview}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nessuna serie TV trovata.</p>
                )}
            </div>
        </main>
    );
}
