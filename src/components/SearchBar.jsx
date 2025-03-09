import { useGlobalContext } from "../context/GlobalContext";

export function SearchBar() {
    const { setQuery, HandleSubmit } = useGlobalContext();

    return (
        <form onSubmit={e => HandleSubmit(e)} className="search-bar">
            <input
                type="text"
                placeholder="Cerca film o serie TV..."
                onChange={e => setQuery(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">Cerca</button>
        </form>
    );
}
