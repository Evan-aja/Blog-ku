---
title: Cara Mudah Setup dnscrypt-proxy di openSUSE
date: 2021/09/17
description: Cara mengatur dnscrypt-proxy untuk openSUSE (Tumbleweed)
tag: dnscrypt-proxy
author: Gabriel Evan
---

# Cara Mudah Setup dnscrypt-proxy di openSUSE

----

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Cara%20Mudah%20Setup%20dnscrypt-proxy%20di%20openSUSE/pic1.png" title="Logo openSUSE" alt="openSUSE" data-align="center"/>

OpenSUSE, sebuah distro linux yang didukung oleh SUSE Linux dan dibuat dengan tujuan untuk memberikan sistem operasi berkelas enterprise secara gratis kepada komunitas open source. Di dalam tutorial ini aka dijelaskan bagaimana cara untuk mengkonfigurasi dnscrypt-proxy agar dapat berjalan dengan lancar di openSUSE Tumbleweed (dan Leap) dan mendengar koneksi pada port 53.

----

## Langkah-langkah

1. Langkah pertama yang harus
   dilakukan adalah pastinya memasang dnscrypt-proxy didalam sistem yang
   dimiliki. Perintah yang dapat digunakan adalah

```c
# zypper in dnscrypt-proxy 

$ = run as user
# = run as root/sudo
```

2. Setelah dnscrypt-proxy terpasang, dapat dilakukan pengeditan terhadap
   file dnscrypt-proxy.toml untuk memasukkan server dns yang ingin
   digunakan dan pengaturan lain yang dibutuhkan (seperti **disable
   ipv6**) dengan perintah 
   
   ```c
   # nano/etc/dnscrypt-proxy/dnscrypt-proxy.toml
   ```
   
   berikut contoh **server_name** yang dapat digunakan. Untuk listen_addresses lebih baik dikosongkan karena konfigurasi akan dilakukan pada file lain.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Cara%20Mudah%20Setup%20dnscrypt-proxy%20di%20openSUSE/pic2.png" title="Penggunaan server doh Cloudflare dan Adguard" alt="resolv.conf" data-align="center"/>

3. langkah selanjutnya adalah memberi opsi **rc-manager=file** dan **dns=none** pada **NetworkManager.conf** dibawah **[main]**. Pengeditan dapat dilakukan dengan perintah 
   
   ```c
   # nano /etc/NetworkManager/NetworkManager.conf
   ```
   
   **rc-manager=file** akan mencegah netconfig merubah isi dari **/etc/resolv.conf** dan **dns=none** akan mencegah NetworkManager mengubah isi dari **/etc/resolv.conf**. Sehingga tidak akan terjadi overwrite konten didalam resolv.conf.

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Cara%20Mudah%20Setup%20dnscrypt-proxy%20di%20openSUSE/pic3.png" title="Hasil edit NetworkManager.conf" alt="NetworkManager.conf" data-align="center"/>

4. Sebelum melakukan perubahan terhadap **/etc/resolv.conf**, sebaiknya untuk membuat cadangan dari file tersebut, sehingga apabila setelah perubahan data dilakukan terdapat kerusakan, restorasi data dalat dilakukan dengan mudah. Cadangan dapat dibuat dengan perintah 
   
   ```c
   # cp /etc/resolv.conf /etc/resolv.conf.bak && rm /etc/resolv.conf && nano /etc/resolv.conf
   ```
   
   berikut beberapa *line* yang harus diisikan kedalam **resolv.conf** (dan tambahan opsional) :

```ada
nameserver 127.0.0.1
options edns0 single-request-reopen
```

<img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Cara%20Mudah%20Setup%20dnscrypt-proxy%20di%20openSUSE/pic4.png" title="Beberapa tambahan opsional" alt="resolv.conf" data-align="center"/>

5. Kemudian, buat direktori didalam **/etc/systemd/system/** dengan nama **dnscrypt-proxy.socket.d** dengan perintah

```c
# mkdir /etc/systemd/system/dnscrypt-proxy.socket.d
```

6. Salin file dnscrypt-proxy.socket.conf dari */usr/share/doc/packages/dnscrypt-proxy* kedalam folder yang telah dibuat dengan perintah

```c
# cp /usr/share/doc/packages/dnscrypt-proxy/dnscrypt-proxy.socket.conf /etc/systemd/system/dnscrypt-proxy.socket.d/
```

7. Setelah file tersalin, waktunya mengubah konten dari dnscrypt-proxy.socket.conf didalam folder yang dibuat seperti gambar dibawah ini
   
   <img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Cara%20Mudah%20Setup%20dnscrypt-proxy%20di%20openSUSE/pic5.png" title="Sebelum" alt="socket" data-align="center"/><img src="https://github.com/Evan-aja/Blog-ku/raw/main/resource/Cara%20Mudah%20Setup%20dnscrypt-proxy%20di%20openSUSE/pic6.png" title="Sesudah" alt="socket" data-align="center"/>Diperlukan dnscrypt-proxy.socket ini, karena dnscrypt-proxy.service tidak bisa mendengar koneksi di bawah port 1000 tanpanya.

8. langkah terakhir adalah mengaktifkan *socket* dan *service* dari *dnscrypt-proxy*,
   serta melakukan **restart** pada **NetworkManager.service** dengan perintah berikut 
   
   ```c
   # systemctl enable --now dnscrypt-proxy.socket
   # systemctl enable --now dnscrypt-proxy.service
   # systemctl restart NetworkManager.service
   ```
   
   pengaktifan tersebut harus urut dari atas kebawah, apabila tidak, maka **dnscypt-proxy.socket** akan gagal berjalan karena *socket* tersebut harus berjalan sebelum **dnscrypt-proxy.service**.

9. (opsional) apabila merasa diperlukan, dapat dilakukan **reboot** terhadap sistem untuk memulai ulang semua program yang berjalan sebelum **dnscrypt-proxy** dimulai.

**Referensi**

- README.openSUSE, openSUSE,
   diakses pada (2021-08-16) dari
   /usr/share/doc/packages/dnscrypt-proxy/README.openSUSE

- build.opensuse.org,
   dnscrypt-proxy, A tool for securing communications between a client
   and a DNS resolver, diakses pada (2021-08-17) dari
   https://build.opensuse.org/package/show/openSUSE%3AFactory/dnscrypt-proxy

- github.com, Installation
   Linux, diakses pada (2021-08-16) dari
   [Installation linux · DNSCrypt/dnscrypt-proxy Wiki · GitHub](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)
