import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f5f6fc] font-sans text-[#2e2e2e]">
      {/* Header */}
      <header className="bg-[#0a2377] text-white py-4 px-8">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Logo Kemenhub" 
              width={50} 
              height={50}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold tracking-wide">KEMENTERIAN PERHUBUNGAN</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="text-center py-10 px-5 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-3 uppercase">UJI BERKALA KENDARAAN BERMOTOR</h2>
        <p className="text-[#5dc761] text-xl font-bold">Hasil Uji Masih Berlaku</p>
        <p className="text-[#6e45d9] text-lg mt-2">(Numpang Uji)</p>
        <p className="text-lg mt-4">Masa Berlaku Hasil Uji : 18 Desember 2025</p>
      </main>

      {/* Identity Sections */}
      <div className="max-w-6xl mx-auto">
        <section className="flex flex-wrap justify-between px-5 gap-5 mb-8">
          {/* Owner Identity */}
          <div className="flex-1 min-w-[48%] bg-white p-5 rounded-md border border-gray-100">
            <h3 className="text-[#0a2377] text-base font-bold uppercase mb-3 border-b pb-1">IDENTITAS PEMILIK KENDARAAN </h3>
            <table className="w-full border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <td className="py-1 text-sm w-1/3">Nama Pemilik</td>
                  <td className="py-1 text-sm">: ABDUL MUID</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm w-1/3">Alamat Pemilik</td>
                  <td className="py-1 text-sm">: JL. LINTAS KABUPATEN RT.05, Kotawaringin Lama</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Vehicle Identity */}
          <div className="flex-1 min-w-[48%] bg-white p-5 rounded-md border border-gray-100">
            <h3 className="text-[#0a2377] text-base font-bold uppercase mb-3 border-b pb-1">IDENTITAS KENDARAAN BERMOTOR</h3>
            <table className="w-full border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <td className="py-1 text-sm w-2/5">Nomor Uji Kendaraan</td>
                  <td className="py-1 text-sm">: CC172121098</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm w-2/5">Nomor dan Tanggal Sertifikat Registrasi</td>
                  <td className="py-1 text-sm">: 28 JULI 2025</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm w-2/5">Nomor Registrasi Kendaraan</td>
                  <td className="py-1 text-sm">: KH 8289 GQ</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm w-2/5">Nomor Rangka Kendaraan</td>
                  <td className="py-1 text-sm">: MHMFE74PPNK230640</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm w-2/5">Nomor Motor Penggerak</td>
                  <td className="py-1 text-sm">: 4D34TY10816</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      {/* Vehicle Photos */}
      <section className="px-5 mb-8 text-center">
        <h3 className="text-[#0a2377] text-base font-bold uppercase mb-3 border-b pb-1 text-left">FOTO KENDARAAN</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          {[
            { title: "TAMPAK DEPAN", src: "/tampak-depan.png" },
            { title: "TAMPAK BELAKANG", src: "/tampak-belakang.png" },
            { title: "TAMPAK KANAN", src: "/tampak-kanan.png" },
            { title: "TAMPAK KIRI", src: "/tampak-kiri.png" }
          ].map((foto, index) => (
            <div key={index} className="bg-white p-3 rounded-md border border-gray-100 w-full">
              <h4 className="text-sm font-bold mb-2 text-center">{foto.title}</h4>
              <Image 
                src={foto.src} 
                alt={foto.title}
                width={180}
                height={130}
                className="w-full h-auto rounded-sm object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Specifications and Test Results */}
      <section className="flex flex-wrap justify-between px-5 gap-5 mb-8">
        {/* Technical Specifications */}
        <div className="flex-1 min-w-[48%] bg-white p-5 rounded-md border border-gray-100">
          <h3 className="text-[#0a2377] text-base font-bold uppercase mb-3 border-b pb-1">SPESIFIKASI TEKNIS KENDARAAN BERMOTOR</h3>
          <table className="w-full border-separate border-spacing-y-1">
            <tbody>
              <tr>
                <td className="py-1 text-sm w-2/5">Jenis</td>
                <td className="py-1 text-sm">: MOBIL BARANG BAK TERBUKA</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Merk / Tipe</td>
                <td className="py-1 text-sm">: Mitsubishi / FE74HD K</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Tahun Pembuatan / Perakitan</td>
                <td className="py-1 text-sm">: 2022</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Bahan Bakar / Sumber Energi</td>
                <td className="py-1 text-sm">: SOLAR</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Isi Silinder</td>
                <td className="py-1 text-sm">: 3908 cc</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Daya Motor</td>
                <td className="py-1 text-sm">: 100 KW/PS/HP</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Ukuran Ban</td>
                <td className="py-1 text-sm">: 750-16-14 PR</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Konfigurasi Sumbu</td>
                <td className="py-1 text-sm">: 1.2</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Berat Kosong Kendaraan</td>
                <td className="py-1 text-sm">: 3.740 kg</td>
              </tr>
              <tr>
                <td colSpan={2} className="py-1 text-sm font-bold">Dimensi utama kendaraan bermotor</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">✓ Panjang</td>
                <td className="py-1 text-sm">: 5820 mm &nbsp;&nbsp; ✓ Julur Depan : 1070 mm</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">✓ Lebar</td>
                <td className="py-1 text-sm">: 2050 mm &nbsp;&nbsp; ✓ Julur Belakang : 1400 mm</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">✓ Tinggi</td>
                <td className="py-1 text-sm">: 2400 mm</td>
              </tr>
              <tr>
                <td colSpan={2} className="py-1 text-sm font-bold">Jarak Sumbu</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">○ Sumbu I - II</td>
                <td className="py-1 text-sm">: 3350 mm</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">○ Sumbu II - III</td>
                <td className="py-1 text-sm">: 0 mm</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">○ Sumbu III - IV</td>
                <td className="py-1 text-sm">: 0 mm</td>
              </tr>
              <tr>
                <td colSpan={2} className="py-1 text-sm font-bold">Dimensi bak muatan/tangki : ( 4000x2080x800 ) mm</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">JBB/JBKB</td>
                <td className="py-1 text-sm">: 8000 kg / 0kg</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">JBI/JBKI</td>
                <td className="py-1 text-sm">: 8000 kg /0 kg</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Daya angkut (orang/kg)</td>
                <td className="py-1 text-sm">: 3 orang / 4080 kg</td>
              </tr>
              <tr>
                <td className="py-1 text-sm">Kelas jalan terendah yang boleh dilalui</td>
                <td className="py-1 text-sm">: III</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Test Results */}
        <div className="flex-1 min-w-[48%] bg-white p-5 rounded-md border border-gray-100">
          <h3 className="text-[#0a2377] text-base font-bold uppercase mb-3 border-b pb-1">RINCIAN HASIL UJI</h3>
          <div className="mb-4">
            <table className="w-full border-separate border-spacing-y-1">
              <tbody>
                <tr>
                  <td className="py-1 text-sm font-bold w-1/4">Item Uji</td>
                  <td className="py-1 text-sm font-bold w-1/3">Ambang Batas</td>
                  <td className="py-1 text-sm font-bold text-right">Hasil Uji</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm font-medium">Rem Utama</td>
                  <td className="py-1 text-xs text-gray-700">
                    Total gaya pengereman  50% X<br />
                    Total berat sumbu (kg)
                  </td>
                  <td className="py-1 text-sm text-right">: 2244 kg</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm"></td>
                  <td className="py-1 text-xs text-gray-700">
                    Selisih gaya pengereman roda kiri<br />
                    dan roda kanan dalam satu sumbu<br />
                    maksimum 8%
                  </td>
                  <td className="py-1 text-sm text-right">
                    I 2%<br />
                    II 2%<br />
                    II 3%<br />
                    IV	0 %
                  </td>
                </tr>
                <tr>
                  <td className="py-1 text-sm font-medium">Lampu Utama</td>
                  <td className="py-1 text-xs text-gray-700">
                    Kekuatan pancar lampu utama<br />
                    kanan 12000 cd (lampu jauh)
                  </td>
                  <td className="py-1 text-sm text-right">: 40900 cd</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm"></td>
                  <td className="py-1 text-xs text-gray-700">
                    Kekuatan pancar lampu utama kiri<br />
                    12000 cd (lampu jauh)
                  </td>
                  <td className="py-1 text-sm text-right">: 38500 cd</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm"></td>
                  <td className="py-1 text-xs text-gray-700">
                    Penyimpangan ke kanan 0° 34&apos;<br />
                    (lampu jauh)
                  </td>
                  <td className="py-1 text-sm text-right">: 0.20</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm"></td>
                  <td className="py-1 text-xs text-gray-700">
                    Penyimpangan ke kiri 1° 09&apos;<br />
                    (lampu jauh)
                  </td>
                  <td className="py-1 text-sm text-right">: 0.30</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm font-medium">Emisi</td>
                  <td className="py-1 text-xs text-gray-700">
                    Bahan bakar bensin<br />
                    tahun pembuatan &lt;= 2010<br />
                    CO : 32.00 %<br />
                    HC : 0 ppm
                  </td>
                  <td className="py-1 text-sm text-right"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <table className="w-full border-separate border-spacing-y-1">
              <tbody>
                <tr>
                  <td className="py-1 text-sm w-2/5">Hasil Uji</td>
                  <td className="py-1 text-sm">: LULUS UJI BERKALA</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm">Nama Petugas Penguji</td>
                  <td className="py-1 text-sm">: ZULKARNADI, S.Sos</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm">Masa berlaku uji berkala</td>
                  <td className="py-1 text-sm">: 28 JANUARI 2026</td>
                </tr>
                <tr>
                  <td className="py-1 text-sm">NRP (Nomor Registrasi Penguji)</td>
                  <td className="py-1 text-sm">: 62.001.PT5.01.001</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center text-sm font-bold pt-4">
              UNIT PELAKSANA TEKNIS DAERAH PENGUJIAN DINAS PERHUBUNGAN KABUPATEN KOTAWARINGIN BARAT
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
