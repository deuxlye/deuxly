---
title: "Cara Menghilangkan Kode ?m=1 di Blogger, Permanen!"
date: 2025-11-08T09:00:00+07:00
draft: false
featured: false
tags: ["Blogger", "SEO"]
slug: "cara-menghilangkan-kode-m1-di-blogger"
image: "https://deuxly.github.io/hosting-gambar/cara-hapus-kode-m-1-blogger.png"
author: "deuxly"
description: "Buat kamu yang ngeblog pakai Blogger (Blogspot), pasti udah sering banget kan lihat kode ?m=1 nongol di belakang URL postinganmu?"
---

Buat kamu yang _ngeblog_ pakai **Blogger (Blogspot)**, pasti udah sering banget kan lihat kode **`?m=1`** nongol di belakang URL postinganmu? 

{{< box type="warning" >}}
Meskipun kodenya kecil, ternyata dia bisa jadi **biang kerok** yang bikin **SEO blogmu kurang oke**. Mendingan kita _hilangin_ aja!
{{< /box >}}

{{< toc >}}

## Sebenarnya, Kode `?m=1` Itu Buat Apa Sih?

Gini, kode **`?m=1`** itu muncul karena dia lagi **ngasih tahu** kalau blog kamu lagi diakses pakai **perangkat _mobile_ (HP/Smartphone)**.

Kodenya cuma muncul pas kamu buka dari HP. Kalau dari **Laptop/Desktop**, dia bakalan _ngumpet_ alias nggak muncul. Simpelnya, dia kayak penanda kalau kamu lagi "Mode Mobile."

---

## Waduh, Apa Dampak Negatifnya buat SEO?

Kode kecil ini ternyata punya efek yang bikin repot, lho:

1.  **Konten Jadi Terindikasi Duplikat:** Karena URL-nya jadi dua versi (`url-postingan` dan `url-postingan?m=1`), Google bisa anggap kamu punya **dua konten yang sama persis**! Ini bisa ganggu _ranking_ blog kamu.
2.  **Kurang Enak Dilihat:** Secara tampilan, URL yang ada tambahan kode itu kelihatan **kurang bersih** dan agak mengganggu.
3.  **Ribet di Google Search Console (GSC):** Kadang, kamu bakal **susah _submit_ URL** ke GSC karena sering terjadi kesalahan pengalihan (_redirection error_).

---

## Keuntungan Kalau Kode Itu Dihapus?

Dengan menghapus si kode bandel ini, kamu bakal dapat banyak untung:

{{< box type="success" >}}
* **SEO Jadi Lebih Mudah:** _Ranking_ blogmu bisa **meningkat** karena Google jadi lebih jelas sama URL utamamu.
* **Konten Duplikat Berkurang:** Masalah konten yang dianggap ganda langsung **beres**.
* **Blog Terlihat Lebih Keren:** URL-mu jadi **bersih dan profesional**.
* **GSC Jadi Lancar:** _Submit_ URL di Google Search Console ngga bakal bikin kamu pusing lagi.
{{< /box >}}

---

## Cara Gampang Menghilangkan Kode `?m=1`

Nggak perlu pusing, caranya gampang kok! Ikutin langkah-langkah di bawah ini:

1.  **Masuk ke Akun Blogger:** _Login_ ke akun **Blogspot/Blogger** kamu.
2.  **Buka Menu Tema:** Pilih **Tema** atau **Template** blog kamu.
3.  **Klik Edit HTML:** Lanjut klik tombol **EDIT HTML**.
4.  **Tempel Kode Sakti:** Cari kode **`</body>`** (atau `&lt;/body&gt;`). Setelah ketemu, _copy_ dan **tempel** _script_ di bawah ini **tepat di atas** kode `</body>` tadi.

{{< code lang="html" title="Paste di atas </body>" >}}
<script type='text/javascript'>
/*<![CDATA[*/
var deux1 = window.location.toString();
if (deux1.indexOf("?m=1","?m=1") > 0) {
  var clean_ndeuxly = deux1.substring(0, deux1.indexOf("?m=1"));
  window.history.replaceState({}, document.title, clean_ndeuxly);
}
/*]]>*/
</script>
{{< /code >}}

5.  **Simpan dan Cek:** Jangan lupa **Simpan (Save)** hasilnya!

{{< box type="tips" >}}
**Cara Cek:** Buka blog kamu dari HP/Smartphone. Kalau langkahnya benar, kode `?m=1` di address bar browser akan otomatis hilang dalam sekejap.
{{< /box >}}

---

## Beres!

Nah, sekarang masalah kode yang bikin pusing itu udah kita beresin! Blogmu jadi lebih **sehat** dan **ramah SEO**.

Kalau kamu nemu **kendala** atau masih ada yang **dibingungin**, langsung aja kontak saya atau cek tutorial Blogger lainnya di bawah ini.

{{< btn href="/tags/blogger" type="aksen" >}}
Lihat Tutorial Blogger Lainnya
{{< /btn >}}