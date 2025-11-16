---
title: "[Anti Ribet!] Belajar HTML Dasar: Dari Teks Polos ke Website Jadi, Kunci Coding Pemula"
date: 2025-11-12T19:04:00+07:00
draft: false
tags: ["Coding", "HTML"]
slug: "belajar-html-dasar"
image: "https://deuxlye.github.io/hosting-gambar/Belajar-HTML-Dasar.png"
author: "Deuxly"
description: "Belajar HTML Dasar merupakan Pintu Masuk Coding termudah buat Pemula. Ubah Teks Polos menjadi Website Utuh. Kuasai Rangkaian Tag esensial sekarang!"
---

Halo, _coders_ pemula! Siap terjun ke dunia _ngoding_? Kalau kamu mau bikin _website_ sendiri, entah itu blog keren, portofolio profesional, maupun toko _online_, Langkah pertama yang harus kamu kuasai adalah **HTML**.

Anggap saja HTML itu **cetak biru** atau **kerangka tulang** dari setiap _website_ di dunia. Tanpa HTML, _website_ hanyalah tumpukan teks tanpa bentuk! Yuk, kita bongkar tuntas!

## Belajar HTML Dasar: Pondasi Web

### Apa itu HTML?

**HTML** adalah singkatan dari **HyperText Markup Language**. Ingat ya, ini **bukan** bahasa pemrograman kayak Java atau Python. HTML itu **bahasa _markup_**. Kerjanya adalah menggunakan _tag_ untuk memberitahu _browser_ (Chrome, Firefox, dll.) bagaimana menyusun konten di halaman. Contohnya, mana yang judul, mana yang paragraf, dan mana yang gambar.

### Mengapa HTML Penting?

HTML adalah **DNA** dari web. Kenapa harus belajar ini duluan?

- **Struktur Wajib:** Semua yang kamu lihat di web (tulisan, tombol, _form_) dibangun di atas struktur HTML.

- **Pintu Masuk:** Kamu tidak bisa membuat _website_ terlihat cantik dengan CSS atau interaktif dengan JavaScript tanpa inti dari HTML yang kuat.

### Sejarah Singkat dan Versi (HTML5)

HTML pertama kali lahir tahun 90-an. Versi yang kita pakai dan pelajari hari ini adalah **HTML5**, yang merupakan _upgrade_ besar.

> **HTML5** itu penyelamat! Dia menambahkan banyak fitur keren, terutama buat _multimedia_ (video, audio) dan tag-tag baru yang bikin struktur web lebih rapi.

### Alat yang Dibutuhkan (Browser dan Editor Teks)

Kabar baik: Kamu nggak perlu beli _software_ mahal untuk belajar! Cuma perlu dua hal ini:

1. **Browser Web:** Untuk melihat hasil _ngoding_ kamu (Chrome/Firefox/Edge).

3. **Editor Teks/Code:** Tempat kamu menulis kodenya. Rekomendasi paling populer adalah **VS Code (Visual Studio Code)**. Gratis, ringan, dan punya banyak fitur bantu!

## Struktur Dasar Halaman HTML

Setiap _file_ disini itu seperti rumah. Dia punya aturan mainnya sendiri.

### Anatomi Dokumen HTML

Dokumen HTML terbagi dua:

- **`<head>`:** Bagian kepala. Isinya info-info penting buat _browser_ dan mesin pencari (yang tidak dilihat user).

- **`<body>`:** Bagian tubuh. Isinya semua konten visual yang dilihat oleh pengunjung _website_ (teks, gambar, _link_).

### Deklarasi <!DOCTYPE html>

Baris pertama di _file_ kamu **wajib** ini:

```
<!DOCTYPE html>
```

Ini bukan tag, tapi **instruksi** ke _browser_ untuk bilang, "Ini merupakan dokumen versi terbaru yaitu (HTML5)!"

### Tag <html>, <head>, dan <body>

Ketiga tag ini adalah kerangka utamanya:

