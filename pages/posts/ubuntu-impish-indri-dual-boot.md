---
title: Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows
date: 2021/10/20
description: Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows
tag: General, Linux, Dual Boot, Windows
author: Gabriel Evan
---

# Instalasi Ubuntu 21.10 Impish Indri Dual Boot dengan Windows

![](https://miro.medium.com/max/700/1*BX0L58CVAjN5RTVKUbowlA.png)

<p align="center">Ubuntu</p>

# Pendahuluan

Ubuntu. Sebuah distribusi Linux yang sangat populer di kalangan pemula. Untuk merayakan ulang tahun Ubuntu ke-16 pada 20 Oktober 2021 ini, saya akan memaparkan bagaimana cara memasang Ubuntu 21.10 Impish Indri dengan cara *dual boot* dengan Windows di dalam komputer yang sama.

# Langkah-Langkah

1. Unduh ISO Ubuntu dari [link ini](http://ubuntu.com/download/desktop). Di halaman tersebut akan disediakan 2 pilihan, yaitu 20.04 LTS yang dibuat sebagai versi *Long Term Support* dan didukung selama 5 tahun dari Ubuntu, serta 21.10 yang didukung hingga Juli 2022. Kita akan mengunduh versi 21.10 Impish Indri.

![](https://miro.medium.com/max/700/1*rv2RGHu2hYB5CRqLMlZGGQ.png)

Halaman Unduhan Ubuntu

2. Tunggu hingga unduhan selesai.

![](https://miro.medium.com/max/700/1*Qxq5ynHpN1IP6DUDSGYtyQ.png)

3. Setelah unduhan selesai, kita akan mengunduh Etcher melalui [link ini](https://www.balena.io/etcher/), sebuah *software* yang digunakan untuk membuat *bootable* USB sehingga kita dapat masuk ke dalam Ubuntu Live CD. Kita akan mengunduh versi *portable* dari Etcher.

![](https://miro.medium.com/max/700/1*MCV2hIr7CQCRGPVgrl0Cng.png)

Halaman Unduhan Etcher

4. Setelah Etcher terunduh, buka Etcher, lalu klik “Flash from file”, dan pilih ISO dari Ubuntu 21.10 yang baru saja diunduh.

![](https://miro.medium.com/max/700/1*VzE2T2MgNymPGMNhiBmIVA.png)

Pengambilan file ISO

5. Pada langkah ini, pilih *target device* yang diinginkan, masukkan *flashdisk* yang akan digunakan sebagai *Bootable* USB.

![](https://miro.medium.com/max/700/1*_L6l2-j_tpJv8i_P60I4Kg.png)

6. Sebelum memilih *flashdisk* yang akan digunakan, *backup* terlebih dahulu data yang kalian miliki, karena data tersebut akan dihapus oleh Etcher. Dan jangan salah memilih *device.* Etcher akan mengingatkan *drive* mana yang aman untuk dipilih dan digunakan sebagai *Bootable* USB.

![](https://miro.medium.com/max/700/1*18fQCtgV_S3DalNCGbJahw.png)

Pemilihan USB thumb drive

7. Setelah memilih *flashdisk*, klik “Flash!”, dan sekarang kita hanya tinggal menunggu hingga proses selesai.

![](https://miro.medium.com/max/700/1*3Dn7qcpJi0rqojxYj-F6Qw.png)

![](https://miro.medium.com/max/700/1*SzQBWXIHoGLdQRxYR4S3_A.png)

Proses flashing

8. Ketika Balena Etcher selesai *Flashing*, cabut *flashdisk* dari komputer sebelum masuk ke langkah selanjutnya.

9. Buka File Explorer, lalu klik kanan pada “This PC”, dan pilih “Manage” pada menu konteks.

![](https://miro.medium.com/max/450/1*cZvBW-2Ypb3jTVsUyoO87g.png)

Menu konteks This PC

10. Ketika halaman Computer Management telah terbuka, klik “Disk Management” di dalam *ribbon Storage*, tunggu hingga seluruh *Disk* dan Volume tampil.

![](https://miro.medium.com/max/700/1*uJ0uNlUO5AlX5im7eM2Afw.png)

Menu Disk Management

11. Pilih Volume yang ingin dipotong, kita bisa memotong *(Shrink Volume)* Volume Windows (Local Disk C:) atau *disk* lain. Di dalam contoh ini, saya akan memakai Volume lain.

![](https://miro.medium.com/max/558/1*2GZjwdaSu3JJhIbfQqnbxQ.png)

Menu Konteks Disk Management

![](https://miro.medium.com/max/444/1*T9wayGTwziZfc9f9n6oIOw.png)

Volume akan dipotong

12. Potong sesuai ukuran yang diinginkan, Linux tidak memperlukan partisi sebesar Windows, jadi 50 GB adalah ukuran minimum yang saya anjurkan, Ubuntu bisa berjalan dengan 15GB, tetapi 50GB memberikan wilayah penyimpanan tambahan untuk data tambahan seperti *games*, ide, dan sebagainya.

![](https://miro.medium.com/max/483/1*MJl8_qHIDSml0Ax53iYuig.png)

Ukuran yang volume diinginkan

![](https://miro.medium.com/max/294/1*mfD-3-hHkafGuqSqc6_4ig.png)

Hasil pemotongan

13. Tutup semua program, masukkan kembali *flashdisk*, lalu *restart* Komputer.

Pada saat logo dari *motherboard*/komputer muncul (sebelum logo windows), klik tombol Boot menu dari komputer yang dimiliki (untuk tombol bisa dilihat [disini](https://www.boot-disk.com/quest_bootmenu.htm), pada kolom “Boot Menu”). Lalu, pilih *flashdisk live* CD yang telah dibuat.

![](https://miro.medium.com/max/642/1*hKiJQG3b3MrlbeuZzsCUdA.png)

Boot Option

14. Pilih Ubuntu dari menu GRUB.

![](https://miro.medium.com/max/642/1*6z79XdCXU-LR7aA_6GtGtg.png)

GRUB Menu LiveCD Ubuntu

15. Kita telah masuk ke dalam halaman pertama dari instalasi Ubuntu, pilih “Try Ubuntu”.

![](https://miro.medium.com/max/700/1*RDeJ58azS8yzcaE7FJotaQ.png)

Start Page

16. Tes semua *hardware* yang dimiliki sebelum melakukan instalasi, agar kita tahu apakah semua *hardware* yang ada di dalam komputer dapat berjalan dengan semestinya.

![](https://miro.medium.com/max/700/1*xScfriHurFJsmpP8yxb9Mw.png)

Tes hardware (WiFi)

![](https://miro.medium.com/max/700/1*iV20Fwh5PnDk0YykWLqnmw.png)

Tes hardware (Bluetooth)

![](https://miro.medium.com/max/700/1*sfz0a9YVPKlfk9bbPcrjgA.png)

Tes hardware (Touchpad)

17. Hubungkan komputer ke internet, instalasi Ubuntu dengan komputer yang terhubung ke internet akan memudahkan *post-install* karena instalasi akan memasang pembaruan yang dibutuhkan secara bersamaan. Serta dapat mempermudah pemasangan media codec yang dibutuhkan untuk memainkan musik dan video *mainstream* seperti MP3 dan MP4.

![](https://miro.medium.com/max/700/1*URiWeAU9UmbBIAJNtkpXbw.png)

18. Ketika sudah dilakukan pengetesan, klik icon “Install Ubuntu” di atas Firefox untuk memulai instalasi.

19. Pilih bahasa yang ingin digunakan ketika *installer* terbuka.

![](https://miro.medium.com/max/700/1*FnRQHAhfqUB5thoKoueTIQ.png)

Aplikasi Installer Ubiquity

20. Pilih *keyboard layout* yang diinginkan, kemungkinan besar *keyboard* yang dipakai adalah English US, sehingga kita dapat meninggalkan pemilihan ini sebagai *default*. Tes keyboard pada kotak pengetesan.

![](https://miro.medium.com/max/700/1*JyzjoT_tW4I5h0NBzbDARw.png)

Tes layout keyboard

21. Pilih instalasi normal, dan centang semua opsi di *other options*. Kedua opsi tersebut memperlukan koneksi internet aktif.

![](https://miro.medium.com/max/700/1*2Y_xAIqDJ3CeEhxqCDP8Jg.png)

Opsi instalasi

22. Pilih “Something else” pada tipe instalasi yang akan dilakukan, klik Continue.

![](https://miro.medium.com/max/700/1*441yp9ZhDIFYlxzjDqSzsw.png)

Tipe Instalasi

23. Pilih wilayah “free space” dari hasil pemotongan penyimpanan yang kita lakukan sebelumya. Lalu klik “+”.

![](https://miro.medium.com/max/700/1*aw8XvnaMoZa7csmKCBrGcw.png)

24. Buat partisi dengan ukuran sama seperti ukuran RAM komputer. Kita akan menggunakan partisi/volume tersebut sebagai *swap area*.

![](https://miro.medium.com/max/473/1*rvkwq7NdVx95VMV7GzapZg.png)

Swap Partition

25. Khusus untuk komputer yang menggunakan UEFI (pengecekan dapat dilakukan dengan [cara ini](https://itsfoss.com/check-uefi-or-bios/), buat partisi sebesar 500MB sebagai FAT32 *file system*, dengan *mount point* “/boot/efi”.

![](https://miro.medium.com/max/473/1*2r3vz_LcOZWRyRUz1wQhZg.png)

/boot/efi partition

26. Buat partisi untuk instalasi ubuntu dengan sisa penyimpanan yang ada. Gunakan partisi sebagai btrfs, dengan *mount point* “/” (root).

![](https://miro.medium.com/max/473/1*93ry6BtbJ5h2q_wSH33Dyg.png)

root (Local Disk:C) partition

27. Berikut hasil dari partisi yang telah kita buat. Ketika sudah yakin dengan partisi yang dibuat, klik “Install Now”.

![](https://miro.medium.com/max/700/1*6c3yDg4Jj0otk83QLkfxjQ.png)

Partition map untuk UEFI

![](https://miro.medium.com/max/700/1*ywY1gTgZAeME2W2y4ffqPA.png)

Partition map untuk Legacy/BIOS

28. Pilih zona waktu dari daerah tempat tinggal.

![](https://miro.medium.com/max/700/1*7Tt3XaGwgA35-2FxGWwvYA.png)

Zona waktu

29. Masukkan data untuk akun komputer kita.

![](https://miro.medium.com/max/700/1*ercPXIHRq29-6BNKitic5Q.png)

Pembuatan akun offline komputer

30. Tunggu instalasi hingga selesai.

![](https://miro.medium.com/max/700/1*Ytp8j8vzhSX2Z9MKZWzYLA.png)

Proses Instalasi

31. Ketika instalasi selesai, akan keluar *prompt* untuk *restart* komputer, atau dapat dilakukan *restart* melalui menu berikut.

![](https://miro.medium.com/max/341/1*0W6HbvHjA11_lPtDCs04vA.png)

Gnome 40 System Menu

32. Cabut *flashdisk*, lalu tekan *enter*.

![](https://miro.medium.com/max/642/1*KV29AaRWH_M78jRi9QjYnA.png)

33. Kita telah masuk ke Menu GRUB Ubuntu. Dapat dilihat kita dapat memilih Windows 10 dan Ubuntu. Pilih Ubuntu.

![](https://miro.medium.com/max/642/1*7Q2PsBaeOxnxht4jfKOKBw.png)

34. Setelah Login pertama kali, kita akan ditemui oleh halaman akun *online*, akun ini digunakan untuk beberapa fungsi seperti *email client*, Google drive dari Files, Kontak, Kalender dan Event.

![](https://miro.medium.com/max/700/1*3HLf5sLu_sT82xy1qq8mHQ.png)

Integrasi akun online

35. Isi dan sesuaikan opsi yang ada sesuai dengan keinginan.

![](https://miro.medium.com/max/700/1*uiwGh4em5Yoc1EkMlnbB4w.png)

Satu-satunya opsi telemetri di Ubuntu (tidak seperti Windows yang memiliki puluhan)

![](https://miro.medium.com/max/700/1*S0_nYE26RuBWb9YMubW7xA.png)

Layanan lokasi GPS untuk cuaca dan zona waktu

36. Selamat! Ubuntu telah terpasang.

![](https://miro.medium.com/max/700/1*5jiV-nDQHcVOIegA4qTygw.png)

# Post Install

1. Ubah tema menjadi tema Gelap melalui Settings → Appearance.

![](https://miro.medium.com/max/700/1*2qmVNXccsIDE95LlHkOUFA.png)

2. *Update* dan *upgrade* sistem melalui terminal, dengan perintah:

> $ sudo apt update  
> $ sudo apt upgrade  
> $ sudo snap refresh

[hapus $, $ menandakan perintah berjalan di lingkungan user]  
[# menandakan perintah berjalan di lingkungan root/administrator]

*Copy* perintah ini dengan ctrl + c, lalu *paste* di terminal menggunakan perintah ctrl + shift + v.

![](https://miro.medium.com/max/700/1*0Cl7d3QyLUszCRDWX9l0Bw.png)

3. Pasang aplikasi dengan perintah:

> $ sudo apt install nama-aplikasi

Misal :

> $ sudo apt install neofetch

Setelah instalasi selesai, ketik “neofetch”, klik *enter*.

![](https://miro.medium.com/max/700/1*jm3zjdj1At4EOpe1mVOD9g.png)

Aplikasi Neofetch

4. Pasang codec untuk Multimedia proprietary, VLC,font Microsoft seperti Times New Roman, dan aplikasi tambahan lain dengan perintah:

> $ sudo apt install ubuntu-restricted-extras vlc synaptic htop build-essential figlet

![](https://miro.medium.com/max/700/1*xOhS1Z8KOHaJ042KiUIVbg.png)

Selama instalasi, kita akan dihadapi oleh EULA dari font Microsoft, klik panah kiri pada *keyboard*, dan *enter*.

![](https://miro.medium.com/max/700/1*Omr6J8iYUCY_kuKL7RhBIg.png)

EULA ttf-ms-fonts

Lalu pilih “ya” dengan cara yang sama.

![](https://miro.medium.com/max/700/1*msH0ELx7blWDJZKJo4Wodw.png)

5. Buka *tab* baru pada terminal, ketikkan:

> $ sudo nano /etc/gdm3/custom.conf

Lalu hapus tanda “#” pada *line* “WaylandEnable=false”. klik ctrl+x, y, dan *enter* untuk menyimpan. *Restart* komputer.

Langkah ini dilakukan agar Ubuntu dapat melakukan *screen sharing* pada Google Meet, Discord, dan *platform* lainnya.

![](https://miro.medium.com/max/700/1*_JugVK-i_YkRSwqaTis4wg.png)

Wayland window server

# Tambahan

Pasang Timeshift untuk membuat *backup* dari sistem, sehingga ketika kita melakukan eksperimen yang merusak komputer, kita bisa melakukan *rollback* dengan mudah.

Di dalam terminal masukkan perintah:

> $ sudo add-apt-repository -y ppa:teejee2008/timeshift

![](https://miro.medium.com/max/700/1*lc0fGEyaty6nXLUSmcr4XA.png)

*Update* repositori sistem dengan:

> $ sudo apt-get update

![](https://miro.medium.com/max/700/1*OPSnx-paTv2QGxw5CaINMw.png)

Pasang Timeshft dengan:

> $ sudo apt-get install timeshift

![](https://miro.medium.com/max/700/1*domJeQsCWIiVDZeq3pLMBw.png)

Setelah instalasi selesai, klik Activities, lalu cari Timeshift.

![](https://miro.medium.com/max/700/1*BJsi_AqoecqIbW_iEbeyGQ.png)

Secara *default*, karena kita menggunakan btrfs, Timeshift akan memilih BTRFS. Klik Next.

![](https://miro.medium.com/max/700/1*0TA2waEAtMxwgcjZKVuMWg.png)

Biarkan lokasi *snapshot* menjadi *default*, klik next lagi. Pilih level *snapshot* yang diinginkan sesuai kebutuhan. *Snapshot* Timeshift tidak akan membuat *backup* dari *file* pribadi, hanya sistem saja. Dan ukuran *backup* dari BTRFS sangat kecil, sehingga tidak perlu khawatir dengan *space harddisk* kurang.

![](https://miro.medium.com/max/700/1*S6fe5PSWxMZszqUWcrxD2g.png)

Klik Next terus hingga *setup* selesai. Kini, buatlah Snapshot pertama dari sistem.

![](https://miro.medium.com/max/700/1*xVR_ECRTvmVrVeEJQA3WSw.png)

![](https://miro.medium.com/max/700/1*-qdB5CvlG0pTg0g2dITKXg.png)

Selamat! Timeshift telah berjalan di komputer. Perlu diingat bahwa Timeshift hanya akan membuat *snapshot* dari sistem, bukan *file* pribadi. Sehingga buat *backup file* pribadi secara berkala. Untuk melakukan *restore*, cukup klik “Restore”, dan *restart* komputer setelah *restore* selesai.

![](https://miro.medium.com/max/700/1*vlT0KBUJKzd-xt3N4d8bsQ.png)

# Kesimpulan

Demikian cara memasang Ubuntu Dual Boot dengan Windows. Silahkan ajukan pertanyaan di kolom komentar apabila ada bagian dari tutorial ini yang dirasa kurang jelas. Terima kasih ^^.

# Referensi

- balena.io, balenaEtcher, diakses pada (2021–10–16) dari https://www.balena.io/etcher/
- ubuntu.com, Ubuntu Desktop, diakses pada (2021–10–17) dari https://ubuntu.com/download/desktop

33
