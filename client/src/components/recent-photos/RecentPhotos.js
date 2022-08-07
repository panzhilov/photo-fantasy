import './recent-photos.css'
import photo from '../photo-landcape/images/photo.jpg'

export const RecentPhotos = () => {
    return(
        <section className="recent-photos">
        <h3 className="recent-photos__text">Recent photos</h3>
        <div className="image-grid">
            <img className="image-grid-col-2 image-grid-row-2" src={photo} alt=""/>
            <img src={photo} alt=""/>
            <img src={photo} alt=""/>
            <img src={photo} alt=""/>
            <img src={photo} alt=""/>
        </div>
        <div className="recent-photos-btn">
            <button id="recent-photos__view-all">View all photos</button>
        </div>
    </section>
    );
}