- **`<html>`:** Tag _root_ (akar) yang membungkus semua konten.

- **`<head>`:** Tempat menyimpan _metadata_.

- **`<body>`:** Tempat menyimpan konten visual.

### Penggunaan Tag <meta> (Charset, Viewport)

Tag `<meta>` ada di dalam `<head>` dan isinya informasi tambahan:

- **Charset:** `<meta charset="UTF-8">`. Ini penting banget supaya karakter aneh (misalnya emoji atau karakter dari bahasa lain) bisa ditampilkan dengan benar.

- **Viewport:** `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Wajib ada kalau kamu mau _website_\-mu ramah di HP (responsif).

### Tag <title> dan Dampaknya pada SEO

Tag **`<title>`** juga di dalam `<head>`. Teks di sini akan muncul di tab _browser_ kamu.

- **Penting:** Teks inilah yang paling utama dibaca mesin pencari (Google, Bing) sebagai judul halamanmu. Jadi, _title_ yang bagus itu kunci **SEO** dasar.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"> 
    <title>Judul Halaman Websiteku</title> 
</head>
<body>
    </body>
</html>
```

## Tag-Tag Teks Penting

Sekarang, kita udah bisa nih mulai ngisi dengan konten artikel. HTML sendiri punya cara khusus untuk ngatur teks.

### Heading (<h1> hingga <h6>)

Ini adalah tag judul. **`<h1>`** adalah judul utama (paling penting, hanya satu per halaman), sedangkan `<h2>` hingga `<h6>` adalah sub-judul yang makin kecil dan kurang penting.

### Paragraf (<p>)

Tag **`<p>`** wajib dipakai untuk semua teks paragraf biasa. Jangan pakai `<br>` berkali-kali untuk membuat paragraf baru, itu cara yang salah!

### Format Teks Dasar

- **Bold (Tebal):** Gunakan **`<strong>`** untuk menekankan _pentingnya_ teks secara semantik, atau **`<b>`** jika kamu hanya ingin efek tebal visual.

- **Italic (Miring):** Gunakan **`<em>`** untuk memberikan _penekanan_ (emphasis), atau **`<i>`** untuk efek miring saja.

### Break Baris (<br>) dan Garis Horizontal (<hr>)

- **`<br>`:** Memaksa teks pindah baris (biasanya dipakai di alamat atau puisi).

- **`<hr>`:** Menampilkan garis horizontal, bagus buat memisahkan bagian konten yang berbeda.

### Kutipan (<blockquote>, <q>)

- **`<blockquote>`:** Untuk kutipan panjang yang diambil dari sumber lain.

- **`<q>`:** Untuk kutipan pendek di dalam kalimat.

## Bekerja dengan Tautan dan Gambar

Ini yang bikin web interaktif dan visual.

### Hyperlink (<a> tag)

Tag **`<a>`** (anchor) adalah tag yang menciptakan tautan (link).

#### Atribut href (Tautan Eksternal dan Internal)

Atribut **`href`** wajib ada, ini adalah alamat tujuan tautan:

- **Eksternal:** `<a href="https://www.google.com">Cari di Google</a>`

- **Internal:** `<a href="halaman-tentang.html">Ke Halaman Tentang</a>`

#### Atribut target="\_blank"

Kalau kamu mau tautan itu terbuka di **tab baru** _browser_, tambahkan atribut ini: `<a href="url" target="_blank">Buka Tab Baru</a>`

### Menyisipkan Gambar (<img> tag)

Tag **`<img>`** digunakan untuk menampilkan gambar. Tag ini _self-closing_ (tidak ada tag penutup seperti `</img>`).

#### Atribut src dan alt (Aksesibilitas)

- **`src`** (source): Lokasi file gambar kamu.

- **`alt`** (alternate text): Deskripsi gambar. Ini **sangat penting**! Teks ini muncul kalau gambar gagal dimuat, dan dibaca oleh alat bantu (screen reader) untuk pengguna disabilitas.

