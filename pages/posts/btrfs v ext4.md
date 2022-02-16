---
title: BTRFS — Waktunya Meninggalkan EXT4?
date: 2021/08/07
description: Pengenalan teknologi Btrfs, Next Gen Filesystem Linux
tag: General, Linux, Filesystem
author: Gabriel Evan
---

### BTRFS — Waktunya Meninggalkan EXT4?

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/BTRFS%E2%80%8A-%E2%80%8AWaktunya%20Meninggalkan%20EXT4%3F/pic1.png" title="" alt="" data-align="center"/>

<p align="center">Logo BTRFS</p>

### Apa itu BTRFS?

BTRFS (*B-Tree FileSystem*) adalah sebuah *FileSystem* modern berbasis *Copy on Write* (CoW). *FileSystem* ini pada awalnya didesain oleh Oracle sejak tahun 2007 dan diciptakan dengan tujuan memberikan implementasi fitur lanjutan dan memudahkan administrasi reparasi data. Fitur utama yang diunggulkan oleh BTRFS di antaranya adalah *Subvolume, snapshot, software based* RAID, dan *checksum* untuk data dan metadata untuk reparasi otomatis.

### Apakah Fitur pada BTRFS Dapat Berguna Bagi Pengguna Akhir?

Dimulai dengan *Subvolume.* Dalam sebuah partisi yang menggunakan BTRFS, dapat dibuat banyak “*Subvolume*” tempat data dapat disimpan. Kemampuan ini memyebabkan dapat dilakukan pemasangan banyak sistem operasi di dalam partisi yang sama (misal Debian pada *subvolume* @, *Arch* pada @2, dan *Fedora* pada *subvolume @*3) dan nama dari *subvolume* dapat ditentukan secara bebas oleh pengguna, dengan metode penamaan paling umum berawalan “@” untuk *root*, dan diberi nama setelah nya untuk *mount* lain, seperti @*home* dan @*swap*.

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/BTRFS%E2%80%8A-%E2%80%8AWaktunya%20Meninggalkan%20EXT4%3F/pic2.png" title="" alt="" data-align="center"/>

<p align="center">*Subvolume* pada BTRFS</p>

Selanjutnya, *snapshot*. BTRFS dapat membuat *snapshot* dari sistem yang menggunakan BTRFS sebagai *FileSystem-*nya. *Snapshot* ini akan dibuat secara instan dan berukuran sangat kecil apabila dibandingkan dengan EXT4 yang menggunakan *rsync*. Hal ini dapat terjadi, karena BTRFS merupakan *FileSystem* yang berbasis *Copy on Write*. Sehingga data hanya akan disimpan ke dalam *snapshot* apabila terjadi perubahan pada file yang ada pada saat *snapshot* dibuat, *Byte* per *Byte*. Oleh karena itu, proses pembuatan *snapshot* akan menjadi jauh lebih cepat daripada LVM (*Logical Volume Manager*).

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/BTRFS%E2%80%8A-%E2%80%8AWaktunya%20Meninggalkan%20EXT4%3F/pic3.png" title="" alt="" data-align="center"/>

<p align="center">Visualisasi Snapshot pada BTRFS</p>

