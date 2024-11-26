function Thumbnail({ video }) {
    return (
        <img src={video.thumbnailUrl} alt={video.title} />
    );
}

export default Thumbnail;