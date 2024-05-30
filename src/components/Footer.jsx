import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-center bg-body-tertiary">
                <div className="container pt-4">
                    <section className="mb-4">
                        <a
                            href="https://es-la.facebook.com/"
                            target='_blank'
                            rel="noopener noreferrer"
                            role="button"
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#3b5998' }}
                            aria-label="Facebook"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://twitter.com/"
                            target='_blank'
                            rel="noopener noreferrer"
                            role="button"
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#55acee' }}
                            aria-label="Twitter"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/watch?v=UEfFpk4sSxE"
                            target='_blank'
                            rel="noopener noreferrer"
                            role="button"
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#dd4b39' }}
                            aria-label="YouTube"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target='_blank'
                            rel="noopener noreferrer"
                            role="button"
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#ac2bac' }}
                            aria-label="Instagram"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.tiktok.com/explore?lang=es"
                            target='_blank'
                            rel="noopener noreferrer"
                            role="button"
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: '#000000' }}
                            aria-label="TikTok"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
                    © 2024 Copyright: 
                    <a className="text-body" href="https://github.com/EdsCodes/ProyectoFinal-Gonzalez" target='_blank'> John Edward Gonzalez</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
