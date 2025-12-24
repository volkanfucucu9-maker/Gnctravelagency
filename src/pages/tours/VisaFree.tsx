import { TourTemplate } from '../../components/TourTemplate';

export function VisaFree() {
  const packages = [
    {
      id: 1,
      title: 'Bali Cennet Adası Turu',
      duration: '7 Gün / 6 Gece',
      price: '€960',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      rating: 5,
      features: ['Uçak Bileti Dahil', 'Her Şey Dahil Otel', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bali-paradise'
    },
    {
      id: 2,
      title: 'Tayland Bangkok & Phuket',
      duration: '9 Gün / 8 Gece',
      price: '€650',
      image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=800',
      rating: 5,
      features: ['Vize İşlemi Yok', 'Deniz & Kültür', 'Transfer Dahil']
    },
    {
      id: 3,
      title: 'Maldivler Lüks Tatil',
      duration: '5 Gün / 4 Gece',
      price: '€900',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
      rating: 5,
      features: ['Water Villa', 'Ultra Lüks', 'Balayı Özel']
    },
    {
      id: 4,
      title: 'Sırbistan & Bosna Turu',
      duration: '6 Gün / 5 Gece',
      price: '€380',
      image: 'https://images.unsplash.com/photo-1591609073556-86d5f0826f5e?w=800',
      rating: 4,
      features: ['Kültür Turu', 'Tarihi Mekanlar', 'Yerel Lezzetler']
    },
    {
      id: 5,
      title: 'Gürcistan Keşfi',
      duration: '5 Gün / 4 Gece',
      price: '€290',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
      rating: 5,
      features: ['Doğa & Kültür', 'Şarap Turları', 'Uygun Fiyat']
    },
    {
      id: 6,
      title: 'Kuzey Kıbrıs Tatil',
      duration: '4 Gün / 3 Gece',
      price: '€180',
      image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800',
      rating: 4,
      features: ['Yakın Mesafe', 'Ekonomik', 'Plaj & Deniz']
    }
  ];

  const highlights = [
    'Pasaport ile seyahat imkanı, vize işlemi gerektirmez',
    'Hızlı rezervasyon ve kolay giriş işlemleri',
    'Uygun fiyatlı paket seçenekleri',
    'Bütçenize uygun çeşitli destinasyonlar',
    'Son dakika kampanyaları ve erken rezervasyon indirimleri',
    'Deneyimli rehber kadrosu ile güvenli seyahat'
  ];

  const whyChoose = [
    '15+ Vizesiz Destinasyon',
    'En Uygun Fiyat Garantisi',
    '7/24 Müşteri Desteği',
    'Esnek İptal Koşulları'
  ];

  return (
    <TourTemplate
      title="Vizesiz Yurt Dışı Turları"
      description="Pasaportunuz yeter! Vize derdi olmadan keşfedilecek muhteşem destinasyonlar."
      heroImage="https://images.unsplash.com/photo-1744478037033-5aa3a3c9f01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXNhJTIwZnJlZSUyMHRyYXZlbCUyMGJlYWNofGVufDF8fHx8MTc2NTIwMjA1MHww&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}