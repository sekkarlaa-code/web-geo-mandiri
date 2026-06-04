import React from 'react'

import LogoBMJ from '../assets/mitra/bmj.png'
import LogoBTCocoa from '../assets/mitra/btcocoa.png'
import LogoHenkel from '../assets/mitra/henkel.png'
import LogoJasaMarga from '../assets/mitra/jasamarga.png'
import LogoK3Selamat from '../assets/mitra/k3selamat.png'
import LogoRAPP from '../assets/mitra/rapp.png'
import LogoSIML from '../assets/mitra/siml.png'
import LogoSinarMas from '../assets/mitra/sinarmas.png'

function Mitra() {
    const logos = [
        { src: LogoBMJ, alt: 'BMJ' },
        { src: LogoBTCocoa, alt: 'BT Cocoa' },
        { src: LogoHenkel, alt: 'Henkel' },
        { src: LogoJasaMarga, alt: 'Jasa Marga' },
        { src: LogoK3Selamat, alt: 'K3 Selamat' },
        { src: LogoRAPP, alt: 'RAPP' },
        { src: LogoSIML, alt: 'SIML' },
        { src: LogoSinarMas, alt: 'Sinar Mas' }
    ]

    return (
        <section id="mitra" className="section-padding mitra-section" style={{ background: 'transparent' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-subtitle">MITRA GMK</span>
                    <h2 className="section-title" style={{ fontSize: '36px' }}>Dipercaya oleh Perusahaan Terkemuka</h2>
                    <p style={{ color: '#64748b', fontSize: '16px', marginTop: '10px', maxWidth: '600px', margin: '10px auto 0' }}>
                        Perusahaan yang telah bekerja sama dengan kami dalam bidang Kesehatan & Keselamatan Kerja (K3).
                    </p>
                    <div className="yellow-line" style={{ margin: '20px auto 0' }}></div>
                </div>
            
                <div className="mitra-box-card">
                    <div className="row g-4 justify-content-center align-items-center text-center">
                        {logos.map((logo, index) => (
                            <div key={index} className="col-6 col-sm-4 col-md-3 col-xl-auto d-flex justify-content-center px-4">
                                <div className="mitra-logo-box">
                                    <img
                                        src={logo.src}
                                        alt={`Mitra ${logo.alt}`}
                                        className="img-fluid mitra-logo"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Mitra