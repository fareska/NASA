import {  Link } from 'react-router-dom'

export default function NavBarLinks() {
    return (
        <div>
            <Link to='/home'> <p>Home</p></Link>
            <Link to='/search'> <p>Search</p></Link>
            <Link to='/favorites'> <p>Favorites</p></Link>
        </div>
    )
}
