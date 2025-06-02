<!DOCTYPE html><html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>YNA STORE</title>
  <link rel="icon" href="/logo.png">
  <style>
    body {
      margin: 0;
      background: #0b001a;
      font-family: 'Poppins', sans-serif;
      color: white;
      overflow-x: hidden;
    }
    .neon {
      color: #b75cff;
      text-shadow: 0 0 5px #b75cff, 0 0 10px #b75cff, 0 0 20px #8f00ff;
    }
    header {
      padding: 2rem;
      text-align: center;
      background: #15002a;
    }
    .logo {
      width: 120px;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    .section {
      padding: 4rem 2rem;
      text-align: center;
    }
    .product {
      background: #1a0035;
      border: 1px solid #5200ff;
      border-radius: 1rem;
      padding: 1rem;
      margin: 1rem auto;
      max-width: 500px;
      transition: transform 0.3s ease;
    }
    .product:hover {
      transform: scale(1.05);
    }
    a {
      color: #b75cff;
      text-decoration: none;
    }
    .btn {
      padding: 0.8rem 2rem;
      margin-top: 1rem;
      display: inline-block;
      background: #b75cff;
      border-radius: 2rem;
      color: #0b001a;
      font-weight: bold;
      transition: background 0.3s;
    }
    .btn:hover {
      background: #a24df1;
    }
    footer {
      padding: 2rem;
      background: #15002a;
      text-align: center;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <header>
    <img src="/logo.png" alt="Logo YNA STORE" class="logo">
    <h1 class="neon">YNA STORE</h1>
    <p>By <strong>YNA DEVELOPER</strong> | No WA: <a href="https://wa.me/6283138675899">083138675899</a></p>
  </header>  <div class="section">
    <h2 class="neon">Produk & Jasa Unggulan</h2>
    <div class="product">
      <h3>*AM PREM*</h3>
      <p>Alight Motion Premium versi full akses.</p>
    </div>
    <div class="product">
      <h3>*CANVA PREMIUM*</h3>
      <p>Desain tanpa batas dengan akun Canva Premium.</p>
    </div>
    <div class="product">
      <h3>*SCRIPT & SEWA BOT*</h3>
      <p>Bot WhatsApp dengan 1500+ fitur, siap run di panel.</p>
    </div>
    <div class="product">
      <h3>*JASA HD & EDIT*</h3>
      <p>Ubah foto jadi kualitas HD + jasa edit profesional.</p>
    </div>
    <a href="https://linktr.ee/yna_store" class="btn">Cek Semua Produk</a>
  </div>  <div class="section">
    <h2 class="neon">Gabung Komunitas Kami</h2>
    <a href="https://chat.whatsapp.com/FPLlkOCcV8YBaUGE9rudMd" class="btn">Grup WhatsApp</a>
    <a href="https://whatsapp.com/channel/0029VbAZ4XL8aKvOd4rMv026" class="btn">Saluran WhatsApp</a>
  </div>  <footer>
    &copy; 2025 YNA STORE - Dibuat dengan cinta oleh *YNA DEVELOPER*<br>
    Tema: Ungu Neon ✨ | Layout Full Scroll | Full Animasi & Responsif
  </footer>  <audio autoplay>
    <source src="/masuk1.mp3" type="audio/mpeg">
  </audio>
  <script>
    setTimeout(() => {
      const audio = new Audio('/masuk2.mp3');
      audio.play();
    }, 3500);
  </script>
</body>
</html>
