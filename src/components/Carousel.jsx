import CelularesImage from '../assets/images/Celulares.png'
import TabletsPcsImage from '../assets/images/Tablets-pcs.png'
import AudifonosImage from '../assets/images/Audifonos.png'
import SmartwatchesImage from '../assets/images/Smartwatches.png'
import AccesoriosImage from '../assets/images/Otros_Accesorios.png'
import BannerImgs from './BannerImgs'


const Carousel = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={CelularesImage} className="d-block mx-auto w-100" alt="Celulares"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Celulares</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={TabletsPcsImage} className="d-block mx-auto w-100" alt="Tablets & pcs"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Tablets & Pc's</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={AudifonosImage} className="d-block mx-auto w-100" alt="Audifonos"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Audifonos</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={SmartwatchesImage} className="d-block mx-auto w-100" alt="Smartwatches"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Smartwatches</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={AccesoriosImage} className="d-block mx-auto w-100" alt="Otros Accesorios"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Otros gadgets y accesorios</h5>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
                <div className="col">
                    <BannerImgs />
                </div>
        </div>
    )
}

export default Carousel;