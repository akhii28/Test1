import {Link} from "react-router-dom";

export function Nav() {
    return (
        <nav class="navbar my-5 mx-3">
            <Link to="/" class="navbar-brand">Ethnus</Link>
            <div class="nav">
                <Link to="/home" class="nav-link">Home</Link>
                <Link to="/about" class="nav-link">About</Link>
                <Link to="/blog" class="nav-link">Blog</Link>
                <Link to="/contact" class="nav-link">Contact</Link>
            </div>
        </nav>
    )
}