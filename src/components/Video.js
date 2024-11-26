function Video() {
    return(
        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="" title="Example website" id="video" allowFullScreen allowscriptaccess="always"
                  allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Video;