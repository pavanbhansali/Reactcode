import { AppBar, Toolbar } from "@material-ui/core"
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Link style = {{'color': 'white'}} to="/persons">Persons</Link>
                    <Link style = {{'color': 'white'}} to="/cockpit">Cockpit</Link>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;