# DertOps Website

Modern ve güvenli bir şirket websitesi ve yönetim paneli çözümü.

## 🌟 Özellikler

- 🌐 Modern ve responsive şirket websitesi
- 🔐 Güvenli admin paneli
- 🚀 Mikroservis mimarisi
- 🐳 Docker ile kolay deployment
- 🔄 Health check sistemi

## 🏗 Sistem Mimarisi

### Ana Bileşenler

1. **Ana Website (dertops-website)**
   - Şirket websitesi ve admin panel arayüzü
   - Port: 7777
   - Teknoloji: Flask, Bootstrap 5

2. **Kimlik Doğrulama Servisi (auth-service)**
   - Kullanıcı girişi ve token yönetimi
   - Port: 8081
   - JWT tabanlı kimlik doğrulama

## 📁 Dizin Yapısı

```
DertOps/
├── auth-service/           # Kimlik doğrulama servisi
├── dertops-website/       # Ana website ve admin panel
│   ├── static/            # Statik dosyalar
│   ├── templates/         # HTML şablonları
│   │   ├── admin/        # Admin panel şablonları
│   │   ├── contact.html  # İletişim sayfası
│   │   ├── team.html     # Ekip sayfası
│   │   └── index.html    # Ana sayfa
│   ├── app.py            # Ana uygulama kodu
│   ├── docker-compose.yml # Docker yapılandırması
│   ├── Dockerfile        # Container yapılandırması
│   └── requirements.txt   # Python bağımlılıkları
```

## 🚀 Kurulum

1. **Projeyi Klonlayın**
   ```bash
   git clone [repo-url]
   cd DertOps
   ```

2. **Servisleri Başlatın**
   ```bash
   cd dertops-website
   docker-compose up --build
   ```

3. **Tarayıcıda Açın**
   - Website: http://45.9.30.161:7777
   - Admin Panel: http://45.9.30.161:7777/login

## 🔑 Admin Erişimi

- **URL:** http://45.9.30.161:7777/login
- **Kullanıcı adı:** admin
- **Şifre:** admin123

## 🛣 API Endpoint'leri

### Ana Website (7777)
- `/` - Ana sayfa
- `/contact` - İletişim sayfası
- `/team` - Ekip sayfası
- `/login` - Admin giriş sayfası
- `/admin/dashboard` - Admin kontrol paneli

### Auth Service (8081)
- `/login` (POST) - Kullanıcı girişi
- `/health` (GET) - Servis sağlık kontrolü

## 🔒 Güvenlik Özellikleri

- JWT tabanlı kimlik doğrulama
- Session bazlı oturum yönetimi
- Güvenli şifre yönetimi
- Servisler arası güvenli iletişim

## 🛠 Teknoloji Stack

- **Backend:** Python Flask
- **Frontend:** HTML5, Bootstrap 5
- **Containerization:** Docker
- **Servis Yönetimi:** Docker Compose
- **Token Yönetimi:** PyJWT

## 📈 Gelecek İyileştirmeler

### 🔒 Güvenlik
- [ ] Güvenli şifre politikası
- [ ] Rate limiting
- [ ] HTTPS yapılandırması

### ⚡ Performans
- [ ] CDN entegrasyonu
- [ ] Caching sistemi
- [ ] Database optimizasyonu

### 💻 Kod
- [ ] Veritabanı entegrasyonu
- [ ] Kapsamlı loglama sistemi
- [ ] Test coverage artırımı

### 🔄 DevOps
- [ ] CI/CD pipeline
- [ ] Monitoring ve alerting
- [ ] Otomatik backup sistemi

## 🔧 Bakım ve Destek

- Düzenli güvenlik güncellemeleri
- Dependency yönetimi
- Performans optimizasyonu
- Hata takibi ve çözümü

## 📝 Lisans

Bu proje [MIT](LICENSE) lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit'leyin (`git commit -m 'feat: Add amazing feature'`)
4. Push'layın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📞 İletişim

- Website: [http://45.9.30.161:7777](http://45.9.30.161:7777)
- Email: admin@dertops.com
