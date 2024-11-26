function Contact() {
    return(
        <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-youtube"></i></a>
          <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    )
}

export default Contact;