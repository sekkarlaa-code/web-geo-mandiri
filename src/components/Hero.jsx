import React from 'react'
import heroImg from '../assets/hero.png'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Tulisan dikiri */}
          <div className="col-lg-6">
            <p className="section-subtitle">
              PELATIHAN & SERTIFIKASI K3
            </p>
            <h1 className="hero-title">
              Pelatihan K3 Profesional Geo Mandiri Kreasi
            </h1>
            <div className="yellow-line"></div>
            <p className="hero-text">
              Geo Mandiri Kreasi menyediakan pelatihan dan sertifikasi
              K3 resmi Kemnaker dan BNSP dengan sistem pembelajaran
              modern, profesional, serta fleksibel untuk kebutuhan
              perusahaan maupun individu.
            </p>
            <a href="#program" className="hero-btn">
              Lihat Program
            </a>
          </div>

          {/* gambarnyh dikanan */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="hero-image-wrapper">
              <div className="hero-yellow-bg"></div>
              <img
                src={heroImg}
                alt="Pelatihan K3"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero