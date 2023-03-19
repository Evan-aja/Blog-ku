---
title: DNS over HTTPS Menggunakan dnscrypt-proxy di Linux
date: 2021/07/23
description: Setup DNS over HTTPS (DoH) menggunakan dnscrypt-proxy
tag: General, Linux, DNS
author: Gabriel Evan
---

# DNS over HTTPS Menggunakan dnscrypt-proxy di Linux

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/DNS%20over%20HTTPS%20Menggunakan%20dnscrypt-proxy%20di%C2%A0Linux/pic1.png" title="" alt="" data-align="center"/>

## **Apa itu DoH?**

DNS *over* HTTPS atau biasa disebut DoH adalah sebuah protokol yang dibuat untuk melakukan resolusi DNS *(Domain Name System)* dengan menggunakan protokol HTTPS. Penggunaan HTTPS sendiri memiliki tujuan untuk melindungi dan meng-enkripsi data yang dikirim melalui *unencrypted* DNS demi mencegah serangan *man-in-the-middle* dan melindungi privasi pengguna.

Selain meningkatkan keamanan, DoH juga dapat meningkatkan responsivitas internet yang dipakai, karena DNS yang disediakan oleh ISP rata-rata berjalan lebih lambat daripada DNS dari Cloudflare (misalnya).

## **Apa itu dnscrypt-proxy?**

Sebuah *proxy client* DNS *open source* yang mendukung protokol enkripsi DNS *over* HTTPS dan DNScrypt. Di dalam tutorial ini, akan dijelaskan cara menggunakan dnscrypt-proxy untuk membentuk enkripsi DoH di dalam Arch Linux, Fedora, dan Debian *based systems*.

## **Instalasi**

Instalasi dari *package dnscrypt-proxy* ini sendiri dapat dilakukan secara langsung menggunakan *package manager* masing-masing distro, karena kemungkinan besar sudah ada di dalam *main repository* distro yang dimiliki.

**Arch-based**

> ```# pacman -Syu dnscrypt-proxy```

**Fedora-based**

> ```# dnf install dnscrypt-proxy```

**Debian-based**

> ```# apt install dnscrypt-proxy```

```
# : run as root/sudo
$ : run as user
```

## **Konfigurasi**

Sebelum melanjutkan ke langkah selanjutnya, cek terlebih dahulu apakah *port* 53 sedang digunakan oleh proses lain dengan menggunakan perintah:

> ```# ss -lntp | grep ‘\(State\|:53 \)’```

Idealnya, output yang diberikan oleh perintah ini adalah *single line output* berupa:

> ```State Recv-Q Send-Q Local Address:Port Peer Address:PortProcess```

Namun, apabila terdapat beberapa proses lain yang menggunakan *port* yang sama, tidak perlu panik, karena beberapa proses dapat menggunakan *port* yang sama dalam waktu yang sama, seperti *dnsmasq.*

Langkah selanjutnya adalah memberikan domain yang dapat digunakan oleh *dnscrypt-proxy,* yang dapat dilakukan dengan perintah:

> ```# nano /etc/dnscrypt-proxy/dnscrypt-proxy.toml```

