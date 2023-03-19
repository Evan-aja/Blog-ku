---
title: Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows
date: 2021/10/20
description: Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows
tag: General, Linux, Dual Boot, Windows
author: Gabriel Evan
---

# Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic1.png" title="" alt="" data-align="center"/>

<p align="center">Ubuntu</p>

# Pendahuluan

Ubuntu. Sebuah distribusi Linux yang sangat populer di kalangan pemula. Untuk merayakan ulang tahun Ubuntu ke-16 pada 20 Oktober 2021 ini, saya akan memaparkan bagaimana cara memasang Ubuntu 21.10 Impish Indri dengan cara *dual boot* dengan Windows di dalam komputer yang sama.

# Langkah-Langkah

1. Unduh ISO Ubuntu dari [link ini](http://ubuntu.com/download/desktop). Di halaman tersebut akan disediakan 2 pilihan, yaitu 20.04 LTS yang dibuat sebagai versi *Long Term Support* dan didukung selama 5 tahun dari Ubuntu, serta 21.10 yang didukung hingga Juli 2022. Kita akan mengunduh versi 21.10 Impish Indri.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic2.png" title="" alt="" data-align="center"/>

<p align="center">Halaman Unduhan Ubuntu</p>

2. Tunggu hingga unduhan selesai.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic3.png" title="" alt="" data-align="center"/>

3. Setelah unduhan selesai, kita akan mengunduh Etcher melalui [link ini](https://www.balena.io/etcher/), sebuah *software* yang digunakan untuk membuat *bootable* USB sehingga kita dapat masuk ke dalam Ubuntu Live CD. Kita akan mengunduh versi *portable* dari Etcher.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic4.png" title="" alt="" data-align="center"/>

<p align="center">Halaman Unduhan Etcher</p>

4. Setelah Etcher terunduh, buka Etcher, lalu klik “Flash from file”, dan pilih ISO dari Ubuntu 21.10 yang baru saja diunduh.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic5.png" title="" alt="" data-align="center"/>

<p align="center">Pengambilan file ISO</p>

5. Pada langkah ini, pilih *target device* yang diinginkan, masukkan *flashdisk* yang akan digunakan sebagai *Bootable* USB.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic6.png" title="" alt="" data-align="center"/>

6. Sebelum memilih *flashdisk* yang akan digunakan, *backup* terlebih dahulu data yang kalian miliki, karena data tersebut akan dihapus oleh Etcher. Dan jangan salah memilih *device.* Etcher akan mengingatkan *drive* mana yang aman untuk dipilih dan digunakan sebagai *Bootable* USB.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic7.png" title="" alt="" data-align="center"/>

<p align="center">Pemilihan USB thumb drive</p>

7. Setelah memilih *flashdisk*, klik “Flash!”, dan sekarang kita hanya tinggal menunggu hingga proses selesai.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic8.png" title="" alt="" data-align="center"/>

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic9.png" title="" alt="" data-align="center"/>

<p align="center">Proses flashing</p>

8. Ketika Balena Etcher selesai *Flashing*, cabut *flashdisk* dari komputer sebelum masuk ke langkah selanjutnya.

9. Buka File Explorer, lalu klik kanan pada “This PC”, dan pilih “Manage” pada menu konteks.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic10.png" title="" alt="" data-align="center"/>

<p align="center">Menu konteks This PC</p>

10. Ketika halaman Computer Management telah terbuka, klik “Disk Management” di dalam *ribbon Storage*, tunggu hingga seluruh *Disk* dan Volume tampil.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic11.png" title="" alt="" data-align="center"/>

<p align="center">Menu Disk Management</p>

11. Pilih Volume yang ingin dipotong, kita bisa memotong *(Shrink Volume)* Volume Windows (Local Disk C:) atau *disk* lain. Di dalam contoh ini, saya akan memakai Volume lain.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic12.png" title="" alt="" data-align="center"/>

<p align="center">Menu Konteks Disk Management</p>

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic13.png" title="" alt="" data-align="center"/>

<p align="center">Volume akan dipotong</p>

12. Potong sesuai ukuran yang diinginkan, Linux tidak memperlukan partisi sebesar Windows, jadi 50 GB adalah ukuran minimum yang saya anjurkan, Ubuntu bisa berjalan dengan 15GB, tetapi 50GB memberikan wilayah penyimpanan tambahan untuk data tambahan seperti *games*, ide, dan sebagainya.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic14.png" title="" alt="" data-align="center"/>

<p align="center">Ukuran yang volume diinginkan</p>

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic15.png" title="" alt="" data-align="center"/>

<p align="center">Hasil pemotongan</p>

13. Tutup semua program, masukkan kembali *flashdisk*, lalu *restart* Komputer.

Pada saat logo dari *motherboard*/komputer muncul (sebelum logo windows), klik tombol Boot menu dari komputer yang dimiliki (untuk tombol bisa dilihat [disini](https://www.boot-disk.com/quest_bootmenu.htm), pada kolom “Boot Menu”). Lalu, pilih *flashdisk live* CD yang telah dibuat.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic16.png" title="" alt="" data-align="center"/>

<p align="center">Boot Option</p>

14. Pilih Ubuntu dari menu GRUB.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic17.png" title="" alt="" data-align="center"/>

<p align="center">GRUB Menu LiveCD Ubuntu</p>

15. Kita telah masuk ke dalam halaman pertama dari instalasi Ubuntu, pilih “Try Ubuntu”.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic18.png" title="" alt="" data-align="center"/>

<p align="center">Start Page</p>

16. Tes semua *hardware* yang dimiliki sebelum melakukan instalasi, agar kita tahu apakah semua *hardware* yang ada di dalam komputer dapat berjalan dengan semestinya.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic19.png" title="" alt="" data-align="center"/>

<p align="center">Tes hardware (WiFi)</p>

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic20.png" title="" alt="" data-align="center"/>

<p align="center">Tes hardware (Bluetooth)</p>

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic21.png" title="" alt="" data-align="center"/>

<p align="center">Tes hardware (Touchpad)</p>

17. Hubungkan komputer ke internet, instalasi Ubuntu dengan komputer yang terhubung ke internet akan memudahkan *post-install* karena instalasi akan memasang pembaruan yang dibutuhkan secara bersamaan. Serta dapat mempermudah pemasangan media codec yang dibutuhkan untuk memainkan musik dan video *mainstream* seperti MP3 dan MP4.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic22.png" title="" alt="" data-align="center"/>

18. Ketika sudah dilakukan pengetesan, klik icon “Install Ubuntu” di atas Firefox untuk memulai instalasi.

19. Pilih bahasa yang ingin digunakan ketika *installer* terbuka.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic23.png" title="" alt="" data-align="center"/>

<p align="center">Aplikasi Installer Ubiquity</p>

20. Pilih *keyboard layout* yang diinginkan, kemungkinan besar *keyboard* yang dipakai adalah English US, sehingga kita dapat meninggalkan pemilihan ini sebagai *default*. Tes keyboard pada kotak pengetesan.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic24.png" title="" alt="" data-align="center"/>

<p align="center">Tes layout keyboard</p>

21. Pilih instalasi normal, dan centang semua opsi di *other options*. Kedua opsi tersebut memperlukan koneksi internet aktif.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic25.png" title="" alt="" data-align="center"/>

<p align="center">Opsi instalasi</p>

22. Pilih “Something else” pada tipe instalasi yang akan dilakukan, klik Continue.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic26.png" title="" alt="" data-align="center"/>

<p align="center">Tipe Instalasi</p>

23. Pilih wilayah “free space” dari hasil pemotongan penyimpanan yang kita lakukan sebelumya. Lalu klik “+”.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic27.png" title="" alt="" data-align="center"/>

24. Buat partisi dengan ukuran sama seperti ukuran RAM komputer. Kita akan menggunakan partisi/volume tersebut sebagai *swap area*.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic28.png" title="" alt="" data-align="center"/>

<p align="center">Swap Partition</p>

25. Khusus untuk komputer yang menggunakan UEFI (pengecekan dapat dilakukan dengan [cara ini](https://itsfoss.com/check-uefi-or-bios/), buat partisi sebesar 500MB sebagai FAT32 *file system*, dengan *mount point* “/boot/efi”.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic29.png" title="" alt="" data-align="center"/>

<p align="center">/boot/efi partition</p>

26. Buat partisi untuk instalasi ubuntu dengan sisa penyimpanan yang ada. Gunakan partisi sebagai btrfs, dengan *mount point* “/” (root).

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic30.png" title="" alt="" data-align="center"/>

<p align="center">root (Local Disk:C) partition</p>

27. Berikut hasil dari partisi yang telah kita buat. Ketika sudah yakin dengan partisi yang dibuat, klik “Install Now”.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic31.png" title="" alt="" data-align="center"/>

<p align="center">Partition map untuk UEFI</p>

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic32.png" title="" alt="" data-align="center"/>

<p align="center">Partition map untuk Legacy/BIOS</p>

28. Pilih zona waktu dari daerah tempat tinggal.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic33.png" title="" alt="" data-align="center"/>

<p align="center">Zona waktu</p>

29. Masukkan data untuk akun komputer kita.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic34.png" title="" alt="" data-align="center"/>

<p align="center">Pembuatan akun offline komputer</p>

30. Tunggu instalasi hingga selesai.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic35.png" title="" alt="" data-align="center"/>

<p align="center">Proses Instalasi</p>

31. Ketika instalasi selesai, akan keluar *prompt* untuk *restart* komputer, atau dapat dilakukan *restart* melalui menu berikut.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic36.png" title="" alt="" data-align="center"/>

<p align="center">Gnome 40 System Menu</p>

32. Cabut *flashdisk*, lalu tekan *enter*.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic37.png" title="" alt="" data-align="center"/>

33. Kita telah masuk ke Menu GRUB Ubuntu. Dapat dilihat kita dapat memilih Windows 10 dan Ubuntu. Pilih Ubuntu.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic38.png" title="" alt="" data-align="center"/>

34. Setelah Login pertama kali, kita akan ditemui oleh halaman akun *online*, akun ini digunakan untuk beberapa fungsi seperti *email client*, Google drive dari Files, Kontak, Kalender dan Event.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic39.png" title="" alt="" data-align="center"/>

<p align="center">Integrasi akun online</p>

35. Isi dan sesuaikan opsi yang ada sesuai dengan keinginan.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic40.png" title="" alt="" data-align="center"/>

<p align="center">Satu-satunya opsi telemetri di Ubuntu (tidak seperti Windows yang memiliki puluhan)</p>

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic41.png" title="" alt="" data-align="center"/>

<p align="center">Layanan lokasi GPS untuk cuaca dan zona waktu</p>

36. Selamat! Ubuntu telah terpasang.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic42.png" title="" alt="" data-align="center"/>

# Post Install

1. Ubah tema menjadi tema Gelap melalui Settings → Appearance.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic43.png" title="" alt="" data-align="center"/>

2. *Update* dan *upgrade* sistem melalui terminal, dengan perintah:

> $ sudo apt update  
> $ sudo apt upgrade  
> $ sudo snap refresh

[hapus $, $ menandakan perintah berjalan di lingkungan user]  
[# menandakan perintah berjalan di lingkungan root/administrator]

*Copy* perintah ini dengan ctrl + c, lalu *paste* di terminal menggunakan perintah ctrl + shift + v.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic44.png" title="" alt="" data-align="center"/>

3. Pasang aplikasi dengan perintah:

> $ sudo apt install nama-aplikasi

Misal :

> $ sudo apt install neofetch

Setelah instalasi selesai, ketik “neofetch”, klik *enter*.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic45.png" title="" alt="" data-align="center"/>

<p align="center">Aplikasi Neofetch</p>

4. Pasang codec untuk Multimedia proprietary, VLC,font Microsoft seperti Times New Roman, dan aplikasi tambahan lain dengan perintah:

> $ sudo apt install ubuntu-restricted-extras vlc synaptic htop build-essential figlet

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic46.png" title="" alt="" data-align="center"/>

Selama instalasi, kita akan dihadapi oleh EULA dari font Microsoft, klik panah kiri pada *keyboard*, dan *enter*.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic47.png" title="" alt="" data-align="center"/>

<p align="center">EULA ttf-ms-fonts</p>

Lalu pilih “ya” dengan cara yang sama.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic48.png" title="" alt="" data-align="center"/>

5. Buka *tab* baru pada terminal, ketikkan:

> $ sudo nano /etc/gdm3/custom.conf

Lalu hapus tanda “#” pada *line* “WaylandEnable=false”. klik ctrl+x, y, dan *enter* untuk menyimpan. *Restart* komputer.

Langkah ini dilakukan agar Ubuntu dapat melakukan *screen sharing* pada Google Meet, Discord, dan *platform* lainnya.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic49.png" title="" alt="" data-align="center"/>

<p align="center">Wayland window server</p>

# Tambahan

Pasang Timeshift untuk membuat *backup* dari sistem, sehingga ketika kita melakukan eksperimen yang merusak komputer, kita bisa melakukan *rollback* dengan mudah.

Di dalam terminal masukkan perintah:

> $ sudo add-apt-repository -y ppa:teejee2008/timeshift

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic50.png" title="" alt="" data-align="center"/>

*Update* repositori sistem dengan:

> $ sudo apt-get update

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic51.png" title="" alt="" data-align="center"/>

Pasang Timeshft dengan:

> $ sudo apt-get install timeshift

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic52.png" title="" alt="" data-align="center"/>

Setelah instalasi selesai, klik Activities, lalu cari Timeshift.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic53.png" title="" alt="" data-align="center"/>

Secara *default*, karena kita menggunakan btrfs, Timeshift akan memilih BTRFS. Klik Next.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic54.png" title="" alt="" data-align="center"/>

Biarkan lokasi *snapshot* menjadi *default*, klik next lagi. Pilih level *snapshot* yang diinginkan sesuai kebutuhan. *Snapshot* Timeshift tidak akan membuat *backup* dari *file* pribadi, hanya sistem saja. Dan ukuran *backup* dari BTRFS sangat kecil, sehingga tidak perlu khawatir dengan *space harddisk* kurang.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic55.png" title="" alt="" data-align="center"/>

Klik Next terus hingga *setup* selesai. Kini, buatlah Snapshot pertama dari sistem.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic56.png" title="" alt="" data-align="center"/>

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic57.png" title="" alt="" data-align="center"/>

Selamat! Timeshift telah berjalan di komputer. Perlu diingat bahwa Timeshift hanya akan membuat *snapshot* dari sistem, bukan *file* pribadi. Sehingga buat *backup file* pribadi secara berkala. Untuk melakukan *restore*, cukup klik “Restore”, dan *restart* komputer setelah *restore* selesai.

<img src="/public/images/Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows/pic58.png" title="" alt="" data-align="center"/>

# Kesimpulan

Demikian cara memasang Ubuntu Dual Boot dengan Windows. Silahkan ajukan pertanyaan di kolom komentar apabila ada bagian dari tutorial ini yang dirasa kurang jelas. Terima kasih ^^.

# Referensi

- balena.io, balenaEtcher, diakses pada (2021–10–16) dari https://www.balena.io/etcher/
- ubuntu.com, Ubuntu Desktop, diakses pada (2021–10–17) dari https://ubuntu.com/download/desktop
