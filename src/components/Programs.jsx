import { useState } from 'react'

function Programs() {
  const [active, setActive] = useState('umum')
  
  const categories = [
    { key: 'umum', label: 'K3 Umum', icon: 'bi-shield-fill-check' },
    { key: 'smk3', label: 'Sistem Manajemen K3 (SMK3)', icon: 'bi-file-earmark-check-fill' },
    { key: 'ergonomi', label: 'Ergonomi & Bahan Berbahaya', icon: 'bi-flask-fill' },
    { key: 'ketinggian', label: 'Pekerjaan Pada Ketinggian', icon: 'bi-building-up' },
    { key: 'kesehatan', label: 'Kesehatan Kerja', icon: 'bi-heart-pulse-fill' },
    { key: 'listrik', label: 'Listrik', icon: 'bi-lightning-charge-fill' },
    { key: 'elevator', label: 'Elevator & Eskalator', icon: 'bi-building-gear' },
    { key: 'kebakaran', label: 'Penanggulangan Kebakaran', icon: 'bi-fire' },
    { key: 'konstruksi', label: 'Konstruksi & Bangunan', icon: 'bi-buildings-fill' },
    { key: 'pesawatAngkat', label: 'Pesawat Angkat & Pesawat Angkut', icon: 'bi-truck-front-fill' },
    { key: 'pesawatTenaga', label: 'Pesawat Tenaga & Produksi', icon: 'bi-gear-wide-connected' },
    { key: 'pesawatUap', label: 'Pesawat Uap, Bejana Tekan & Tangki Timbun', icon: 'bi-speedometer2' },
    { key: 'pengelasan', label: 'Pengelasan', icon: 'bi-tools' }
  ]

  return (
    <section id="program" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">PROGRAM KAMI</span>
          <h2 className="section-title">Pilih Bidang Pelatihan</h2>
        </div>

        <div className="category-wrapper">
          {categories.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={active === item.key ? 'category-btn active-category' : 'category-btn'}
            >
              <div className="category-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>
              {item.label}
            </button>
          ))}
        </div>

        <div className="table-wrapper mt-5">
          <table className="table custom-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Pelatihan</th>
                <th>Biaya</th>
                <th>Durasi</th>
                <th>Instruktur</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {programsData[active]?.map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.nama}</td>
                  <td>{item.biaya}</td>
                  <td>{item.durasi}</td>
                  <td>{item.instruktur}</td>
                  <td>
                    <a
                      href="https://www.geomandiri.co.id/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn daftar-btn"
                    >
                      Daftar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Programs

