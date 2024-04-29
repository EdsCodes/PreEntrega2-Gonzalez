import ImagenPc from '../assets/images/electronicDevices.webp'

const BannerImgs = () => {
    return(
        <div className="container-fluid divBanner">
            <div className="row d-block mx-auto w-50">
                <img src={ImagenPc}/>
            </div>
            <div className="row text-align-center">
                <h1 className="Titulobanner">Tienda de Tecnología Online</h1>            
                <h3 className="SubTituloBanner">Una gran selección de productos</h3>
                <ul className="liBanner">
                    <li>No tienes que buscar más. Tenemos los mejores productos de las mejores marcas.</li>
                    <li>Ver las disponibilidades en vivo y comprar online.</li>
                    <li>Todos los productos vienen con garantía válida en Colombia.</li>
                </ul>
            </div>
        </div>
    )
}

export default BannerImgs