```html
<img src="assets/foto-profil.jpg" alt="Foto saya sedang tersenyum di pantai" width="300">
```

## Membuat Daftar

Daftar itu bagus untuk membuat konten kamu mudah dicerna.

### Daftar Tidak Berurut (<ul> dan <li>)

Urutannya nggak penting (misalnya daftar belanja, poin-poin). Itemnya ditandai dengan _bullet points_.

- **`<ul>`:** Wadah utama.

- **`<li>`:** Setiap item dalam daftar (list item).

```html
<ul>
    <li>Kopi</li>
    <li>Teh</li>
</ul>
```

### Daftar Berurut (<ol> dan <li>)

Urutannya penting (misalnya resep, langkah-langkah). Itemnya ditandai dengan angka atau huruf.

- **`<ol>`:** Wadah utama (_ordered list_).

### Daftar Deskripsi (<dl>, <dt>, <dd>)

Dipakai buat daftar istilah dan penjelasannya (misalnya glosarium).

- **`<dl>`:** Wadah daftar deskripsi.

- **`<dt>`:** Istilahnya (_definition term_).

- **`<dd>`:** Penjelasan/definisi istilah tersebut (_definition description_).

## Tabel HTML

Tabel dipakai untuk menampilkan data tabular, bukan untuk _layout_ halaman.

### Struktur Tabel (<table>, <thead>, <tbody>, <tfoot>)

- **`<table>`:** Wadah seluruh tabel.

- **`<thead>`:** Kepala tabel (judul kolom).

- **`<tbody>`:** Isi data utama.

- **`<tfoot>`:** Kaki tabel (total, catatan).

### Baris (<tr>) dan Sel (<th>, <td>)

- **`<tr>`** (table row): Mendefinisikan satu baris data.

- **`<th>`** (table header): Sel yang berisi judul/header.

- **`<td>`** (table data): Sel yang berisi data biasa.

### Menggabungkan Sel (rowspan dan colspan)

Ini fitur keren!

- **`colspan`:** Menggabungkan sel-sel secara horizontal (melebar ke kolom).

- **`rowspan`:** Menggabungkan sel-sel secara vertikal (memanjang ke baris).

## Formulir (Forms) Interaktif

_Form_ adalah cara _website_ kamu berinteraksi dengan pengguna (login, pendaftaran, kirim pesan).

### Membuat Form (<form> tag)

Semua input harus dibungkus dalam tag `<form>`.

#### Atribut action dan method

- **`action`:** _URL_ tujuan data formulir akan dikirimkan (biasanya ke _server_).

- **`method`:** Cara pengiriman data (`GET` atau `POST`).

### Elemen Input Dasar (<input> tag)

Tag paling serbaguna. Jenis inputnya ditentukan oleh atribut `type`.

#### Tipe Input (text, password, checkbox, radio, submit)

- `type="text"`: Kotak input teks biasa.

- `type="password"`: Menyembunyikan karakter saat diketik.

- `type="checkbox"`: Pilih banyak opsi.

- `type="radio"`: Pilih satu opsi dari grup.

- `type="submit"`: Tombol untuk mengirimkan data _form_.

### Label (<label>) dan Placeholder

- **`<label>`:** Teks di samping input. Ini harus dihubungkan ke `id` input yang relevan. **Wajib** untuk aksesibilitas!

- **Placeholder:** Teks petunjuk yang muncul di dalam kotak input (misalnya: "Masukkan nama lengkap").

### Dropdowns (<select>, <option>) dan Textareas (<textarea>)

- **`<select>`** dan **`<option>`:** Untuk membuat menu _dropdown_ (pilihan).

- **`<textarea>`:** Untuk input teks yang panjang (misalnya kolom komentar).

## Elemen Semantik di HTML5

Jangan asal pakai `<div>`! kita diperkenalkan dengan yang namanya tag Semantik.

### Pentingnya Semantik

Semantik artinya **bermakna**. Tag semantik memberitahu _browser_ dan mesin pencari, "**Ini adalah bagian apa**" di halamanmu.

