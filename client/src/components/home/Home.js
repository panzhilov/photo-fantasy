
import './home.css';
import photo from './images/photo.jpg'
export const Home = () => {
  return (
    <>
      <section className="photo-landscape">
        <img src={photo} alt="photoImg" className="photo" />
        <div className="photo-landscape__desc">
          <p className="photo-landscape__desc__text">
            Show photos and make new friends
          </p>
          <button type="submit" className="photo-landscape__desc__btn">
            {" "}
            Upload new photos
          </button>
        </div>
      </section>

      <section className="recent-photos">
        <h3 className="recent-photos__text">Recent photos</h3>
        <div className="image-grid">
          <img
            className="image-grid-col-2 image-grid-row-2"
            src={photo}
            alt=""
          />
          <img src={photo} alt="" />
          <img src={photo} alt="" />
          <img src={photo} alt="" />
          <img src={photo} alt="" />
        </div>
        <div className="recent-photos-btn">
          <button id="recent-photos__view-all">View all photos</button>
        </div>
      </section>
    </>
  );
};