Misalkan, seorang pengguna membuat *snapshot* yang di dalamnya terdapat 100 *file*, *snapshot* tersebut hanya akan membuat [*reflink*](https://btrfs.wiki.kernel.org/index.php/Deduplication) di mana akan ada 2 *file* yang menunjuk pada blok data yang sama di dalam sebuah volume. 2 *file* tersebut akan terpisah hanya pada saat blok data asli terjadi perubahan, entah dari *file* asli maupun *snapshot*, apabila terjadi perubahan sekecil apapun, maka *file* akan terpisah dan data baru akan disimpan ke dalam blok baru. Karena *snapshot* yang dibuat ini memiliki deduplikasi *Byte* per *Byte*, maka *file* yang telah disimpan dapat dikembalikan seperti semula apabila diperlukan. Restorasi data juga hanya akan memakan waktu beberapa detik saja, sebesar apapun data yang telah terpisah. Sehingga BTRFS dapat menjadi tambahan jaminan *peace of mind* ketika akan melakukan eksperimen di dalam sistem operasi yang dapat menyebabkan kerusakan sistem.

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/BTRFS%E2%80%8A-%E2%80%8AWaktunya%20Meninggalkan%20EXT4%3F/pic4.png" title="" alt="" data-align="center"/>

<p align="center">Cara Kerja CoW</p>

Selanjutnya, *software based* RAID, dengan adanya dukungan langsung untuk RAID 0, 1, dan 10, pengguna dapat menggunakan RAID di dalam sistemnya tanpa memerlukan kehadiran RAID *controller* terpisah di dalam *hardware* komputer. Namun, BTRFS masih belum mendukung RAID 5 dan 6 secara seutuhnya, sehingga masih belum dapat direkomendasikan untuk digunakan sebagai media penyimpanan data dengan reliabilitas tinggi.

Kelebihan bonusnya, BTRFS mendukung konversi EXT dan ReiserFS menjadi BTRFS tanpa diperlukan format partisi, namun perubahan ini kurang dapat direkomendasikan, terutama pada partisi sistem. Karena, dalam memanfaatkan fitur *snapshot* pada *root*, dibutuhkan *subvolume* untuk penempatan *root*. Proses ini dapat dilakukan secara manual melalui live cd dan memindahkan seluruh data di dalam *root* (selain *home*, yang kontennya harus dipindahkan ke dalam *subvolume* @*home*) ke dalam *subvolume* @ (atau nama lain selama mudah diingat). Dilakukan modifikasi ke dalam *fstab* dari sistem, dengan menambahkan opsi *subvol*=*namasubvol*. Namun lebih mudah untuk melakukan *fresh install* dari awal.

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/BTRFS%E2%80%8A-%E2%80%8AWaktunya%20Meninggalkan%20EXT4%3F/pic5.png" title="" alt="" data-align="center"/>

<p align="center">Modifikasi Mounting Point pada fstab</p>

Terakhir, reparasi otomatis. BTRFS memiliki *checksum* untuk setiap data dan metadata dalam mendeteksi kerusakan data dan melakukan perbaikan terhadap data tersebut. Pada saat BTRFS menemukan kerusakan data, maka dilakukan pengecekan inkonsistensi *checksum*. Pada sistem yang menggunakan *mirroring* dengan RAID 1 dan 10, BTRFS akan membaca data yang benar, dan data yang rusak akan diganti dengan data yang benar dari media penyimpanan lain. Pada sistem yang tidak menggunakan *mirroring*, maka akan dilakukan penghapusan data rusak dan dilakukan *return Error Input/Output* (EIO).

Dengan BTRFS *scrub*, BTRFS membaca seluruh data yang ada dan memperbaiki data yang rusak. Pengecekan ini dapat dilakukan saat sistem *online*, sehingga tidak diperlukan *downtime* pada sistem.

### Kesimpulan

Dengan demikian, dapat dilihat bahwa fitur yang disediakan oleh BTRFS sangat berguna untuk pengguna akhir, terutama *snapshot* dan reparasi otomatis data dengan *checksum*. Terutama dengan EXT4 yang memang dari awal hanya diciptakan sebagai “*stop-gap*” pada tahun 2008 oleh pengembang utama EXT3 dan EXT4 *FileSystem*, [Theodore Ts’o](https://en.wikipedia.org/wiki/Theodore_Ts%27o). Sudah saatnya meninggalkan EXT4 dan berpindah menggunakan BTRFS sebagai *default*. Dengan adanya peralatan seperti *Timeshift* yang memepermudah pembuatan *snapshot* BTRFS untuk pengguna yang masih awam dan kurang paham dengan pengoperasian terminal, serta stabilitas BTRFS yang sudah sangat baik, sudah semakin sedikit alasan untuk tetap menggunakan EXT4 sebagai *default FileSystem* dalam sistem yang digunakan.

### Referensi

- btrfs.wiki.kernel.org, Main Page, diakses pada (2021–08–06) dari [btrfs Wiki](https://btrfs.wiki.kernel.org/index.php/Main_Page)
- phoronix.com, Fujitsu Developer Talks Up Btrfs File-System, Declares It Ready To Use, diakses pada (2021–08–06) dari [Fujitsu Developer Talks Up Btrfs File-System, Declares It Ready To Use - Phoronix](https://www.phoronix.com/scan.php?page=news_item&px=MTgzMzM)
- wikipedia.org, BTRFS, diakses pada (2021–08–04) dari https://en.wikipedia.org/wiki/Btrfs
- wiki.archlinux.org, BTRFS, diakses pada (2021–08–04) dari [Btrfs - ArchWiki](https://wiki.archlinux.org/title/Btrfs)
