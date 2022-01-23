import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/whitePaper">White Paper</NavLink>
            </nav>
        </header>
    )
}

export default Navbar
