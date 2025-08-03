import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f5f6fc] font-sans text-[#2e2e2e] min-h-screen">
      {/* Header */}
      <header className="bg-[#0a2377] text-white py-3 px-4 w-full">
        <div className="flex justify-center items-center">
          <div className="flex items-center ">
            <Image 
              src="/logo.png" 
              alt="Logo Kemenhub" 
              width={30} 
              height={30}
              className="rounded-full"
            />
            <h1 className="text-md tracking-wide font-medium">KEMENTERIAN PERHUBUNGAN</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="text-center py-6 px-4 max-w-6xl mx-auto">
        <h2 className="text-lg mb-2 uppercase">UJI BERKALA KENDARAAN BERMOTOR</h2>
        <p className="text-[#5dc761] text-lg font-medium">Hasil Uji Masih Berlaku</p>
        <p className="text-[#6e45d9] text-base mt-1 font-medium">(Numpang Uji)</p>
        <p className="text-base mt-3 mb-2">Masa Berlaku Hasil Uji : 31 Januari 2026</p>
      </main>

      {/* Identity Sections */}
      <div className="max-w-6xl mx-auto">
        <section className="flex flex-wrap justify-between px-4 gap-4 mb-6">
          {/* Owner Identity */}
          <div className="flex-1 min-w-[48%]">
            <h3 className="text-gray-600 text-sm  font-medium mb-2 ml-3">IDENTITAS PEMILIK KENDARAAN DAN BLUe</h3>
            <div className="bg-white p-4 border border-gray-100 shadow-sm">
              <table className="w-full text-xs">
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3">Nama Pemilik</td>
                    <td className="py-3">: ABDUL MUID</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 align-top">Alamat
Pemilik</td>
                    <td className="py-3">: JL. LINTAS KABUPATEN RT.05,
                            Kotawaringin Lama 
</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-200">
                    <td colSpan={2} className="py-3 font-bold">Identitas
<br/>BLUe</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3">Nomor Kartu</td>
                    <td className="py-3">: J4287322</td>
                  </tr>
                  <tr className=" hover:bg-gray-100">
                    <td className="py-3">Nomor RFID</td>
                    <td className="py-3">: J4284167</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Vehicle Identity */}
          <div className="flex-1 min-w-[48%]">
            <h3 className="text-gray-600 text-sm uppercase font-medium mb-2 ml-3">IDENTITAS KENDARAAN BERMOTOR</h3>
            <div className="bg-white p-4 border border-gray-100 shadow-sm">
              <table className="w-full text-xs">
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 w-2/5">Nomor Uji Kendaraan</td>
                    <td className="py-3">: CC172121098</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 w-2/5">Nomor dan Tanggal Sertifikat Registrasi</td>
                    <td className="py-3">: 31 JULI 2025</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 w-2/5">Nomor Registrasi Kendaraan</td>
                    <td className="py-3">: KH 8289 GQ</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 w-2/5">Nomor Rangka Kendaraan</td>
                    <td className="py-3">: MHMFE74PPNK230640</td>
                  </tr>
                  <tr className=" hover:bg-gray-100">
                    <td className="py-3 w-2/5">Nomor Motor Penggerak</td>
                    <td className="py-3">: 4D34TY10816</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      {/* Vehicle Photos */}
      <section className="px-4 mb-6">
        <h3 className="text-gray-600 text-sm uppercase font-medium mb-2 ml-3text-left">FOTO KENDARAAN</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
          {[
            { title: "TAMPAK DEPAN", src: "/tampak-depan.jpeg" },
            { title: "TAMPAK BELAKANG", src: "/tampak-belakang.jpeg" },
            { title: "TAMPAK KANAN", src: "/tampak-kanan.jpeg" },
            { title: "TAMPAK KIRI", src: "/tampak-kiri.jpeg" }
          ].map((foto, index) => (
            <div key={index} className="bg-white p-3 border border-gray-100 shadow-sm w-full">
              <h4 className="text-xs mb-2 text-center font-medium">{foto.title}</h4>
              <Image 
                src={foto.src} 
                alt={foto.title}
                width={150}
                height={110}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Specifications and Test Results */}
      <section className="flex flex-wrap justify-between px-4 gap-4 mb-6">
        {/* Technical Specifications */}
        <div className="flex-1 min-w-[48%]">
          <h3 className="text-gray-600 text-sm uppercase font-medium mb-2 ml-3">SPESIFIKASI TEKNIS KENDARAAN BERMOTOR</h3>
          <div className="bg-white p-4 border border-gray-100 shadow-sm">
            <table className="w-full text-xs">
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 w-2/5">Jenis</td>
                <td className="py-3">: MOBIL BARANG BAK TERBUKA</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3">Merk / Tipe</td>
                <td className="py-3">: Mitsubishi / FE74HD K</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3">Tahun Pembuatan / Perakitan</td>
                <td className="py-3">: 2022</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3">Bahan Bakar / Sumber Energi</td>
                <td className="py-3">: SOLAR</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3">Isi Silinder</td>
                <td className="py-3">: 3,908 cc</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 ">Daya Motor</td>
                <td className="py-3">: 100 KW/PS/HP</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 ">Ukuran Ban</td>
                <td className="py-3">: 750-16-14 PR</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 ">Konfigurasi Sumbu</td>
                <td className="py-3">: 1.2</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 ">Berat Kosong Kendaraan</td>
                <td className="py-3">: 3,740 kg</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td colSpan={2} className="py-3 font-bold">Dimensi utama kendaraan bermotor</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 "><Image src="/check.svg" alt="check" width={16} height={16} className="inline mr-1" /> Panjang</td>
                <td className="py-3">: 5,820 mm &nbsp;&nbsp; <Image src="/check.svg" alt="check" width={16} height={16} className="inline mr-1" /> Julur Depan : 1,070 mm</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 "><Image src="/check.svg" alt="check" width={16} height={16} className="inline mr-1" /> Lebar</td>
                <td className="py-3">: 2,050 mm &nbsp;&nbsp; <Image src="/check.svg" alt="check" width={16} height={16} className="inline mr-1" /> Julur Belakang : 1,400 mm</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 "><Image src="/check.svg" alt="check" width={16} height={16} className="inline mr-1" /> Tinggi</td>
                <td className="py-3">: 2,400 mm</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td colSpan={2} className="py-3 font-bold ">Jarak Sumbu</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 "><Image src="/check.svg" alt="circle" width={16} height={16} className="inline mr-1" /> Sumbu I - II</td>
                <td className="py-3">: 3,350 mm</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 "><Image src="/check.svg" alt="circle" width={16} height={16} className="inline mr-1" /> Sumbu II - III</td>
                <td className="py-3">: 0 mm</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 "><Image src="/check.svg" alt="circle" width={16} height={16} className="inline mr-1" /> Sumbu III - IV</td>
                <td className="py-3">: 0 mm</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td colSpan={2} className="py-3 font-bold">Dimensi bak muatan/tangki</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 w-2/5"><Image src="/check.svg" alt="check" width={16} height={16} className="inline mr-1" /> Panjang x Lebar x Tinggi</td>
                <td className="py-3">: 4000 x 2080 x 800 mm</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 ">JBB/JBKB</td>
                <td className="py-3">: 8,000 kg / 0kg</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 ">JBI/JBKI</td>
                <td className="py-3">: 8,000 kg /0 kg</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 ">Daya angkut (orang/kg)</td>
                <td className="py-3">: 3 orang / 4,080 kg</td>
              </tr>
              <tr>
                <td className="py-3 text-xs">Kelas jalan terendah yang boleh dilalui</td>
                <td className="py-3 text-xs">: III</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        {/* Test Results */}
        <div className="flex-1 min-w-[48%]">
          <h3 className="text-gray-600 text-sm uppercase font-medium mb-2 ml-3">RINCIAN HASIL UJI</h3>
          <div className="bg-white p-4 border border-gray-100 shadow-sm mb-4">
            <table className="w-full text-xs">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Rem Utama</td>
                  <td className="py-3">: 2,244 kg</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Rem Utama Sumbu I</td>
                  <td className="py-3">: 2 %</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Rem Utama Sumbu II</td>
                  <td className="py-3">: 3 %</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Rem Utama Sumbu III</td>
                  <td className="py-3">: 0 %</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Rem Utama Sumbu IV</td>
                  <td className="py-3">: 0 %</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Lampu Utama Kanan</td>
                  <td className="py-3">: 40,900 cd</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Lampu Utama Kiri</td>
                  <td className="py-3">: 38,500 cd</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Lampu Utama Penyimpangan Kanan</td>
                  <td className="py-3">: 0.20</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Lampu Utama Penyimpangan Kiri</td>
                  <td className="py-3">: 0.30</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Emisi CO</td>
                  <td className="py-3">: 32 %</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Emisi HC</td>
                  <td className="py-3">: 0 ppm</td>
                </tr>
                <tr className=" hover:bg-gray-100">
                  <td className="py-3 w-2/5">Ketebalan Asap</td>
                  <td className="py-3">: 24 %</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-gray-600 text-sm uppercase font-medium mb-2 ml-3">RINCIAN HASIL UJI</h3>
          <div className="bg-white p-4 border border-gray-100 shadow-sm">
            <table className="w-full text-xs">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">HASIL UJI</td>
                  <td className="py-3">: LULUS UJI BERKALA</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Masa berlaku uji berkala</td>
                  <td className="py-3">: 31 JANUARI 2026</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Nama Petugas Penguji</td>
                  <td className="py-3">: ZULKARNADI, S.Sos</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">NRP (Nomor Registrasi Penguji)</td>
                  <td className="py-3">: 062.001.PT5.01.001</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Nama Kepala Dinas</td>
                  <td className="py-3">: AMIR HADI, SE.,M.Ec.Dev.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Pangkat Kepala Dinas</td>
                  <td className="py-3">: Pembina Utama Muda - IV/c</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">NIP Kepala Dinas</td>
                  <td className="py-3">: 19710728 199803 1 007</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Unit Pelaksana Teknis Daerah Pengujian</td>
                  <td className="py-  3">: DISHUB KABUPATEN KOTAWARINGIN BARAT</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td colSpan={2} className="py-3 font-bold">Asal Kendaraan Wajib Uji</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 w-2/5">Wilayah</td>
                  <td className="py-3">: DISHUB KABUPATEN KOTAWARINGIN BARAT</td>
                </tr>
                <tr className=" hover:bg-gray-100">
                  <td className="py-3 w-2/5">Wilayah Asal</td>
                  <td className="py-3">: DISHUB KABUPATEN KOTAWARINGIN BARAT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
