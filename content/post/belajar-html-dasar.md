---
title: "[Anti Ribet!] Belajar HTML Dasar: Dari Teks Polos ke Website Jadi, Kunci Coding Pemula"
date: 2025-11-12T19:04:00+07:00
draft: false
featured: true
tags: ["Coding", "HTML"]
slug: "belajar-html-dasar"
image: "https://deuxly.github.io/hosting-gambar/Belajar-HTML-Dasar.png"
author: "deuxly"
description: "Belajar HTML Dasar merupakan Pintu Masuk Coding termudah buat Pemula. Ubah Teks Polos menjadi Website Utuh. Kuasai Rangkaian Tag esensial sekarang!"
---

Halo, _coders_ pemula! Siap terjun ke dunia _ngoding_? Kalau kamu mau bikin _website_ sendiri, entah itu blog keren, portofolio profesional, maupun toko _online_, langkah pertama yang harus kamu kuasai adalah **HTML**.

{{< box type="info" >}}
Anggap saja HTML itu **cetak biru** atau **kerangka tulang** dari setiap _website_ di dunia. Tanpa HTML, _website_ hanyalah tumpukan teks tanpa bentuk! Yuk, kita bongkar tuntas!
{{< /box >}}

{{< toc >}}

## Belajar HTML Dasar: Pondasi Web

### Apa itu HTML?

**HTML** adalah singkatan dari **HyperText Markup Language**. Ingat ya, ini **bukan** bahasa pemrograman kayak Java atau Python. HTML itu **bahasa _markup_**. 

Kerjanya adalah menggunakan _tag_ untuk memberitahu _browser_ (Chrome, Firefox, dll.) bagaimana menyusun konten di halaman. Contohnya, mana yang judul, mana yang paragraf, dan mana yang gambar.

### Mengapa HTML Penting?

HTML adalah **DNA** dari web. Kenapa harus belajar ini duluan?

1.  **Struktur Wajib:** Semua yang kamu lihat di web (tulisan, tombol, _form_) dibangun di atas struktur HTML.
2.  **Pintu Masuk:** Kamu tidak bisa membuat _website_ terlihat cantik dengan CSS atau interaktif dengan JavaScript tanpa inti dari HTML yang kuat.

### Sejarah Singkat dan Versi (HTML5)

HTML pertama kali lahir tahun 90-an. Versi yang kita pakai dan pelajari hari ini adalah **HTML5**, yang merupakan _upgrade_ besar.

{{< box type="success" >}}
**HTML5 itu penyelamat!** Dia menambahkan banyak fitur keren, terutama buat _multimedia_ (video, audio) dan tag-tag baru yang bikin struktur web lebih rapi.
{{< /box >}}

### Alat yang Dibutuhkan

Kabar baik: Kamu nggak perlu beli _software_ mahal untuk belajar! Cuma perlu dua hal ini:

1.  **Browser Web:** Untuk melihat hasil _ngoding_ kamu (Chrome/Firefox/Edge).
2.  **Editor Teks/Code:** Tempat kamu menulis kodenya. Rekomendasi paling populer adalah **VS Code (Visual Studio Code)**. Gratis, ringan, dan punya banyak fitur bantu!

---

## Struktur Dasar Halaman HTML

Setiap _file_ di sini itu seperti rumah. Dia punya aturan mainnya sendiri.

### Anatomi Dokumen HTML

Dokumen HTML terbagi dua:
* **`<head>`:** Bagian kepala. Isinya info-info penting buat _browser_ dan mesin pencari (yang tidak dilihat user).
* **`<body>`:** Bagian tubuh. Isinya semua konten visual yang dilihat oleh pengunjung _website_ (teks, gambar, _link_).

### Deklarasi `<!DOCTYPE html>`

Baris pertama di _file_ kamu **wajib** ini:

{{< code lang="html" >}}
<!DOCTYPE html>
{{< /code >}}

