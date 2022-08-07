import  photo  from "./images/photo.jpg"
import './photo-landcape.css'

export const PhotoLandscape = () => {
    return(
        <section className="photo-landscape">
        <img src={photo} alt="photoImg" className="photo"/>
        <div className="photo-landscape__desc">
            <p className="photo-landscape__desc__text">Show photos and make new friends</p>
            <button type="submit" className="photo-landscape__desc__btn"> Upload new photos</button>
        </div>
    </section>
    );
}