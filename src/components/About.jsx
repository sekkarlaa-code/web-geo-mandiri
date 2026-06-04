import React from 'react'

function About() {
  const reasons = [
    {
      icon: 'bi-building',
      title: 'PJK3 Resmi Kemnaker',
      text: 'PT Geo Mandiri Kreasi merupakan PJK3 resmi yang terdaftar di Kemnaker dan memiliki legalitas lengkap untuk menyelenggarakan pelatihan K3 bersertifikat.'
    },
    {
      icon: 'bi-patch-check',
      title: 'TUK BNSP Terakreditasi',
      text: 'Geo Mandiri telah terdaftar sebagai Tempat Uji Kompetensi (TUK) untuk pelatihan dan sertifikasi K3 berbasis BNSP.'
    },
    {
      icon: 'bi-people',
      title: 'Berpengalaman & Terpercaya',
      text: 'Berpengalaman melayani kebutuhan pelatihan K3 di seluruh Indonesia dan dipercaya oleh berbagai perusahaan nasional maupun multinasional.'
    },
    {
      icon: 'bi-laptop',
      title: 'Pelatihan K3 Fleksibel',
      text: 'Menyediakan pelatihan K3 online dan blended learning yang telah mendapat izin resmi dari Kemnaker dan LSP.'
    }
  ]

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="text-center">
          <p className="section-subtitle">
            TENTANG KAMI
          </p>
          <h2 className="section-title">
            Mengenal Geo Mandiri Kreasi
          </h2>
          <div className="yellow-line mx-auto"></div>
          <p className="about-description">
            Kami PT. GEO MANDIRI KREASI Management Consultant, Training Centre & Event Management yang terdiri dari gabungan intelektual yang professional pada disiplin masing-masing, akan sanggup memberikan jasa pelayanan konsultansi secara professional, objektif dalam lingkup pelayanan jasa konsultansi.
          </p>
        </div>

        {/* STATISTIK */}

        <div className="stats-section">
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <h2>13</h2>
                <p>Bidang Pelatihan</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <h2>59</h2>
                <p>Program Tersedia</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-card large-text">
                <h2>Online & Offline</h2>
                <p>Metode Pelatihan</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-card large-text">
                <h2>Indonesia</h2>
                <p>Jangkauan Pelatihan</p>
              </div>
            </div>

          </div>
        </div>

        {/* KEUNGGULAN */}

        <div className="why-section-title">
          <p className="section-subtitle">
            KEUNGGULAN KAMI
          </p>
          <h2>
            Mengapa Memilih Geo Mandiri Kreasi?
          </h2>
          <div className="yellow-line mx-auto"></div>
        </div>

        <div className="row g-4">
          {reasons.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="reason-card">
                <div className="reason-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h4>
                  {item.title}
                </h4>
                <div className="reason-line"></div>
                <p>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About