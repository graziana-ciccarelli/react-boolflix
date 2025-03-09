import { SearchBar } from "./SearchBar";

export function Header() {
    return (
        <header className="header">
            <h1 className="logo">BOOLFLIX</h1>
            <SearchBar />
        </header>
    );
}
