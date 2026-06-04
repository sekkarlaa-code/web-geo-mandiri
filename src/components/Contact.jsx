import React from 'react'

function Contact() {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">
            CONTACT
          </p>
          <h2 className="section-title">
            Hubungi Kami
          </h2>
          <div className="yellow-line mx-auto"></div>
        </div>

        {/* CONTACT */}

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="contact-card">
              <i className="bi bi-telephone-fill"></i>
              <h5>Telepon</h5>
              <p>(021)-862-1510</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <i className="bi bi-whatsapp"></i>
              <h5>WhatsApp</h5>
              <p>+62 813-1581-6277</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <i className="bi bi-envelope-fill"></i>
              <h5>Email</h5>
              <p>info@geomandiri.co.id</p>
            </div>
          </div>
        </div>

        {/* JAM OPERASIONAL */}

        <div className="operational-box">
          <div className="operational-icon">
            <i className="bi bi-clock-fill"></i>
          </div>
          <h4>Jam Operasional</h4>
          <div className="yellow-line mx-auto"></div>
          <p>Senin - Jumat : 08.00 - 17.00 WIB</p>
          <p>Sabtu & Minggu : Tutup</p>
          <a
            href="https://wa.me/6281315816277"
            target="_blank"
            rel="noreferrer"
            className="hero-btn mt-4"
          >
            Chat via WhatsApp
          </a>
        </div>

        {/* ALAMAT */}

        <div className="address-box">
          <i className="bi bi-geo-alt-fill"></i>
          <h4>Alamat Kantor</h4>
          <div className="yellow-line mx-auto"></div>
          <p>
            PT Geo Mandiri Kreasi
          </p>
          <p>
            JL. Raya Jatiwaringin, Rukan Kaca Hijau No. 6-C, Pangkalan Jati, RT.2/RW.13, Cipinang Melayu, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13620
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact