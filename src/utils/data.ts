import { FaGithub, FaLinkedin } from "react-icons/fa";

export const features = [
  {
    title: "Coğrafi Keşif",
    description:
      "Dünyanın farklı bölgelerini interaktif haritalar üzerinden keşfedin",
    icon: "🌍",
  },
  {
    title: "Kullanıcı Dostu Arayüz",
    description: "Kolay kullanılabilir ve modern kullanıcı arayüzü",
    icon: "📱",
  },
  {
    title: "Kişiselleştirilmiş Deneyim",
    description: "Kullanıcı tercihlerine göre özelleştirilebilir içerik",
    icon: "🎨",
  },
  {
    title: "Eğitim Modülleri",
    description: "Coğrafi bilgileri öğreten interaktif modüller",
    icon: "📚",
  },
  {
    title: "Sosyal Paylaşım",
    description: "Keşiflerinizi arkadaşlarınızla paylaşın",
    icon: "👥",
  },
  {
    title: "Çevrimdışı Kullanım",
    description: "İnternet olmadan da temel özellikleri kullanabilme",
    icon: "📶",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Efe Eroğlu",
    role: "Scrum Master",
    responsibilities: [
      "Süreci Koordine Etmek",
      "Takım İçi İletişim Sağlamak",
      "CI/CD Süreç Yönetimi",
      "Backend Endpointlerinin Geliştirilmesi",
    ],
    image: "/assets/images/team/efe.jpeg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/efeeroglu/",
        icon: "🔗",
      },
      { platform: "GitHub", url: "https://github.com/Efe-Eroglu", icon: "💻" },
    ],
  },
  {
    id: 2,
    name: "İbrahim Bakar",
    role: "Analist ve AR Geliştirici",
    responsibilities: [
      "SWOT, PESTLE, Porter Analizleri",
      "VRIO ve Rekabet Analizleri",
      "Sürüm ve Dağıtım Stratejisi",
      "Keşif Araçları İçin 3D Modelleme",
    ],
    image: "/assets/images/team/ibrahim.jpg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/ibrahim-bakar-369464238/",
        icon: "🔗",
      },
      { platform: "GitHub", url: "https://github.com/ibrahimbkrr", icon: "💻" },
    ],
  },
  {
    id: 3,
    name: "Yasin Tunç",
    role: "Test ve Tanıtım Sorumlusu",
    responsibilities: [
      "Proje Tanıtım Videosu",
      "Pazarlama İçeriği Hazırlanması",
      "Performans ve Güvenlik Testleri",
    ],
    image: "/assets/images/team/yasin.jpg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/yasin-tun%C3%A7-b4a822269/",
        icon: "🔗",
      },
      { platform: "GitHub", url: "https://github.com/yasintuncc/", icon: "💻" },
    ],
  },
  {
    id: 4,
    name: "Ahmet Yeşeriroğlu",
    role: "Frontend Developer",
    responsibilities: [
      "Web Sitesi Önyüz Geliştirmesi",
      "Mobil Uygulama UI/UX Tasarımı",
      "AR Özellik Entegrasyonu",
    ],
    image: "/assets/images/team/ahmet.jpg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmetyeserir/",
        icon: "🔗",
      },
      {
        platform: "GitHub",
        url: "https://github.com/AhmetYeserir",
        icon: "💻",
      },
    ],
  },
  {
    id: 5,
    name: "Emircan Bacanak",
    role: "Mobile Developer & Tester",
    responsibilities: [
      "Veri Senkronizasyonu",
      "Hata Raporlama ve Takibi",
      "Regresyon ve Performans Testleri",
    ],
    image: "/assets/images/team/emir.jpg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/emircanbacanak/",
        icon: "🔗",
      },
      {
        platform: "GitHub",
        url: "https://github.com/emircanbacanak",
        icon: "💻",
      },
    ],
  },
  {
    id: 6,
    name: "Muhammed İkbal Aşık",
    role: "Mobile Developer",
    responsibilities: [
      "API Entegrasyonu",
      "AR Özelliklerinin Entegrasyonu",
      "ARKit veya ARCore entegrasyonu",
    ],
    image: "/assets/images/team/ikbal.jpg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammed-ikbal-asik/",
        icon: "🔗",
      },
      {
        platform: "GitHub",
        url: "https://github.com/Muhammetikbal826",
        icon: "💻",
      },
    ],
  },
  {
    id: 7,
    name: "Mehmet Başgöze",
    role: "AR Developer",
    responsibilities: [
      "AR Öğrelerinin Tasarımı",
      "AR Deneyim Optimizasyonu",
      "AR Senaryolarının Geliştirilmesi",
    ],
    image: "/assets/images/team/mehmet.jpeg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/mehmetbasgoze/",
        icon: "🔗",
      },
      { platform: "GitHub", url: "https://github.com/memollizm", icon: "💻" },
    ],
  },
];

export const documents = [
  {
    id: 1,
    title: "Proje Analizi ve Stratejik Planlama Raporu",
    icon: "📄",
    link: "/documents/proje-analizi-ve-stratejik-planlama-raporu.docx",
    files: [
      {
        name: "Proje Analizi ve Stratejik Planlama Raporu.docx",
        type: "docx",
      },
    ],
  },
  {
    id: 2,
    title: "Çevresel ve Rekabet Analizi Raporu",
    icon: "📊",
    link: "/documents/cevresel-ve-rekabet-analizi-raporu.docx",
    files: [
      {
        name: "Çevresel ve Rekabet Analizi Raporu.docx",
        type: "docx",
      },
    ],
  },
  {
    id: 3,
    title: "Proje Tanımı ve Gereksinim Belgeleri ",
    icon: "⚙️",
    link: "/documents/proje-tanimi-ve-gereksinim-belgeleri-raporu.docx",
    files: [
      {
        name: "Proje Tanımı ve Gereksinim Belgeleri Raporu.docx",
        type: "docx",
      },
    ],
  },
  {
    id: 4,
    title: "Veri Akış ve Veritabanı İlişki Diyagramı",
    icon: "💻",
    link: "/documents/veri-akis-diyagrami.pdf",
    files: [
      {
        name: "Data Flow Chart.pdf",
        type: "pdf",
        description: "Veri Akış Diyagramı",
      },
      {
        name: "ERD.pdf",
        type: "pdf",
        description: "Veritabanı İlişki Diyagramı",
      },
    ],
  },
  {
    id: 5,
    title: "Sistem Mimarisi ve Use Case Diyagramı",
    icon: "🏗️",
    link: "/documents/sistem-mimarisi-diyagrami.pdf",
    files: [
      {
        name: "System Architecture Diagram.pdf",
        type: "pdf",
        description: "Sistem Mimarisi Diyagramı",
      },
      {
        name: "Use Case.pdf",
        type: "pdf",
        description: "Use Case Diyagramı",
      },
    ],
  },
  {
    id: 6,
    title: "Kullanıcı Akış ve Modüler Tasarım Diyagramı",
    icon: "⚠️",
    link: "/documents/moduler-tasarim-diyagrami.png",
    files: [
      {
        name: "User Flow Chart.jpg",
        type: "png",
        description: "Kullanıcı Akış Diyagramı",
      },
      {
        name: "Modüler Yapı Diyagramı.png",
        type: "png",
        description: "Modüler Tasarım Diyagramı",
      },
    ],
  },
];
