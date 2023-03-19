---
title: Arch dan Debian, apa sih bedanya?
date: 2021/10/08
description: Penjelasan singkat mengenai perbedaan antara 2 distribusi Linux yang paling populer di dunia
tag: General, Linux
author: Gabriel Evan
---

# Arch dan Debian, apa sih bedanya?

<img src="/public/images/Arch dan Debian, apa sih bedanya?/pic1.png" title="" alt="" data-align="center"/>

## Pendahuluan

Arch dan Debian, adalah 2 distro Linux yang paling populer di dunia. Masing-masing memiliki turunan dengan jumlah yang sangat banyak, bahkan dari turunan tersebut memiliki ketenarannya sendiri, seperti Ubuntu dari Debian dan Manjaro dari Arch. Tetapi, selain perbedaan _package manager_ (apt/_aptitude_ untuk Debian dan pacman/_package_ manager untuk Arch), apa lagi sih yang membedakan kedua distro ini?

## Kesamaan

Sebelum membahas perbedaan, kita lihat terlebih dahulu, kesamaan apa yang ada diantara kedua distro linux ini. Berikut beberapa kesamaan utamanya.

### 1. systemd

Kedua distro sama-sama menggunakan systemd sebagai _default system init daemon_ mereka. systemd sendiri adalah sebuah _software_ yang dikembangkan oleh Red Hat yang digunakan didalam produk bawaan mereka, Red Hat Enterprise Linux (RHEL) dan produk lain yang lebih sering dikenal, CentOS dan Fedora.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic2.png" title="" alt="" data-align="center"/>

<p align="center">logo systemd</p>

### 2. Linux

Kedua distro sama-sama menggunakan kernel linux dengan sedikit perubahan untuk menyesuaikan kasus penggunaan didalam kedua distro.

### 3. GNU

Kedua distro menggunakan GNU sebagai _system tools_ dan *operating system-*nya. Sehingga Debian dan Arch adalah GNU/Linux (atau GNU+Linux).

### 4. AMD64/x86_64

Kedua distro ini sama-sama mendukung arsitektur AMD64 (x86_64).

### 5. Independen

Kedua distro sama-sama independen (tidak berasal dari distro lain) dan _community driven_.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic3.png" title="" alt="" data-align="center"/>

<p align="center">Mini DebConf Regensburg 2021</p>

## Perbedaan

Pada persamaan kedua distro, terlihat bahwa kedua distro ini memiliki banyak kesamaan. Tetapi, kedua distro ini juga memiliki perbedaan yang signifikan, berikut perbedaannya.

### 1. Release Cycle

Debian adalah sebuah distro yang memiliki siklus _release_ 2 tahun sekali, sehingga setiap 2 tahun, versi Debian baru akan keluar menggantikan versi yang lama. Dan semua versi Debian akan didukung selama 5 tahun sejak versi tersebut dirilis. Sementara, Arch adalah distro yang memiliki siklus _rolling_ _release_. _Rolling_ di sini berarti, Arch tidak memiliki versi seperti Debian, karena sistem di dalam Arch akan terus-menerus diperbarui tanpa pembaruan versi besar dari sistem operasinya. Perbedaan ini menyebabkan Arch memiliki _software_ yang jauh lebih _up-to-date_ bila dibandingkan dengan Debian, di mana apabila sebuah _software_ baru dirilis (misal, Gnome 41) Arch akan mendapatkan _software_ tersebut dalam beberapa hari atau minggu setelahnya. Sementara pada Debian, Debian _stable_ baru akan mendapatkan _software_ yang sama beberapa bulan, bahkan beberapa tahun kemudian.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic4.png" title="" alt="" data-align="center"/>

<p align="center">Debian 11 yang dirilis 14 Agustus lalu</p>

### 2. Kecepatan Update

Ketika sebuah _software_ di dalam _main repository_ Arch ingin melakukan pembaruan, maka pembaruan tersebut akan jauh lebih cepat tiba di tangan _end user_. Sehingga tidak perlu menunggu _update_ besar bersama sistem seperti Debian. Hal tersebut memiliki kelebihan dan kekurangannya sendiri. Dengan _Rolling release_ di mana setiap program akan terus-menerus mendapatkan _update_ kecil, maka kemungkinan _library_ atau aplikasi lain terkena dampak error sedikit meningkat, apabila dibandingkan dengan _batch update_ seperti Debian. Contoh error ini sendiri di dalam Arch adalah pada saat pacman di-_update_ menjadi versi 6, dan tiba _library_ baru bernama libalpm versi 13, pamac (_front-end_ untuk pacman yang dibuat oleh Manjaro dan di-_maintain_ di dalam Arch _User Repository_) mengalami error karena program tersebut tidak _compatible_ dengan _library_ libaplm versi terbaru yang diluncurkan Arch. Sehingga menjadi 1 bulan perbaikan untuk pamac itu demi mendukung _library_ baru yang dikeluarkan oleh Arch.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic5.png" title="" alt="" data-align="center"/>

