const Navbar = () => {

    return(
        <>
            <nav id="main-menu" className="navbar">   
                <div className="container">
                    <a  id="logo" href="index.html">
                        <img src="/Assets/silicon-logo.svg" alt="silicon logo"/>
                    </a>     
                       
                            <a className="nav-link" href="#">Features</a>
                        
                        <div id="darkmode-toggle" className="btn-toggle-switch">
                            <p>Dark Mode</p>
                            <div className="toggle-switch">
                                <input type="checkbox" id="darkmode-switch" className="toggle-input"/>
                                <label for="darkmode-switch" className="slider"></label>
                            </div>
                        </div>
                
                            <a id="signin" href="#" className="btn btn-primary">
                                <i class="fa-regular fa-user"></i>
                                <span>Sign in / up</span>
                            </a>
                        </div>
                
                    
                
            </nav>
        </>
    )
}

export default Navbar