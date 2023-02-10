

function Header(){

    return(
        <section id="header">
        <div class="grid grid-cols-2 gap-28">
            
            <div>
                <div class="grid-cols-3">
                    <div class="heading">  <h4>An inspiring design delivered to your inbox every morning</h4></div>
             <div class="paragraph">Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</div>
               <div class="subhead">    <h5>Show me how it looks</h5></div>
              
        
                <div> <input class="input" type="email" name="email" placeholder="Your email address"/>
        
                 
                    <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button
                      </button></div>
                      <div class="free">  <h6>Free - No Spam - No Data Sharing</h6></div>
               
              
            </div>
            </div>
            <div>
                <img src="https://www.shutterstock.com/image-photo/jakarta-december-1-2022-tom-260nw-2233336333.jpg" />
            </div>
           
        </div>
            </section>
    )
}
export default Header