<p align="center">Laporan Error pamac yang dibuat oleh Frederic Bezies, maintainer pamac-all di AUR</p>

Kemungkinan untuk hal yang sama terjadi di dalam Debian sangatlah kecil, karena di dalam Debian, terdapat banyak ranting perkembangan _software_ yang harus dilalui sebelum _software_ yang diluncurkan dapat menyentuh Debian _stable_. _Software_ harus melewati ranting Experimental, lalu SID _(unstable)_, _testing_, baru menyentuh _stable_ dan _old-stable_. Pengecekan ini begitu ketat, bahkan Firefox yang sudah menyentuh versi 91 di Arch, masih menyentuh versi 78 di Debian SID, dan versi 91 di Experimental saja. Sehingga pembaruan tersebut masih membutuhkan waktu yang sangat lama untuk menyentuh Debian SID, apalagi Stable. Pengetesan yang berlangsung sangat lama ini memiliki kelebihan dan kekurangannya sendiri, kekurangan yang dimiliki yang pasti, _software_ baru tidak dapat tiba secepat mungkin ke tangan _user_.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic6.png" title="" alt="" data-align="center"/>

<p align="center">KDE Plasma di Debian Stable (11)</p>

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic7.png" title="" alt="" data-align="center"/>

<p align="center">KDE Plasma di Arch stable</p>

#### 3. Versi Library

