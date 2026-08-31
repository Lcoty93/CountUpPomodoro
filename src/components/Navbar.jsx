import logo from "../assets/clock.png"

function Navbar() {
    return(<nav className="navbar">
        <img src={logo} alt="Clock" className="logo"/>
        <p>Count UP Pomodoro Timer</p>
    </nav>)
}

export default Navbar;