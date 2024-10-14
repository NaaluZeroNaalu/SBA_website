import Displayvideo from "./video"

function Contactus(){


    return(
        <>
        <Displayvideo />

        <section className="contact_us">
           <div className="inputs">
           <form>
    <div class="container mt-5">
        <h2 class=" mb-4" style={{color:"white"}}>Contact Us</h2>
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Full Name" name="fullname" required />
                </div>
                <div class="mb-3">
                    <input type="tel" class="form-control" placeholder="Phone Number" name="phonenumber" required />
                </div>
                <div class="mb-3">
                    <label for="comment" class="form-label">Query</label>
                    <textarea class="form-control" rows="5" id="comment" name="text" required></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Email Address" name="email" required />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Company Name" name="companyname" required />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Support Required on" name="support" required />
                </div>
                <p class="text-light">Write us at: <a href="mailto:sales@sbainfo.in" style={{color:"white",textDecoration:"none"}}>sales@sbainfo.in</a></p>
            </div>
        </div>
        <div class="text-center d-grid">
            <button type="submit" class="btn btn-dark">Submit</button>
        </div>
    </div>
</form>

           </div>
        </section>
        </>
    )
}

export default Contactus