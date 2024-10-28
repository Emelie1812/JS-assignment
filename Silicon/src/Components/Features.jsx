const Features = () => {

    return(
        <>
            <section aria-label="App Features" id="features">
            <div className="container">   
                
                    <div className="iphone-features">
                        <img className="iphone-transactions" src="/HTML-assignment/Assets/iphone-features.svg" alt="iphone 12 pro with transaction details"/>
                    </div>
                
                
                    <div className="features-content space-y-2">
                        <h2 className="h1">App Features</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                    

                        <div className="feature-grid">  

                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/HTML-assignment/Assets/payments-logo.svg" alt="card logo"/>               
                                </div>        
                                <div className="space-y-1">
                                    <h3>Easy Payments</h3>
                                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                                </div>                       
                            </div>


                            <div className="feature-card">
                                <div className="icon-container">       
                                    <img src="/HTML-assignment/Assets/security-logo.svg" alt="shield logo"/>
                                </div>    
                                <div className="space-y-1">
                                    <h3>Data Security</h3>
                                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                                </div>   
                            </div>

                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/HTML-assignment/Assets/statistics-logo.svg" alt="cost statistics logo"/>
                                </div>
                                <div className="space-y-1">
                                    <h3>Cost Statistics</h3>
                                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                                </div>
                            </div>


                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/HTML-assignment/Assets/support-logo.svg" alt="support logo"/>
                                </div>
                                <div className="space-y-1">
                                    <h3>Support 24/7</h3>
                                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                                </div>
                            </div>


                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/HTML-assignment/Assets/cashback-logo.svg" alt="wallet logo"/>
                                </div>
                                <div className="space-y-1">
                                    <h3>Regular Cashback</h3>
                                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                                </div>
                            </div>


                            <div className="feature-card">
                                <div className="icon-container">
                                    <img src="/HTML-assignment/Assets/standards-logo.svg" alt="happy logo"/>
                                </div>
                                <div className="space-y-1">
                                    <h3>Top Standards</h3>
                                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                                </div>
                            </div>
                    
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}

export default Features