export const parkingData = []

// Fungsi untuk membuat data parkir
const generateParkingData = (zones, rows, columns, startingId = 1) => {
  let id = startingId
  zones.forEach((zone, zoneIndex) => {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        parkingData.push({
          id: id++,
          x: 50 + col * 100,
          y: 50 + zoneIndex * 200 + row * 100,
          available: Math.random() > 0.3, // 70% kemungkinan tersedia, 30% terisi
          zone: zone,
          number: `${zone}${row * columns + col + 1}`,
        })
      }
    }
  })
}

// Menghasilkan data untuk 3 zona, masing-masing dengan 2 baris dan 4 kolom
generateParkingData(['A', 'B',], 2, 6)

export default parkingData
