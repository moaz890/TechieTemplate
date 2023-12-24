import "../../css/style.css"

export default function Contact () {

    return (
        <div className="contact" id="contact">
            <div className="container aos-init" data-aos="fade-up">
                <div className="row text-center">
                    <h1 className="display-3">Contact</h1>
                    <div className="header-line"></div>
                    <p className="lead">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row text-center contact--content">
                    <div className="col-lg-6 mb-3 ">
                        <div className="contact--info shadow">
                            <i className="fas fa-location-dot"></i>
                            <h3 className="display-3">Our Address</h3>
                            <p >A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 mb-3 ">
                                <div className="contact--info shadow">
                                    <i className="fa-regular fa-envelope"></i>
                                    <h3 className="display-3">Our Address</h3>
                                    <p >A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mb-3 ">
                                <div className="contact--info shadow">
                                    <i className="fa-solid fa-phone-volume"></i>
                                    <h3 className="display-3">Our Address</h3>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-stretch">
                    <div className="col-md-6">
                        <div className="contact--image shadow"></div>
                    </div>
                    <div className="col-md-6">
                        <div className="form w-100 shadow">
                            <form action="#" className="row">
                                <div className="col-lg-6 mb-3"><input type="text" placeholder="First Name" id="inputFirstName" className="form-control form-control-lg"></input></div>
                                <div className="col-lg-6 mb-3"><input type="text" placeholder="Last Name" id="inputLasttName" className="form-control form-control-lg"></input></div>
                                <div className="col-lg-12 mb-3"><input type="text" placeholder="email Address" id="inputEmail" className="form-control form-control-lg"></input></div>
                                <div className="col-lg-12 mb-3">
                                    <textarea name="message" id="message" rows="8" className="shadow form-control form-control-lg" placeholder="Message">

                                    </textarea>
                                </div>
                                <div className="text-center mt-1 ">
                                    <button type="button" className="btn btn-primary px-5">
                                        Submit 
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}