---
title: Arch dan Debian, apa sih bedanya?
date: 2021/10/08
description: Penjelasan singkat mengenai perbedaan antara 2 distribusi Linux yang paling populer di dunia
tag: General, Linux
author: Gabriel Evan
---

# Arch dan Debian, apa sih bedanya?

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic1.png" title="" alt="" data-align="center"/>

## Pendahuluan

Arch dan Debian, adalah 2 distro Linux yang paling populer di dunia. Masing-masing memiliki turunan dengan jumlah yang sangat banyak, bahkan dari turunan tersebut memiliki ketenarannya sendiri, seperti Ubuntu dari Debian dan Manjaro dari Arch. Tetapi, selain perbedaan *package manager* (apt/*aptitude* untuk Debian dan pacman/*package* manager untuk Arch), apa lagi sih yang membedakan kedua distro ini?

## Kesamaan

Sebelum membahas perbedaan, kita lihat terlebih dahulu, kesamaan apa yang ada diantara kedua distro linux ini. Berikut beberapa kesamaan utamanya.

### 1. systemd

Kedua distro sama-sama menggunakan systemd sebagai *default system init daemon* mereka. systemd sendiri adalah sebuah *software* yang dikembangkan oleh Red Hat yang digunakan didalam produk bawaan mereka, Red Hat Enterprise Linux (RHEL) dan produk lain yang lebih sering dikenal, CentOS dan Fedora.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic2.png" title="" alt="" data-align="center"/>

<p align="center">logo systemd</p>

### 2. Linux

Kedua distro sama-sama menggunakan kernel linux dengan sedikit perubahan untuk menyesuaikan kasus penggunaan didalam kedua distro.

### 3. GNU

Kedua distro menggunakan GNU sebagai *system tools* dan *operating system-*nya. Sehingga Debian dan Arch adalah GNU/Linux (atau GNU+Linux).

### 4. AMD64/x86_64

Kedua distro ini sama-sama mendukung arsitektur AMD64 (x86_64).

### 5. Independen

Kedua distro sama-sama independen (tidak berasal dari distro lain) dan *community driven*.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic3.png" title="" alt="" data-align="center"/>

<p align="center">Mini DebConf Regensburg 2021</p>

## Perbedaan

Pada persamaan kedua distro, terlihat bahwa kedua distro ini memiliki banyak kesamaan. Tetapi, kedua distro ini juga memiliki perbedaan yang signifikan, berikut perbedaannya.

### 1. Release Cycle

Debian adalah sebuah distro yang memiliki siklus *release* 2 tahun sekali, sehingga setiap 2 tahun, versi Debian baru akan keluar menggantikan versi yang lama. Dan semua versi Debian akan didukung selama 5 tahun sejak versi tersebut dirilis. Sementara, Arch adalah distro yang memiliki siklus *rolling* *release*. *Rolling* di sini berarti, Arch tidak memiliki versi seperti Debian, karena sistem di dalam Arch akan terus-menerus diperbarui tanpa pembaruan versi besar dari sistem operasinya. Perbedaan ini menyebabkan Arch memiliki *software* yang jauh lebih *up-to-date* bila dibandingkan dengan Debian, di mana apabila sebuah *software* baru dirilis (misal, Gnome 41) Arch akan mendapatkan *software* tersebut dalam beberapa hari atau minggu setelahnya. Sementara pada Debian, Debian *stable* baru akan mendapatkan *software* yang sama beberapa bulan, bahkan beberapa tahun kemudian.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic4.png" title="" alt="" data-align="center"/>

<p align="center">Debian 11 yang dirilis 14 Agustus lalu</p>

### 2. Kecepatan Update

Ketika sebuah *software* di dalam *main repository* Arch ingin melakukan pembaruan, maka pembaruan tersebut akan jauh lebih cepat tiba di tangan *end user*. Sehingga tidak perlu menunggu *update* besar bersama sistem seperti Debian. Hal tersebut memiliki kelebihan dan kekurangannya sendiri. Dengan *Rolling release* di mana setiap program akan terus-menerus mendapatkan *update* kecil, maka kemungkinan *library* atau aplikasi lain terkena dampak error sedikit meningkat, apabila dibandingkan dengan *batch update* seperti Debian. Contoh error ini sendiri di dalam Arch adalah pada saat pacman di-*update* menjadi versi 6, dan tiba *library* baru bernama libalpm versi 13, pamac (*front-end* untuk pacman yang dibuat oleh Manjaro dan di-*maintain* di dalam Arch *User Repository*) mengalami error karena program tersebut tidak *compatible* dengan *library* libaplm versi terbaru yang diluncurkan Arch. Sehingga menjadi 1 bulan perbaikan untuk pamac itu demi mendukung *library* baru yang dikeluarkan oleh Arch.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic5.png" title="" alt="" data-align="center"/>

<p align="center">Laporan Error pamac yang dibuat oleh Frederic Bezies, maintainer pamac-all di AUR</p>

Kemungkinan untuk hal yang sama terjadi di dalam Debian sangatlah kecil, karena di dalam Debian, terdapat banyak ranting perkembangan *software* yang harus dilalui sebelum *software* yang diluncurkan dapat menyentuh Debian *stable*. *Software* harus melewati ranting Experimental, lalu SID *(unstable)*, *testing*, baru menyentuh *stable* dan *old-stable*. Pengecekan ini begitu ketat, bahkan Firefox yang sudah menyentuh versi 91 di Arch, masih menyentuh versi 78 di Debian SID, dan versi 91 di Experimental saja. Sehingga pembaruan tersebut masih membutuhkan waktu yang sangat lama untuk menyentuh Debian SID, apalagi Stable. Pengetesan yang berlangsung sangat lama ini memiliki kelebihan dan kekurangannya sendiri, kekurangan yang dimiliki yang pasti, *software* baru tidak dapat tiba secepat mungkin ke tangan *user*.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic6.png" title="" alt="" data-align="center"/>

<p align="center">KDE Plasma di Debian Stable (11)</p>

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic7.png" title="" alt="" data-align="center"/>

<p align="center">KDE Plasma di Arch stable</p>

#### 3. Versi Library

Berkelanjutan dari kecepatan *update software*, *library* yang digunakan oleh Debian juga sudah lumayan tua bila dibandingkan dengan Arch, sehingga fitur baru yang dapat dinikmati pengguna Arch tidak dapat dinikmati oleh pengguna Debian. *Library* yang tua tersebut, walau sangat stabil dan jarang memberi masalah kepada penggunanya, pastinya akan terasa tua dan sudah meminta untuk diganti dengan versi yang baru. Kelebihan yang ditawarkan adalah stabilitas Debian yang sangat tinggi. Namun bukan berarti Arch tidak stabil, maksud dari stabilitas yang tinggi ini adalah Debian tidak memperlukan *user intervention* sebanyak Arch (walaupun Arch sendiri juga kemungkinan terburuk memperlukan *user intervention* sebanyak 1–2 kali per tahun). *User intervention* untuk melakukan pembenaran sistem ini, tidak termasuk kerusakan yang disebabkan oleh *user* sendiri, melainkan kerusakan yang diakibatkan oleh sistem yang mana *update software* menyebabkan program yang diperbarui tidak dapat berjalan dengan semestinya, seperti kasus Bluez yang sempat menyebabkan perangkat *fresh install* Arch Linux tidak dapat membuat koneksi audio dengan perangkat audio *bluetooth* melalui protokol A2DP (Artikel untuk membenarkan error tersebut terdapat [disini](https://medium.com/porosfilkom/memperbaiki-bluez-yang-tidak-dapat-menggunakan-a2dp-pada-arch-linux-fresh-install-4301548b5327)).

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic8.png" title="" alt="" data-align="center"/>

<p align="center">Kernel 5.11 memberikan HWE (Hardware Enablement) terhadap hardware yang lebih baru. Debian 11 masih menggunakan kernel 5.10 LTS karena lebih stabil. Pada saat artikel ini ditulis Arch telah menggunakan kernel 5.14.</p>

### 4. Arsitektur yang Didukung

Meskipun kedua distro ini mendukung arsitektur AMD64 (x86_64), Debian mendukung lebih banyak arsitektur bila dibandingkan dengan Arch. Arch hanya mendukung 1 arsitektur, AMD64 (x86_64), terdapat Arch Linux *for* ARM, namun versi ini bukan buatan resmi dari Arch, namun buatan komunitas pecinta Arch yang ingin menggunakan Arch Linux di perangkat beraksitektur ARM. Kontras nya, Debian mendukung banyak arsitektur secara *default*. Arsitektur yang didukung diantaranya, AMD64, ARM64, i386, ppc64el, s390x dan masih banyak lagi.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic9.png" title="" alt="" data-align="center"/>

<p align="center">Arsitektur yang didukung Debian</p>

### 5. AUR/MPR

Arch memiliki Arch *User Repository*, dimana merupakan *software repository* terlengkap bila dibandingkan dengan semua distro lain. *Package* apapun yang diinginkan oleh *user*, jika tidak ada di *main repository*, kemungkinan besar akan ada di AUR. Hal ini menyebabkan Arch memiliki koleksi aplikasi terbesar. Debian sendiri memiliki jumlah *package* yang sangat besar pula, diatas 50.000 *packages*. Namun sebagian besar dari *package* tersebut adalah *library* untuk *package* lain. Dan apabila *package* tidak tersedia di *main repository*, pengguna harus menambahkan *repository* secara manual, atau mencari arsip .deb dari internet.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic10.png" title="" alt="" data-align="center"/>

<p align="center">Halaman awal AUR</p>

> Side note : Debian kini memiliki AUR miliknya sendiri (walau tidak resmi) dengan nama MPR (Makedeb Package Repository). Konsep yang digunakan sama dengan AUR, sama-sama menggunakan PKGBUILD. Dengan 2 perbedaan, yaitu AUR menggunakan makepkg dan MPR menggunakan makedeb, serta AUR eksklusif untuk pengguna Arch, sementara MPR dapat digunakan pengguna Arch karena makedeb tersedia di AUR.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic11.png" title="" alt="" data-align="center"/>

<p align="center">Halaman awal MPR</p>

### 6. Instalasi

Proses instalasi Debian jauh lebih mudah untuk pemula bila dibandingkan dengan Arch. Debian memberikan proses instalasi melalui GUI, dan semua setup telah diatur oleh Debian, sehingga setelah sistem terpasang, Debian sudah siap digunakan oleh pengguna. Sementara itu, Arch mengharuskan penggunanya untuk mengetahui apa yang dibutuhkan untuk membuat sistemnya berjalan. Hal ini dikarenakan, Arch tidak memasang paket apapun secara *default*. Hal ini memberikan kekebasan bagi pengguna yang mengerti bagaimana sebuah sistem harus diatur, namun akan memberikan tantangan dan kebingungan yang berlebih bagi pengguna awam. Namun dengan adanya ArchWiki, yang menyebabkan Arch menjadi salah satu sistem operasi yang paling terdokumentasi, pengguna dapat mencari tutorial dan bacaan ilmu dengan mudah. Debian juga memiliki DebianWiki, namun ArchWiki memiliki informasi lebih, bahkan konfigurasi per-*device*

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic12.png" title="" alt="" data-align="center"/>

<p align="center">Debian Live menggunakan Calamares</p>

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic13.png" title="" alt="" data-align="center"/>

<p align="center">ArchISO menggunakan tty</p>

### 7. Prinsip

Arch mengikuti prinsip KISS *(Keep It Simple Stupid)*. Di mana di dalam Arch, segala cara akan diambil demi mencapai solusi yang paling sederhana demi mencapai prinsip tersebut. Debian tidak mengikuti prinsip KISS (dapat penjadi plus apabila pengguna tidak ingin menggunakan *software proprietary* baik secara eksplisit maupun sebagai dependensi).

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Arch%20dan%20Debian%2C%20apa%20sih%C2%A0bedanya%3F/pic14.png" title="" alt="" data-align="center"/>

<p align="center">Prinsip KISS Arch Linux. dan makepkg.</p>

### 8. Ketersediaan Software Proprietary

Karena prinsip KISS, Arch tidak ragu untuk memasukkan *package*/program *closed source* dan *proprietary* ke dalam *main repository-*nya, Seperti Discord. Hal ini tidak terjadi di dalam Debian dan distro lain yang tidak menganut KISS. Sehingga untuk memasang program *proprietary*, diharuskan memasang program tersebut secara manual dengan mengunduh arsip .deb di internet atau memasukkan *repository* dari program yang diinginkan.

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