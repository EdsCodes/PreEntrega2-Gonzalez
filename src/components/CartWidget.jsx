import Cart3 from "../assets/images/cart3.svg"

const CarWidget = () => {
    return (
        <>
            <button type="button" className="btn btn-light text-dark botonCarrito">
                <a className="nav-link position-relative" href="#">
                    <img src={Cart3} alt="Imagen carrito"></img>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                </a>
            </button>
        </>
    );
};

export default CarWidget;