- **SEO:** Google lebih mudah memahami struktur konten kamu.

- **Aksesibilitas:** Pengguna alat bantu tahu di mana navigasi, di mana konten utama.

### Tag Semantik Umum

Gunakan tag ini daripada `<div>` untuk struktur utama:

- **`<header>`:** Bagian atas halaman.

- **`<nav>`:** Kumpulan _link_ navigasi.

- **`<main>`:** Konten utama yang paling penting di halaman.

- **`<article>`:** Konten yang bisa berdiri sendiri (postingan blog, berita).

- **`<section>`:** Mengelompokkan konten yang bertema sama.

- **`<aside>`:** Konten pelengkap (misalnya _sidebar_).

- **`<footer>`:** Bagian kaki halaman (hak cipta, _link_ kontak).

### Membandingkan <div> vs. Tag Semantik

**Gunakan Tag Semantik** karena mereka punya makna. **Gunakan `<div>`** hanya untuk membungkus elemen-elemen kecil yang fungsinya hanya untuk _styling_ (menata) menggunakan CSS.

## Multimedia dan Embed

Di HTML5, memasukkan video dan audio semudah ini!

### Menambahkan Video (<video> tag)

Langsung bisa memutar _file_ video tanpa _plugin_ eksternal.

```html
<video controls width="500">
    <source src="intro.mp4" type="video/mp4">
    Browser Anda tidak mendukung tag video.
</video>
```

- **`controls`:** Menampilkan tombol play/pause.

### Menambahkan Audio (<audio> tag)

Sama seperti video, tapi untuk _file_ audio (MP3, WAV, dll.).

### Mengembed Konten Eksternal (<iframe>)

Tag **`<iframe>`** dipakai buat "membingkai" (_embed_) konten dari situs lain ke situs kita. Paling sering dipakai buat memasukkan peta Google Maps atau video YouTube.

```html
<iframe src="url-youtube-atau-peta" width="600" height="400" title="Konten Eksternal"></iframe>
```

## Kesimpulan dan Langkah Selanjutnya

Kamu sudah menyelesaikan tahap paling dasar dan paling penting: **Belajar HTML Dasar**!

### Ringkasan Konsep Kunci

- HTML adalah **struktur**.

- Wajib pakai `<!DOCTYPE html>` dan struktur `<head>`/`<body>`.

- Selalu gunakan **`alt`** pada gambar.

- **Semantik** (seperti `<header>`, `<article>`) itu penting untuk SEO dan aksesibilitas.

## Langkah Berikutnya: Mempelajari CSS dan JavaScript

Ini hanyalah kerangka. Agar _website_ kamu hidup, kamu perlu:

1. **CSS (Cascading Style Sheets):** Ini adalah **seni dan _fashion_** web. CSS membuat tampilan, warna, _font_, dan tata letak _website_ kamu jadi keren.

3. **JavaScript (JS):** Ini adalah **aksi dan otak** web. JS membuat _website_ kamu interaktif (misalnya, animasi, kalkulator, tombol yang berubah warna).

### Sumber Belajar Tambahan

- **[MDN Web Docs (Mozilla Developer Network](https://developer.mozilla.org/en-US/):** Sumber dokumentasi teknis paling akurat.

- **[W3Schools](https://w3schools.com):** Bagus untuk referensi cepat dan contoh kode.

- **Deuxly**: Belajar sambil Ngajar wkwk

Selamat! Kamu udah menyelesaikan **[Tutorial HTML untuk pemula](https://deuxly.id/belajar-html-dasar/)**. Sekarang, coba lihat lagi _website_ pertamamu. Itu bukan lagi **Teks Polos**, tapi udah menjadi **Website Utuh** yang punya kerangka dan struktur yang solid itu semua berkat kerja kerasmu **Belajar HTML Dasar**!

Buka VS Code dan segera _commit_ (simpan) kode HTML pertamamu, di artikel berikutnya deuxly.id akan bahas tentang CSS!
