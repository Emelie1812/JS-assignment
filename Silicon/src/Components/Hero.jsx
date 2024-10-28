const Hero = () => {

    return(
        <>   
        <section aria-label="hero" className="hero">
            <div className="container space-y-3">
                
                <div className="content space-y-3">
                               
                    <div className="content-wrapper">
                        <h1 className="d4">Manage All Your Money in One App</h1>
                        <p className="text-lg">We offer you a new generation of mobile banking. <br/>Save, spend & manage money in your pocket.</p>
                    
                        <div className="download-btn">
                            <a className="store-btn" href="#">
                                <img src="/HTML-assignment/Assets/appstore.svg" alt="App Store icon."/>
                            </a>
                            <a className="store-btn" href="#">
                                <img src="/HTML-assignment/Assets/googleplay.svg" alt="Google Play icon."/>
                            </a>
                        </div>
                    
                        <div className="more">
                            <a href="#features" className="discover-more discover-btn">
                                <i className="fa-solid fa-chevron-down"></i>
                            </a>
                            <span>Discover more</span>
                        </div>
                    </div>
                    
                    <div className="img-wrapper">
                        <div className="hero-img">
                            <img src="/HTML-assignment/Assets/iphone-hero.svg" alt="Two Iphones with charts and creditcard on the screen."/>
                        </div>
                    </div>


                    
                </div>
            </div>    
        </section>    
        </>
    )
}

export default Hero