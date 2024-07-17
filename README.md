<div align="center">
  <img src="./image/logo.svg" alt="Split Width Logo" width="220"/>
  <h1>Split Width</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/split-width/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/split-width/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/split-width/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/split-width/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-width"><img src="https://img.shields.io/npm/v/@barudakrosul/split-width" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/split-width" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-width"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fsplit-width" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/split-width/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/split-width?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/split-width/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/split-width?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/split-width/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/split-width" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Berkontribusi](#berkontribusi)
6. [Lisensi](#lisensi)
7. [Penghargaan](#penghargaan)
8. [Donasi](#donasi)
9. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Split Width adalah sebuah ekstensi JavaScript yang membagi sebuah string menjadi array dari substring dengan lebar tertentu.

## Fitur

Split Width menawarkan fitur-fitur berikut:

- Membagi string menjadi array substring dengan lebar tertentu.
- Dapat di integrasikan ke dalam kode TypeScript.

## Instalasi

Untuk menginstal Split Width secara lokal, ikuti langkah instalasi ini:

```shell
npm install @barudakrosul/split-width
```

## Penggunaan

Untuk memulai menggunakan Split Width, import modulnya terlebih dahulu:

**1\. CommonJS**
```javascript
require("@barudakrosul/split-width");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import "@barudakrosul/split-width";
```

**3\. TypeScript**
```typescript
import "@barudakrosul/split-width";
```

Contoh penggunaan:

```javascript
let text = "HelloWorld!";
console.log(text.splitWidth(5));

// Result:
// [ 'Hello', 'World', '!' ]
```

```javascript
let text = "This is an example string.";
console.log(text.splitWidth(5));

// Result:
// [ 'This ', 'is an', ' exam', 'ple s', 'tring', '.' ]
```

## Berkontribusi

Kontribusi pada Split Width sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Split Width dilisensikan di bawah Lisensi Apache-2.0 - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Split Width menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- [@FajarKim](https://github.com/FajarKim) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Donasi

Kami sangat menghargai dukungan Anda untuk terus mengembangkan proyek ini. Jika Anda merasa proyek ini bermanfaat, Anda dapat mendukung kami dengan donasi:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Setiap donasi, berapapun jumlahnya, sangat berarti bagi kami. Terima kasih atas dukungan Anda! ❤️

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Split Width dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/split-width/releases).

Terima kasih telah memilih Split Width! Kami bertujuan untuk memberikan solusi yang mudah untuk membagi string menjadi array substring dengan lebar tertentu.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)