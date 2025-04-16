<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Belajar JavaScript & DOM</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }

    h1 {
      color: #2980b9;
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: yellow; /* Ubah default jadi kuning */
      margin: 10px 0;
      transition: background-color 0.3s ease;
    }

    button {
      padding: 10px 20px;
      background-color: #2ecc71;
      border: none;
      color: white;
      cursor: pointer;
    }

    #status {
      margin-top: 10px;
      font-weight: bold;
    }
  </style>
</head>

<body>
  <h1>Belajar JavaScript & DOM</h1>
  <p>Klik tombol untuk mengganti warna kotak:</p>
  <div class="box" id="colorBox"></div>
  <button id="changeBtn">Ganti Warna</button>
  <p id="status">Warna saat ini: Kuning</p>

  <script>
    const box = document.getElementById('colorBox');
    const button = document.getElementById('changeBtn');
    const statusText = document.getElementById('status');

    const colors = ['yellow', 'green', 'blue', 'purple', 'tomato']; // Awalnya kuning
    let colorIndex = 0;

    button.addEventListener('click', function () {
      colorIndex = (colorIndex + 1) % colors.length;
      const currentColor = colors[colorIndex];
      box.style.backgroundColor = currentColor;
      statusText.textContent = "Warna saat ini: " + currentColor.charAt(0).toUpperCase() + currentColor.slice(1);
    });
  </script>
</body>

</html>