// --- DATA PROGRAM ---
const programsData = {
  umum: [
    { no: 1, nama: 'Ahli K3 Umum', biaya: 'Rp 8.500.000', durasi: '12 Hari', instruktur: 'Kemnaker' }
  ],
  smk3: [
    { no: 1, nama: 'Auditor SMK3', biaya: 'Rp 8.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' }
  ],
  ergonomi: [
    { no: 1, nama: 'Ahli K3 Kimia', biaya: 'Rp 12.500.000', durasi: '12 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Petugas K3 Kimia', biaya: 'Rp 8.500.000', durasi: '6 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Ahli K3 Muda Lingkungan', biaya: 'Rp 12.000.000', durasi: '7 Hari', instruktur: 'Kemnaker' },
    { no: 4, nama: 'Tehnisi Ruang Terbatas', biaya: 'Rp 8.500.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 5, nama: 'Petugas K3 Penyelamat', biaya: 'Rp 7.500.000', durasi: '3 Hari', instruktur: 'Kemnaker' },
    { no: 6, nama: 'Tehnisi K3 Deteksi Gas', biaya: 'Rp 7.500.000', durasi: '3 Hari', instruktur: 'Kemnaker' }
  ],
  ketinggian: [
    { no: 1, nama: 'Tenaga Kerja Bangunan Tingkat Tinggi 2', biaya: 'Rp 7.500.000', durasi: '3 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Tenaga Kerja Pada Ketinggian 1', biaya: 'Rp 9.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Tenaga Kerja Pada Ketinggian Tingkat 2', biaya: 'Rp 10.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' }
  ],
  kesehatan: [
    { no: 1, nama: 'Petugas P3K di Tempat Kerja', biaya: 'Rp 7.500.000', durasi: '3 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Hyperkes Untuk Paramedis', biaya: 'Rp 7.500.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Hyperkes Untuk Dokter', biaya: 'Rp 8.500.000', durasi: '6 Hari', instruktur: 'Kemnaker' },
    { no: 4, nama: 'K3 Rumah Sakit', biaya: 'Rp 6.500.000', durasi: '4 Hari', instruktur: 'Kemnaker' }
  ],
  listrik: [
    { no: 1, nama: 'Ahli K3 Listrik', biaya: 'Rp 20.500.000', durasi: '18 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Tehnisi Listrik', biaya: 'Rp 8.500.000', durasi: '7 Hari', instruktur: 'Kemnaker' }
  ],
  elevator: [
    { no: 1, nama: 'Ahli K3 Elevator & Eskalator', biaya: 'Rp 19.500.000', durasi: '12 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Tehnisi Elevator & Eskalator', biaya: 'Rp 8.500.000', durasi: '6 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Operator Elevator & Eskalator', biaya: 'Rp 8.500.000', durasi: '6 Hari', instruktur: 'Kemnaker' }
  ],
  kebakaran: [
    { no: 1, nama: 'Ahli K3 Spesialis Kebakaran Tingkat A', biaya: 'Rp 9.500.000', durasi: '7 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Petugas (Koordinator) Kebakaran Tingkat B', biaya: 'Rp 9.500.000', durasi: '7 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Petugas (Regu) Kebakaran Tingkat C', biaya: 'Rp 9.000.000', durasi: '6 Hari', instruktur: 'Kemnaker' },
    { no: 4, nama: 'Petugas (Peran) Kebakaran Tingkat D', biaya: 'Rp 6.000.000', durasi: '3 Hari', instruktur: 'Kemnaker' }
  ],
  konstruksi: [
    { no: 1, nama: 'Ahli K3 Madya Konstruksi', biaya: 'Rp 11.500.000', durasi: '9 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Ahli K3 Muda Konstruksi', biaya: 'Rp 9.000.000', durasi: '7 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Supervisi Perancah', biaya: 'Rp 8.500.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 4, nama: 'Tehnisi Perancah', biaya: 'Rp 7.500.000', durasi: '4 Hari', instruktur: 'Kemnaker' }
  ],
  pesawatAngkat: [
    { no: 1, nama: 'Ahli K3 Pesawat Angkat & Pesawat Angkut', biaya: 'Rp 34.000.000', durasi: '25 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Tehnisi Pesawat Angkat & Pesawat Angkut', biaya: 'Rp 12.100.000', durasi: '9 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Operator Overhead Crane Kelas I', biaya: 'Rp 7.500.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 4, nama: 'Operator Overhead Crane Kelas II', biaya: 'Rp 6.500.000', durasi: '4 Hari', instruktur: 'Kemnaker' },
    { no: 5, nama: 'Operator Overhead Crane Kelas III', biaya: 'Rp 5.500.000', durasi: '3 Hari', instruktur: 'Kemnaker' },
    { no: 6, nama: 'Operator Forklift Kelas I', biaya: 'Rp 6.500.000', durasi: '4 Hari', instruktur: 'Kemnaker' },
    { no: 7, nama: 'Operator Forklift Kelas II', biaya: 'Rp 5.500.000', durasi: '3 Hari', instruktur: 'Kemnaker' },
    { no: 8, nama: 'Operator Alat Berat', biaya: 'Rp 7.000.000', durasi: '4 Hari', instruktur: 'Kemnaker' },
    { no: 9, nama: 'juru Ikat (Ringger), Pita Transport (Conveyor)', biaya: 'Rp 5.500.000', durasi: '3 Hari', instruktur: 'Kemnaker' },
    { no: 10, nama: 'Operator Gondola', biaya: 'Rp 6.500.000', durasi: '3 Hari', instruktur: 'Kemnaker' }
  ],
  pesawatTenaga: [
    { no: 1, nama: 'Ahli K3 Pesawat Tenaga & Produksi', biaya: 'Rp 33.500.000', durasi: '25 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Tehnisi Pesawat Tenaga & Produksi', biaya: 'Rp 12.000.000', durasi: '9 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Operator Penggerak Mula (Motor Diesel, Turbin)', biaya: 'Rp 7.000.000', durasi: '4 Hari', instruktur: 'Kemnaker' },
    { no: 4, nama: 'Operator Mesin Produksi & Perkakas Kelas I', biaya: 'Rp 8.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 5, nama: 'Operator Mesin Produksi & Perkakas Kelas II', biaya: 'Rp 7.000.000', durasi: '4 Hari', instruktur: 'Kemnaker' },
    { no: 6, nama: 'Operator Tanur Kelas I', biaya: 'Rp 8.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 7, nama: 'Operator Tanur Kelas II', biaya: 'Rp 7.000.000', durasi: '4 Hari', instruktur: 'Kemnaker' }
  ],
  pesawatUap: [
    { no: 1, nama: 'Ahli K3 Pesawat Uap Bejana & Tekan', biaya: 'Rp 33.500.000', durasi: '25 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Tehnisi Pesawat Uap', biaya: 'Rp 12.000.000', durasi: '9 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Tehnisi Tangki Timbun & Bejana Tekan', biaya: 'Rp 12.000.000', durasi: '9 Hari', instruktur: 'Kemnaker' },
    { no: 4, nama: 'Operator Boiler Kelas I', biaya: 'Rp 9.000.000', durasi: '6 Hari', instruktur: 'Kemnaker' },
    { no: 5, nama: 'Operator Boiler Kelas II', biaya: 'Rp 7.000.000', durasi: '4 Hari', instruktur: 'Kemnaker' }
  ],
  pengelasan: [
    { no: 1, nama: 'Juru Las GTAW/GWAM Kelas I', biaya: 'Rp 30.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 2, nama: 'Juru Las GTAW/GWAM Kelas II', biaya: 'Rp 25.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 3, nama: 'Juru Las GTAW/GWAM Kelas III', biaya: 'Rp 24.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 4, nama: 'Juru Las Listrik / SMAW Kelas I', biaya: 'Rp 25.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 5, nama: 'Juru Las Listrik / SMAW Kelas II', biaya: 'Rp 24.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 6, nama: 'Juru Las Listrik / SMAW Kelas III', biaya: 'Rp 23.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 7, nama: 'Juru Las Kombinasi GMAW / SMAW Kelas I', biaya: 'Rp 27.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 8, nama: 'Juru Las Kombinasi GMAW / SMAW Kelas II', biaya: 'Rp 26.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' },
    { no: 9, nama: 'Juru Las Kombinasi GMAW / SMAW Kelas III', biaya: 'Rp 25.000.000', durasi: '5 Hari', instruktur: 'Kemnaker' }
  ]
}