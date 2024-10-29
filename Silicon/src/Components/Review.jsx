const Review = () => {

    return(
        <>
            <section className="review">
            <div className="container">
                
                
                <h2>Clients are Loving Our App</h2>

                <div className="testimonials">

                    <div className="review-card1">
                        <img className="rating" src="/HTML-assignment/Assets/rating1.svg" alt=""/>
                        <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                        <div className="avatar-wrapper">
                            <img className="avatar" src="/HTML-assignment/Assets/designer.svg" alt=""/>
                            <p className="name">Fannie Summers</p>
                            <p className="job">Designer</p>
                        </div>
                    </div>
                    <div className="review-card2">
                        <img className="rating" src="/HTML-assignment/Assets/rating2.svg" alt=""/>
                        <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                        <div className="avatar-wrapper">
                            <img className="avatar" src="/HTML-assignment/Assets/developer.svg" alt=""/>
                            <p className="name">Albert Flores</p>    
                            <p className="job">Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Review