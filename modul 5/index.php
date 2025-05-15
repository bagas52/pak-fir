<!DOCTYPE html>
<html>
<head>
    <title>Klasifikasi Nilai Siswa</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .container { max-width: 500px; margin: 0 auto; }
        form { margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 8px; border: 1px solid #ddd; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Klasifikasi Nilai Siswa</h2>
        
        <form method="post">
            Nama Siswa: <input type="text" name="nama" required><br><br>
            Nilai: <input type="number" name="nilai" min="0" max="100" required><br><br>
            <input type="submit" name="submit" value="Proses">
        </form>

        <?php
        if (isset($_POST['submit'])) {
            $nama = $_POST['nama'];
            $nilai = $_POST['nilai'];
            
            // Klasifikasi nilai
            if ($nilai >= 80) {
                $grade = 'A';
                $keterangan = 'Lulus dengan predikat Sangat Baik';
            } elseif ($nilai >= 70 && $nilai <= 79) {
                $grade = 'B';
                $keterangan = 'Lulus dengan predikat Baik';
            } elseif ($nilai >= 60 && $nilai <= 69) {
                $grade = 'C';
                $keterangan = 'Lulus dengan predikat Cukup';
            } elseif ($nilai >= 50 && $nilai <= 59) {
                $grade = 'D';
                $keterangan = 'Lulus dengan predikat Kurang';
            } else {
                $grade = 'E';
                $keterangan = 'Tidak Lulus';
            }
            
            // Simpan data ke session
            session_start();
            if (!isset($_SESSION['daftar_nilai'])) {
                $_SESSION['daftar_nilai'] = array();
            }
            array_push($_SESSION['daftar_nilai'], array(
                'nama' => $nama,
                'nilai' => $nilai,
                'grade' => $grade,
                'keterangan' => $keterangan
            ));
        }
        ?>

        <?php if (isset($_SESSION['daftar_nilai']) && !empty($_SESSION['daftar_nilai'])): ?>
            <h3>Daftar Nilai Siswa</h3>
            <table>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Nilai</th>
                    <th>Grade</th>
                    <th>Keterangan</th>
                </tr>
                <?php foreach ($_SESSION['daftar_nilai'] as $index => $data): ?>
                <tr>
                    <td><?= $index + 1 ?></td>
                    <td><?= htmlspecialchars($data['nama']) ?></td>
                    <td><?= $data['nilai'] ?></td>
                    <td><?= $data['grade'] ?></td>
                    <td><?= $data['keterangan'] ?></td>
                </tr>
                <?php endforeach; ?>
            </table>
        <?php endif; ?>
    </div>
</body>
</html>