Berkelanjutan dari kecepatan _update software_, _library_ yang digunakan oleh Debian juga sudah lumayan tua bila dibandingkan dengan Arch, sehingga fitur baru yang dapat dinikmati pengguna Arch tidak dapat dinikmati oleh pengguna Debian. _Library_ yang tua tersebut, walau sangat stabil dan jarang memberi masalah kepada penggunanya, pastinya akan terasa tua dan sudah meminta untuk diganti dengan versi yang baru. Kelebihan yang ditawarkan adalah stabilitas Debian yang sangat tinggi. Namun bukan berarti Arch tidak stabil, maksud dari stabilitas yang tinggi ini adalah Debian tidak memperlukan _user intervention_ sebanyak Arch (walaupun Arch sendiri juga kemungkinan terburuk memperlukan _user intervention_ sebanyak 1–2 kali per tahun). _User intervention_ untuk melakukan pembenaran sistem ini, tidak termasuk kerusakan yang disebabkan oleh _user_ sendiri, melainkan kerusakan yang diakibatkan oleh sistem yang mana _update software_ menyebabkan program yang diperbarui tidak dapat berjalan dengan semestinya, seperti kasus Bluez yang sempat menyebabkan perangkat _fresh install_ Arch Linux tidak dapat membuat koneksi audio dengan perangkat audio _bluetooth_ melalui protokol A2DP (Artikel untuk membenarkan error tersebut terdapat [disini](https://medium.com/porosfilkom/memperbaiki-bluez-yang-tidak-dapat-menggunakan-a2dp-pada-arch-linux-fresh-install-4301548b5327)).

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic8.png" title="" alt="" data-align="center"/>

<p align="center">Kernel 5.11 memberikan HWE (Hardware Enablement) terhadap hardware yang lebih baru. Debian 11 masih menggunakan kernel 5.10 LTS karena lebih stabil. Pada saat artikel ini ditulis Arch telah menggunakan kernel 5.14.</p>

### 4. Arsitektur yang Didukung

Meskipun kedua distro ini mendukung arsitektur AMD64 (x86*64), Debian mendukung lebih banyak arsitektur bila dibandingkan dengan Arch. Arch hanya mendukung 1 arsitektur, AMD64 (x86_64), terdapat Arch Linux \_for* ARM, namun versi ini bukan buatan resmi dari Arch, namun buatan komunitas pecinta Arch yang ingin menggunakan Arch Linux di perangkat beraksitektur ARM. Kontras nya, Debian mendukung banyak arsitektur secara _default_. Arsitektur yang didukung diantaranya, AMD64, ARM64, i386, ppc64el, s390x dan masih banyak lagi.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic9.png" title="" alt="" data-align="center"/>

<p align="center">Arsitektur yang didukung Debian</p>

### 5. AUR/MPR

Arch memiliki Arch _User Repository_, dimana merupakan _software repository_ terlengkap bila dibandingkan dengan semua distro lain. _Package_ apapun yang diinginkan oleh _user_, jika tidak ada di _main repository_, kemungkinan besar akan ada di AUR. Hal ini menyebabkan Arch memiliki koleksi aplikasi terbesar. Debian sendiri memiliki jumlah _package_ yang sangat besar pula, diatas 50.000 _packages_. Namun sebagian besar dari _package_ tersebut adalah _library_ untuk _package_ lain. Dan apabila _package_ tidak tersedia di _main repository_, pengguna harus menambahkan _repository_ secara manual, atau mencari arsip .deb dari internet.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic10.png" title="" alt="" data-align="center"/>

<p align="center">Halaman awal AUR</p>

> Side note : Debian kini memiliki AUR miliknya sendiri (walau tidak resmi) dengan nama MPR (Makedeb Package Repository). Konsep yang digunakan sama dengan AUR, sama-sama menggunakan PKGBUILD. Dengan 2 perbedaan, yaitu AUR menggunakan makepkg dan MPR menggunakan makedeb, serta AUR eksklusif untuk pengguna Arch, sementara MPR dapat digunakan pengguna Arch karena makedeb tersedia di AUR.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic11.png" title="" alt="" data-align="center"/>

<p align="center">Halaman awal MPR</p>

### 6. Instalasi

Proses instalasi Debian jauh lebih mudah untuk pemula bila dibandingkan dengan Arch. Debian memberikan proses instalasi melalui GUI, dan semua setup telah diatur oleh Debian, sehingga setelah sistem terpasang, Debian sudah siap digunakan oleh pengguna. Sementara itu, Arch mengharuskan penggunanya untuk mengetahui apa yang dibutuhkan untuk membuat sistemnya berjalan. Hal ini dikarenakan, Arch tidak memasang paket apapun secara _default_. Hal ini memberikan kekebasan bagi pengguna yang mengerti bagaimana sebuah sistem harus diatur, namun akan memberikan tantangan dan kebingungan yang berlebih bagi pengguna awam. Namun dengan adanya ArchWiki, yang menyebabkan Arch menjadi salah satu sistem operasi yang paling terdokumentasi, pengguna dapat mencari tutorial dan bacaan ilmu dengan mudah. Debian juga memiliki DebianWiki, namun ArchWiki memiliki informasi lebih, bahkan konfigurasi per-_device_

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic12.png" title="" alt="" data-align="center"/>

<p align="center">Debian Live menggunakan Calamares</p>

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic13.png" title="" alt="" data-align="center"/>

<p align="center">ArchISO menggunakan tty</p>

### 7. Prinsip

Arch mengikuti prinsip KISS _(Keep It Simple Stupid)_. Di mana di dalam Arch, segala cara akan diambil demi mencapai solusi yang paling sederhana demi mencapai prinsip tersebut. Debian tidak mengikuti prinsip KISS (dapat penjadi plus apabila pengguna tidak ingin menggunakan _software proprietary_ baik secara eksplisit maupun sebagai dependensi).

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic14.png" title="" alt="" data-align="center"/>

<p align="center">Prinsip KISS Arch Linux. dan makepkg.</p>

### 8. Ketersediaan Software Proprietary

Karena prinsip KISS, Arch tidak ragu untuk memasukkan _package_/program _closed source_ dan _proprietary_ ke dalam *main repository-*nya, Seperti Discord. Hal ini tidak terjadi di dalam Debian dan distro lain yang tidak menganut KISS. Sehingga untuk memasang program _proprietary_, diharuskan memasang program tersebut secara manual dengan mengunduh arsip .deb di internet atau memasukkan _repository_ dari program yang diinginkan.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic15.png" title="" alt="" data-align="center"/>

<p align="center">Discord yang ada didalam main repository</p>

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic16.png" title="" alt="" data-align="center"/>

<p align="center">Steam yang sudah tersedia tanpa perlu mencari repository tambahan “Non-Free”. dan dapat dilihat AUR direkomendasikan apabila pengguna tidak dapat menemukan program yang dicari (misal : google-chrome, visual-studio-code, timeshift).</p>

## Kesimpulan

Jadi, begitulah persamaan dan perbedaan diantara kedua distro linux ini. Arch dan Debian memiliki target audiens yang berbeda. Sehingga membandingkan dengan “Manakah distro yang terbaik?” kurang masuk akal bila ditujukan terhadap kedua distro ini. Apabila ingin memilih diantara Arch atau Debian, pikirkan terlebih dahulu, untuk apa komputer akan digunakan nantinya.

## Referensi

- archlinux.org, A simple, lightweight distribution, diakses pada (2021–10–05) dari https://archlinux.org/about
- aur.archlinux.org, AUR Home, diakses pada (2021–10–05) dari https://aur.archlinux.org
- debian.org, About Debian, diakses pada (2021–10–02) dari https://www.debian.org/intro/about
- fossbytes.com, Linus Torvalds Releases Linux Kernel 5.11: Here’s What’s New, diakses pada (2021–10–04) dari https://fossbytes.com/linus-torvalds-releases-linux-kernel-5-11/
- gitlab.manjaro.org, pamac cannot be build against libalpm 13 provided by pacman 6.0, diakses pada (2021–09–30) dari https://gitlab.manjaro.org/applications/pamac/-/issues/1047
- mpr.hunterwittenborn.com, MPR Home, diakses pada (2021–10–05) dari https://mpr.hunterwittenborn.com
- wiki.archlinux.org, Arch terminology, diakses pada (2021–10–07) dari https://wiki.archlinux.org/title/Arch_terminology
