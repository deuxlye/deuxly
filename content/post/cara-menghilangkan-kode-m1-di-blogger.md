---
title: "Cara Menghilangkan Kode ?m=1 di Blogger, Permanen!"
date: 2025-11-08
draft: false
tags: ["Blogger"]
slug: "cara-menghilangkan-kode-m1-di-blogger"
image: "https://deuxlye.github.io/hosting-gambar/cara-hapus-kode-m-1-blogger.png"
author: "Deuxly"
description: "Buat kamu yang ngeblog pakai Blogger (Blogspot), pasti udah sering banget kan lihat kode ?m=1 nongol di belakang URL postinganmu?"
---

Buat kamu yang _ngeblog_ pakai **Blogger (Blogspot)**, pasti udah sering banget kan lihat kode **`?m=1`** nongol di belakang URL postinganmu? 

Nah, meskipun kodenya kecil, ternyata dia bisa jadi **biang kerok** yang bikin **SEO blogmu kurang oke**, mendingan kita _hilangin_ aja.

## Sebenarnya, Kode `?m=1` Itu Buat Apa Sih?

Gini, kode **`?=m1`** itu muncul karena dia lagi **ngasih tahu** kalau blog kamu lagi diakses pakai **perangkat _mobile_ (HP/Smartphone)**.

Kodenya cuma muncul pas kamu buka dari HP. Kalau dari **Laptop/Desktop**, dia bakalan _ngumpet_ alias nggak muncul. Simpelnya, dia kayak penanda kalau kamu lagi "Mode Mobile."

* * *

## Waduh, Apa Dampak Negatifnya buat SEO?

Kode kecil ini ternyata punya efek yang bikin repot:

- **Konten Jadi Terindikasi Duplikat:** Karena URL-nya jadi dua versi (`url-postingan` dan `url-postingan?m=1`), Google bisa anggap kamu punya **dua konten yang sama persis**! Ini bisa ganggu _ranking_ blog kamu.

- **Kurang Enak Dilihat:** Secara tampilan, URL yang ada tambahan kode itu kelihatan **kurang bersih** dan agak mengganggu.

- **Ribet di Google Search Console (GSC):** Kadang, kamu bakal **susah _submit_ URL** ke [GSC](https://search.google.com/) karena sering terjadi kesalahan pengalihan (_redirection error_).

* * *

## Keuntungan Kalau Kode Itu Dihapus?

Dengan menghapus si kode bandel ini, kamu bakal dapat banyak untung:

- **SEO Jadi Lebih Mudah:** _Ranking_ blogmu bisa **meningkat** karena Google jadi lebih jelas sama URL utamamu.

- **Konten Duplikat Berkurang:** Masalah konten yang dianggap ganda langsung **beres**.

- **Blog Terlihat Lebih Keren:** URL-mu jadi **bersih dan profesional**.

- **GSC Jadi Lancar:** _Submit_ URL di Google Search Console ngga bakal bikin kamu pusing lagi.

* * *

## Cara Gampang Menghilangkan Kode `?m=1`

Nggak perlu pusing, [cara ngilangin kode ?m=1](http://deuxly.id/cara-menghilangkan-kode-m1-di-blogger) gampang kok! Ikutin langkah-langkah di bawah ini:

1. **Masuk ke Akun Blogger:** _Login_ ke akun **Blogspot/Blogger** kamu.

3. **Buka Menu Tema:** Pilih **Tema** atau **Template** blog kamu.

5. **Klik Edit HTML:** Lanjut klik tombol **EDIT HTML**.

7. **Tempel Kode Sakti:** Cari kode **`</body>`** (atau `&lt;/body&gt;`). Setelah ketemu, _copy_ dan **tempel** _script_ di bawah ini **tepat di atas** kode `</body>` tadi.

```javascript
<script type='text/javascript'>
var deux1 = window.location.toString();
if (deux1.indexOf("?m=1","?m=1") > 0) {
var clean_ndeuxly = deux1.substring(0, deux1.indexOf("?m=1"));
window.history.replaceState({}, document.title, clean_ndeuxly);};
</script>
```

5. **Simpan dan Cek:** Jangan lupa **Simpan (Save)** hasilnya! Setelah itu, coba buka blog kamu dari HP. Kalau langkahnya benar, saya jamin kode **`?=m1`** itu langsung **kabur**!

* * *

## Beres!

Nah, sekarang masalah kode yang bikin pusing itu udah kita beresin! Blogmu jadi lebih **sehat** dan **ramah SEO**.

Kalau kamu nemu **kendala** atau masih ada yang **dibingungin**, langsung aja _comment_ di bawah, ya! Saya bantu jawab.
