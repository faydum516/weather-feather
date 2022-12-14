import './Header.css';

function Header({currentLocation, searchComponent}) {
    return (
        <header className={currentLocation ? "Header Header-Search" : "Header"}>
            <h2 className="HeaderTitle">Weather Feather</h2>
            {currentLocation && <div className="SearchHead">
                {searchComponent}
            </div>}
        </header>
    );
}

export default Header;