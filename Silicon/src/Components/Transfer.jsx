const Transfer = () => {

    return(
        <>
            <section className="transfer">
            <div className="container">
                
                <div className="transfer-wrapper">
                    <div className="transfer-content">
                        <h2 className="h1">Make your money transfer simple and clear</h2>
                        <ul className="transfer-list">
                            <li><i className="fa-regular fa-circle-check check"></i>Banking transactions are free for you</li>
                            <li><i className="fa-regular fa-circle-check check"></i>No monthly cash commission</li>
                            <li><i className="fa-regular fa-circle-check check"></i>Manage payments and transactions online</li>
                        </ul>
                        <button className="learn-more">Learn more<i class="fa-regular fa-arrow-right arrow"></i></button>
                    </div>
                    <div className="forecast-img">
                        <img src="/HTML-assignment/Assets/transfer-phone.svg" alt=""/>
                    </div>
                </div>

                <div className="bank-wrapper">
                    <div className="payment-wrapper">
                        <div className="contact-img">
                            <img src="/HTML-assignment/Assets/details-iphone.svg" alt="image with a card popping out, with contact details"/>
                        </div>
                        <div className="payment-details">
                            <h2>Receive payment from international bank details</h2>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="payment-card">
                            <img className="icon" src="/HTML-assignment/Assets/payments-logo.svg" alt="logo with creditcard"/>
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>
                        <div className="wallet-wrapper">
                            <img className="icon" src="/HTML-assignment/Assets/cashback-logo.svg" alt="wallet logo"/>
                            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                        <button className="learn-more">Learn more<i class="fa-regular fa-arrow-right arrow"></i></button>
                    </div> 

                </div>
                 
            </div>
        </section>
        </>
    )
}

export default Transfer