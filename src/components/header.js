

function Header(){

    return(
    <section id="header">

    <div class="row">
        
        <div class="col-lg-6">
            <div class="container">
            <h4>An inspiring design delivered to your inbox every morning</h4>
            <p>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>
            <h5>Show me how it looks</h5>
            <input class="input" type="email" name="email" placeholder="Your email address" />
            <button type="button" class="btn btn-dark ">Dark</button>
            <h6>Free - No Spam - No Data Sharing</h6>
        </div>
        </div>
        <div class="col-lg-6">
            <img src="https://www.shutterstock.com/image-illustration/cute-caroon-fox-cook-hat-260nw-1965347353.jpg"/>
        </div>
       
    </div>
        </section>
    )
}
export default Header