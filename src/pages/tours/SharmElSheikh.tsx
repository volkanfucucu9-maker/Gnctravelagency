import { TourTemplate } from '../../components/TourTemplate';

export function SharmElSheikh() {
  const packages = [
    {
      id: 1,
      title: 'Sharm El Sheikh Her Şey Dahil',
      duration: '7 Gün / 6 Gece',
      price: '€400',
      image: 'https://images.unsplash.com/photo-1583197109934-e5f2c8e6bda9?w=800',
      rating: 5,
      features: ['Ultra Her Şey Dahil', '5 Yıldız Otel', 'Özel Plaj']
    },
    {
      id: 2,
      title: 'Dalış Cenneti Paketi',
      duration: '6 Gün / 5 Gece',
      price: '€450',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      rating: 5,
      features: ['Dalış Eğitimi', 'Tüplü Dalış', 'Mercan Resifleri']
    },
    {
      id: 3,
      title: 'Aile Tatili Paketi',
      duration: '8 Gün / 7 Gece',
      price: '€480',
      image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=800',
      rating: 5,
      features: ['Çocuk Kulübü', 'Aquapark', 'Animasyon']
    },
    {
      id: 4,
      title: 'Balayı Özel',
      duration: '5 Gün / 4 Gece',
      price: '€530',
      image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800',
      rating: 5,
      features: ['Romantik Suite', 'Spa', 'Özel Akşam Yemeği']
    },
    {
      id: 5,
      title: 'Ekonomik Tatil',
      duration: '5 Gün / 4 Gece',
      price: '€300',
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800',
      rating: 4,
      features: ['Uygun Fiyat', 'Her Şey Dahil', 'Deniz Keyfi']
    },
    {
      id: 6,
      title: 'Lüks Tatil Paketi',
      duration: '7 Gün / 6 Gece',
      price: '€640',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800',
      rating: 5,
      features: ['5* Ultra Lüks', 'VIP Transfer', 'Butler Servis']
    }
  ];

  const highlights = [
    'Kırmızı Deniz\'in kristal berraklığında yüzme',
    'Dünyanın en iyi dalış noktalarından biri',
    'Muhteşem mercan resifleri ve deniz canlıları',
    'Her şey dahil sistem ile rahat tatil',
    'Çöl safarisi ve Bedevilere ziyaret',
    'Yıl boyunca güneşli ve ılık hava'
  ];

  const whyChoose = [
    'En İyi Otel Seçenekleri',
    'Dalış Uzmanları',
    'Türk Acente Garantisi',
    'VIP Transfer'
  ];

  return (
    <TourTemplate
      title="Sharm El Sheikh Turları"
      description="Kırmızı Deniz\'in eşsiz güzelliklerini Sharm El Sheikh\'te keşfedin."
      heroImage="https://images.unsplash.com/photo-1748667866987-fcbf24ff832f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFybSUyMGVsJTIwc2hlaWtoJTIwcmVkJTIwc2VhfGVufDF8fHx8MTc2NTIwMjA1NHww&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}