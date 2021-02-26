import { Link } from 'react-router-dom'
import '../styles/navBarLinks.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Search from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Home from '@material-ui/icons/Home';

export default function NavBarLinks() {
    return (
  
        <div>

                <Link to='/home'>
                    <Tab icon={<Home />} label="HOME" />
                </Link>
                <Link to='/search'>
                    <Tab icon={<Search />} label="SEARCH" />
                </Link>
                <Link to='/favorites'>
                    <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                </Link>
        </div>
    )
}