Ini bukan tag, tapi **instruksi** ke _browser_ untuk bilang, "Ini merupakan dokumen versi terbaru yaitu (HTML5)!"

### Tag `<html>`, `<head>`, dan `<body>`

Ketiga tag ini adalah kerangka utamanya:
* **`<html>`:** Tag _root_ (akar) yang membungkus semua konten.
* **`<head>`:** Tempat menyimpan _metadata_.
* **`<body>`:** Tempat menyimpan konten visual.

### Penggunaan Tag `<meta>`

Tag `<meta>` ada di dalam `<head>` dan isinya informasi tambahan:
* **Charset:** `<meta charset="UTF-8">`. Ini penting banget supaya karakter aneh (misalnya emoji atau karakter dari bahasa lain) bisa ditampilkan dengan benar.
* **Viewport:** `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Wajib ada kalau kamu mau _website_-mu ramah di HP (responsif).

### Tag `<title>` dan Dampaknya pada SEO

Tag **`<title>`** juga di dalam `<head>`. Teks di sini akan muncul di tab _browser_ kamu.

{{< box type="tips" >}}
**Tips SEO:** Teks inilah yang paling utama dibaca mesin pencari (Google, Bing) sebagai judul halamanmu. Jadi, _title_ yang bagus itu kunci **SEO** dasar.
{{< /box >}}

Contoh struktur lengkap:

{{< code lang="html" title="index.html" >}}
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"> 
    <title>Judul Halaman Websiteku</title> 
</head>
<body>
    <h1>Halo Dunia!</h1>
    <p>Ini adalah website pertamaku.</p>
</body>
</html>
{{< /code >}}

---

## Tag-Tag Teks Penting

Sekarang, kita sudah bisa mulai mengisi dengan konten artikel. HTML sendiri punya cara khusus untuk mengatur teks.

### Heading (`<h1>` hingga `<h6>`)

Ini adalah tag judul. **`<h1>`** adalah judul utama (paling penting, hanya satu per halaman), sedangkan `<h2>` hingga `<h6>` adalah sub-judul yang makin kecil dan kurang penting.

### Paragraf (`<p>`)

Tag **`<p>`** wajib dipakai untuk semua teks paragraf biasa. 

{{< box type="warning" >}}
**Jangan pakai `<br>` berkali-kali** untuk membuat paragraf baru atau memberi jarak, itu cara yang salah! Gunakan CSS untuk mengatur jarak.
{{< /box >}}

### Format Teks Dasar

* **Bold (Tebal):** Gunakan **`<strong>`** untuk menekankan _pentingnya_ teks secara semantik, atau **`<b>`** jika kamu hanya ingin efek tebal visual.
* **Italic (Miring):** Gunakan **`<em>`** untuk memberikan _penekanan_ (emphasis), atau **`<i>`** untuk efek miring saja.

---

## Bekerja dengan Tautan dan Gambar

Ini yang bikin web interaktif dan visual.

### Hyperlink (`<a>` tag)

Tag **`<a>`** (anchor) adalah tag yang menciptakan tautan (link). Atribut **`href`** wajib ada, ini adalah alamat tujuan tautan.

**Contoh Tautan:**

{{< code lang="html" >}}
<a href="https://www.google.com">Cari di Google</a>

<a href="halaman-tentang.html">Ke Halaman Tentang</a>

<a href="url" target="_blank">Buka Tab Baru</a>
{{< /code >}}

### Menyisipkan Gambar (`<img>` tag)

Tag **`<img>`** digunakan untuk menampilkan gambar. Tag ini _self-closing_ (tidak ada tag penutup). Pastikan mengisi atribut `alt` untuk aksesibilitas dan SEO.

{{< code lang="html" >}}
<img src="assets/foto-profil.jpg" alt="Foto saya sedang tersenyum di pantai" width="300">
{{< /code >}}

---

## Membuat Daftar (List)

Daftar itu bagus untuk membuat konten kamu mudah dicerna.

### 1. Daftar Tidak Berurut (`<ul>`)
Urutannya nggak penting (misalnya daftar belanja). Itemnya ditandai dengan _bullet points_.

{{< code lang="html" >}}
<ul>
    <li>Kopi</li>
    <li>Teh</li>
</ul>
{{< /code >}}

### 2. Daftar Berurut (`<ol>`)
Urutannya penting (misalnya resep, langkah-langkah). Itemnya ditandai dengan angka.

### 3. Daftar Deskripsi (`<dl>`)
Dipakai buat daftar istilah dan penjelasannya (misalnya glosarium).

---

## Tabel HTML

Tabel dipakai untuk menampilkan data tabular, bukan untuk _layout_ halaman.

{{< code lang="html" >}}
<table>
  <thead>
    <tr>
      <th>Nama</th>
      <th>Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Budi</td>
      <td>90</td>
    </tr>
  </tbody>
</table>
{{< /code >}}

* **`<tr>`** (Table Row): Baris.
* **`<th>`** (Table Header): Judul kolom (Tebal & Tengah).
* **`<td>`** (Table Data): Isi data.

---

## Formulir (Forms) Interaktif

_Form_ adalah cara _website_ kamu berinteraksi dengan pengguna (login, pendaftaran, kirim pesan). Semua input harus dibungkus dalam tag `<form>`.

### Elemen Input Dasar

Tag paling serbaguna adalah `<input>`. Jenisnya ditentukan oleh atribut `type`.

{{< code lang="html" >}}
<label for="nama">Nama:</label>
<input type="text" id="nama" placeholder="Masukkan nama lengkap">

<input type="password">

<input type="submit" value="Kirim">
{{< /code >}}

---

## Elemen Semantik di HTML5

Jangan asal pakai `<div>`! HTML5 memperkenalkan tag Semantik. Semantik artinya **bermakna**. Tag semantik memberitahu _browser_ dan mesin pencari, "**Ini adalah bagian apa**" di halamanmu.

{{< box type="info" >}}
**Manfaat Semantik:**
1. **SEO:** Google lebih mudah memahami struktur konten kamu.
2. **Aksesibilitas:** Pengguna alat bantu (screen reader) tahu di mana navigasi dan konten utama.
{{< /box >}}

**Tag Semantik Umum:**
* **`<header>`**: Bagian atas halaman.
* **`<nav>`**: Kumpulan _link_ navigasi.
* **`<main>`**: Konten utama.
* **`<article>`**: Konten artikel blog.
* **`<aside>`**: Sidebar / konten pelengkap.
* **`<footer>`**: Kaki halaman.

---

## Multimedia

Di HTML5, memasukkan video dan audio sangat mudah tanpa plugin tambahan.

{{< code lang="html" >}}
<video controls width="500">
    <source src="intro.mp4" type="video/mp4">
    Browser Anda tidak mendukung tag video.
</video>
{{< /code >}}

---

## Kesimpulan

Selamat! Kamu sudah menyelesaikan tahap paling dasar dan paling penting: **Belajar HTML Dasar**.

Sekarang, coba lihat lagi _website_ pertamamu. Itu bukan lagi **Teks Polos**, tapi sudah menjadi **Website Utuh** yang punya kerangka dan struktur yang solid.

### Langkah Selanjutnya?

Agar website kamu hidup dan berwarna, kamu perlu belajar:

1.  **CSS:** Untuk menghias tampilan (Warna, Font, Layout).
2.  **JavaScript:** Untuk membuat interaksi (Animasi, Tombol berfungsi).

Ingin belajar lebih lanjut? Cek referensi berikut:

{{< btn href="https://developer.mozilla.org/en-US/" type="outline" >}}
Dokumentasi MDN Web Docs
{{< /btn >}}

{{< btn href="https://w3schools.com" type="aksen" >}}
Belajar di W3Schools
{{< /btn >}}