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
    role: "Diyagram Uzmanı",
    responsibilities: [
      "Veritabanı İlişki Diyagramı",
      "Modüler Tasarım Diyagramı",
      "Test Senaryoları Diyagramı",
      "Güvenlik Mimarisi Diyagramı",
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
    role: "Analiz ve Dokümantasyon",
    responsibilities: [
      "SWOT, PESTLE, Porter Analizleri",
      "VRIO ve Rekabet Analizleri",
      "Hukuki ve Yasal Gereksinimler",
      "Sürüm ve Dağıtım Stratejisi",
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
    role: "Web Geliştirici",
    responsibilities: [
      "Proje tanıtım sitesi geliştirme",
      "React tabanlı frontend uygulaması",
      "GitHub Pages entegrasyonu",
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
    role: "Proje Yöneticisi",
    responsibilities: [
      "Proje planlaması ve takibi",
      "Kaynak yönetimi",
      "Ekip koordinasyonu",
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
    role: "Risk Analisti",
    responsibilities: [
      "Risk analizleri",
      "Proje dokümantasyonu",
      "İş gereksinimleri analizi",
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
    name: "Muhammet İkbal Aşık",
    role: "Dokümantasyon Uzmanı",
    responsibilities: [
      "Risk yönetimi raporları",
      "Proje bütçe planı",
      "Pazarlama stratejileri",
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
    role: "Diyagram Uzmanı",
    responsibilities: [
      "Kullanıcı akış diyagramları",
      "Veri akış diyagramları",
      "Sistem mimarisi diyagramları",
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
    title: "Proje Tanımlama ve Amaç Raporu",
    description: "Proje kapsamı, hedefleri ve başlangıç gereksinimleri",
    icon: "📄",
    link: "#",
  },
  {
    id: 2,
    title: "İş Gereksinim Belgesi",
    description: "İş hedefleri ve gereksinimlerinin tanımı",
    icon: "📊",
    link: "#",
  },
  {
    id: 3,
    title: "Fonksiyonel Gereksinimler Belgesi",
    description: "Yazılımın gerçekleştirmesi gereken işlevler",
    icon: "⚙️",
    link: "#",
  },
  {
    id: 4,
    title: "Teknik Gereksinimler Belgesi",
    description: "Kullanılacak teknolojiler ve altyapı",
    icon: "💻",
    link: "#",
  },
  {
    id: 5,
    title: "Sistem Tasarımı ve Mimari Raporu",
    description: "Yazılımın genel mimarisi ve tasarımı",
    icon: "🏗️",
    link: "#",
  },
  {
    id: 6,
    title: "Risk Yönetimi ve İzleme Raporu",
    description: "Projenin olası riskleri ve yönetim stratejileri",
    icon: "⚠️",
    link: "#",
  },
];