Uncomment *“server_names = [‘nama’, ’server’, ’default’]”* dan berikan nama server yang diinginkan. Pastikan setiap *server* dipisahkan dengan “,” dan diberi kutip tunggal. Untuk mencari nama *server* yang diinginkan, dapat dicari [di sini](https://dnscrypt.info/public-servers/).

Ketika memberikan nama *server*, disarankan untuk tidak menggunakan *server* yang berbeda di saat yang sama, karena *dnscrypt-proxy* hanya akan menggunakan salah satu *server* saja. Sehingga lebih baik disimpan dalam bentuk komentar dan bisa dengan mudah berganti *server* dengan *copy and paste.*

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/DNS%20over%20HTTPS%20Menggunakan%20dnscrypt-proxy%20di%C2%A0Linux/pic2.png" title="" alt="" data-align="center"/>

<p align="center">Contoh Multiple Server</p>

Selanjutnya, lakukan cek apakah dnscrypt-proxy bekerja dengan normal dengan perintah:

> ```$ dnscrypt-proxy -resolve example.com -config /etc/dnscrypt-proxy/dnscrypt-proxy.toml```

perintah di atas akan menampilkan output:

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/DNS%20over%20HTTPS%20Menggunakan%20dnscrypt-proxy%20di%C2%A0Linux/pic3.png" title="" alt="" data-align="center"/>

Apabila output yang dikeluarkan adalah error seperti berikut:

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/DNS%20over%20HTTPS%20Menggunakan%20dnscrypt-proxy%20di%C2%A0Linux/pic4.png" title="" alt="" data-align="center"/>

tidak perlu khawatir, karena *dnscrypt-proxy* akan bekerja dengan normal nantinya, perintah ini tidak menjadi indikator apakah *dnscrypt-proxy* dapat bekerja dengan normal di dalam distro yang digunakan.

Selanjutnya, buat *cadangan* dari *file resolv.conf* di dalam */etc* dengan perintah:

> ```# cp /etc/resolv.conf /etc/resolv.conf.bak```

Setelah *cadangan* dibuat, maka sekarang edit konten *resolv.conf.*

> ```# nano /etc/resolv.conf```

Apabila terdapat konten di dalam *resolv.conf* seperti berikut:

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/DNS%20over%20HTTPS%20Menggunakan%20dnscrypt-proxy%20di%C2%A0Linux/pic5.png" title="" alt="" data-align="center"/>

hapus semua *line* yang ada, lalu ganti dengan *line* berikut:

> nameserver 127.0.0.1 #untuk ipv4  
> nameserver ::1 #untuk ipv6  
> options edns0 single-request-reopen  
> EDNSPayloadSize 4096

Simpan dan tutup. Lalu, edit *file NetworkManager/NetworkManager.conf* didalam */etc* dengan perintah:

> ```# nano /etc/NetworkManager/NetworkManager.conf```

tambahkan dns=none di bawah [main]

<img src="https://raw.githubusercontent.com/Evan-aja/Blog-ku/main/resource/DNS%20over%20HTTPS%20Menggunakan%20dnscrypt-proxy%20di%C2%A0Linux/pic6.png" title="" alt="" data-align="center"/>

Simpan dan tutup. Sebelum melakukan *restart* pada *NetworkManager.service*, perlu diketahui bahwa *resolv.conf* merupakan *file* yang dibuat secara otomatis oleh *NetworkManager* [*service*](https://en.wikipedia.org/wiki/Daemon_%28computing%29)*.* Sehingga setiap perubahan akan otomatis dihapus pada setiap *system/service* *restart*. Kemudian perlu dilakukan perubahan terhadap *file resolv.conf* untuk menjadikan *file* tersebut menjadi [*immutable*](https://en.wikipedia.org/wiki/Chattr)*.* Perubahan dapat dilakukan dengan perintah:

> ```# chattr +i /etc/resolv.conf```

Dengan demikian, NetworkManager tidak dapat mengubah konten di dalam *resolv.conf* dan dipaksa untuk hanya membaca data yang ada di dalamnya.

Apabila di kemudian hari perubahan ingin dilakukan terhadap *file resolv.conf*, maka cukup diubah kembali menjadi *mutable* dengan perintah:

> ```# chattr -i /etc/resolv.conf```

Langkah terakhir yang perlu dilakukan adalah mengaktifkan *service* dari *dnscrypt-proxy* dan restart *NetworkManager* dengan perintah:

> ```# systemctl enable — now dnscrypt-proxy.service```

> ```# systemctl restart NetworkManager.service```

apabila DNS tidak berjalan dengan sempurna setelah perintah di atas, coba untuk me-*restart* komputer, DNS akan bekerja dengan benar setelahnya.

## Referensi

- wiki.archlinux.org, Dnscrypt-proxy, diakses pada (2021–07–18), dari [dnscrypt-proxy - ArchWiki](https://wiki.archlinux.org/title/Dnscrypt-proxy)
- wiki.archlinux.org, Domain name resolution, diakses pada (2021–07–18), dari [Domain name resolution - ArchWiki](https://wiki.archlinux.org/title/Domain_name_resolution)
- wikipedia.org, chattr, diakses pada (2021–07–18), dari [chattr - Wikipedia](https://en.wikipedia.org/wiki/Chattr)
- wikipedia.org, DNS over HTTPS, diakses pada (2021–07–18), dari [DNS over HTTPS - Wikipedia bahasa Indonesia, ensiklopedia bebas](https://id.wikipedia.org/wiki/DNS_over_HTTPS)
