import { useState } from 'react';
import { CheckCircle, Star, Calendar, Filter, X } from 'lucide-react';

export function AllTours() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Tüm turlar - Her kategoriden
  const allTours = [
    // İtalya Turları
    { id: 'italy-1', category: 'Yurt Dışı Turları', subCategory: 'İtalya', title: 'Roma & Floransa Klasikleri', duration: '7 Gün / 6 Gece', price: 34999, priceText: '₺34.999', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', rating: 5, features: ['Vatikan', 'Colosseum', 'Uffizi Galerisi'] },
    { id: 'italy-2', category: 'Yurt Dışı Turları', subCategory: 'İtalya', title: 'Venedik & Milano Turu', duration: '6 Gün / 5 Gece', price: 32500, priceText: '₺32.500', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800', rating: 5, features: ['Gondol Turu', 'Duomo', 'Moda Başkenti'] },
    { id: 'italy-3', category: 'Yurt Dışı Turları', subCategory: 'İtalya', title: 'Güney İtalya & Amalfi', duration: '8 Gün / 7 Gece', price: 38000, priceText: '₺38.000', image: 'https://images.unsplash.com/photo-1534445538923-75f38c93c81f?w=800', rating: 5, features: ['Napoli', 'Amalfi Kıyıları', 'Capri Adası'] },
    { id: 'italy-4', category: 'Yurt Dışı Turları', subCategory: 'İtalya', title: 'Toskana Bağ Rotası', duration: '5 Gün / 4 Gece', price: 29500, priceText: '₺29.500', image: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=800', rating: 5, features: ['Şarap Turları', 'Chianti', 'Şirin Kasabalar'] },
    { id: 'italy-5', category: 'Yurt Dışı Turları', subCategory: 'İtalya', title: 'İtalya Panorama', duration: '10 Gün / 9 Gece', price: 45000, priceText: '₺45.000', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800', rating: 5, features: ['12 Şehir', 'Komple İtalya', 'Kültür & Sanat'] },
    { id: 'italy-6', category: 'Yurt Dışı Turları', subCategory: 'İtalya', title: 'İtalya Balayı Özel', duration: '7 Gün / 6 Gece', price: 42000, priceText: '₺42.000', image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=800', rating: 5, features: ['Romantik Oteller', 'Özel Turlar', 'Lüks Deneyim'] },

    // Japonya Turları
    { id: 'japan-1', category: 'Yurt Dışı Turları', subCategory: 'Japonya', title: 'Tokyo & Kyoto Klasik', duration: '8 Gün / 7 Gece', price: 42000, priceText: '₺42.000', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', rating: 5, features: ['Modern Tokyo', 'Tarihi Kyoto', 'Geleneksel Deneyim'] },
    { id: 'japan-2', category: 'Yurt Dışı Turları', subCategory: 'Japonya', title: 'Japonya Panorama', duration: '12 Gün / 11 Gece', price: 58000, priceText: '₺58.000', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', rating: 5, features: ['5 Şehir', 'Fuji Dağı', 'Kültür Turu'] },
    { id: 'japan-3', category: 'Yurt Dışı Turları', subCategory: 'Japonya', title: 'Kiraz Çiçeği Festivali', duration: '10 Gün / 9 Gece', price: 52000, priceText: '₺52.000', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800', rating: 5, features: ['Sakura Mevsimi', 'Bahçe Turları', 'Fotoğraf Turu'] },
    { id: 'japan-4', category: 'Yurt Dışı Turları', subCategory: 'Japonya', title: 'Osaka Gastronomi Turu', duration: '6 Gün / 5 Gece', price: 38500, priceText: '₺38.500', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', rating: 5, features: ['Yemek Turları', 'Market Gezileri', 'Michelin Restoranlar'] },
    { id: 'japan-5', category: 'Yurt Dışı Turları', subCategory: 'Japonya', title: 'Kış Japonya & Kayak', duration: '9 Gün / 8 Gece', price: 48000, priceText: '₺48.000', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', rating: 5, features: ['Hokkaido Kayak', 'Kaplıcalar', 'Kar Festivali'] },
    { id: 'japan-6', category: 'Yurt Dışı Turları', subCategory: 'Japonya', title: 'Japonya Express', duration: '5 Gün / 4 Gece', price: 32000, priceText: '₺32.000', image: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800', rating: 4, features: ['Tokyo Highlights', 'Hızlı Tur', 'Ekonomik'] },

    // Yunanistan Turları
    { id: 'greece-1', category: 'Yurt Dışı Turları', subCategory: 'Yunanistan', title: 'Santorini Romantik Kaçış', duration: '5 Gün / 4 Gece', price: 28000, priceText: '₺28.000', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800', rating: 5, features: ['Caldera Manzarası', 'Gün Batımı', 'Beyaz Evler'] },
    { id: 'greece-2', category: 'Yurt Dışı Turları', subCategory: 'Yunanistan', title: 'Mykonos & Santorini Kombo', duration: '7 Gün / 6 Gece', price: 35000, priceText: '₺35.000', image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800', rating: 5, features: ['2 Ada', 'Gece Hayatı', 'Plaj Kulüpleri'] },
    { id: 'greece-3', category: 'Yurt Dışı Turları', subCategory: 'Yunanistan', title: 'Atina Klasik', duration: '4 Gün / 3 Gece', price: 18500, priceText: '₺18.500', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800', rating: 5, features: ['Akropolis', 'Antik Tarih', 'Şehir Turu'] },
    { id: 'greece-4', category: 'Yurt Dışı Turları', subCategory: 'Yunanistan', title: 'Girit Adası Turu', duration: '6 Gün / 5 Gece', price: 24000, priceText: '₺24.000', image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800', rating: 5, features: ['Knossos Sarayı', 'Plajlar', 'Zeytinyağı Tadımı'] },
    { id: 'greece-5', category: 'Yurt Dışı Turları', subCategory: 'Yunanistan', title: 'Rodos Şövalye Adası', duration: '5 Gün / 4 Gece', price: 22000, priceText: '₺22.000', image: 'https://images.unsplash.com/photo-1601581348382-232295465bdc?w=800', rating: 5, features: ['Ortaçağ Şehri', 'Antik Lindos', 'Termal Kaynaklar'] },
    { id: 'greece-6', category: 'Yurt Dışı Turları', subCategory: 'Yunanistan', title: 'Yunan Adaları Cruise', duration: '8 Gün / 7 Gece', price: 42000, priceText: '₺42.000', image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800', rating: 5, features: ['5 Ada', 'Gemi Turu', 'Her Şey Dahil'] },

    // Mısır Turları
    { id: 'egypt-1', category: 'Yurt Dışı Turları', subCategory: 'Mısır', title: 'Kahire & Piramitler', duration: '5 Gün / 4 Gece', price: 18000, priceText: '₺18.000', image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800', rating: 5, features: ['Giza Piramitleri', 'Sfenks', 'Mısır Müzesi'] },
    { id: 'egypt-2', category: 'Yurt Dışı Turları', subCategory: 'Mısır', title: 'Nil Nehri Cruise', duration: '7 Gün / 6 Gece', price: 32000, priceText: '₺32.000', image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800', rating: 5, features: ['Lüks Gemi', 'Luxor & Aswan', 'Tapınaklar'] },
    { id: 'egypt-3', category: 'Yurt Dışı Turları', subCategory: 'Mısır', title: 'Mısır Ekspres', duration: '4 Gün / 3 Gece', price: 15000, priceText: '₺15.000', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800', rating: 4, features: ['Hızlı Tur', 'Önemli Noktalar', 'Ekonomik'] },

    // Balkan Turları
    { id: 'balkans-1', category: 'Yurt Dışı Turları', subCategory: 'Balkan Turları', title: 'Balkan Üçgeni', duration: '8 Gün / 7 Gece', price: 24500, priceText: '₺24.500', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800', rating: 5, features: ['Bosna', 'Sırbistan', 'Hırvatistan'] },
    { id: 'balkans-2', category: 'Yurt Dışı Turları', subCategory: 'Balkan Turları', title: 'Balkan Turu Komple', duration: '12 Gün / 11 Gece', price: 38000, priceText: '₺38.000', image: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=800', rating: 5, features: ['7 Ülke', 'Kültür Rotası', 'Tarihi Şehirler'] },

    // Karadağ Turları
    { id: 'montenegro-1', category: 'Yurt Dışı Turları', subCategory: 'Karadağ', title: 'Karadağ Kıyıları', duration: '6 Gün / 5 Gece', price: 22000, priceText: '₺22.000', image: 'https://images.unsplash.com/photo-1565530916503-c15dff5e8d27?w=800', rating: 5, features: ['Kotor Körfezi', 'Budva', 'Adriyatik'] },

    // Vizesiz Turlar
    { id: 'visa-free-1', category: 'Yurt Dışı Turları', subCategory: 'Vizesiz Yurt Dışı', title: 'Bali Cennet Adası', duration: '8 Gün / 7 Gece', price: 28000, priceText: '₺28.000', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', rating: 5, features: ['Tapınaklar', 'Pirinç Tarlaları', 'Plajlar'] },
    { id: 'visa-free-2', category: 'Yurt Dışı Turları', subCategory: 'Vizesiz Yurt Dışı', title: 'Maldivler Lüks', duration: '6 Gün / 5 Gece', price: 52000, priceText: '₺52.000', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800', rating: 5, features: ['Su Üstü Villa', 'Her Şey Dahil', 'Dalış'] },
    { id: 'visa-free-3', category: 'Yurt Dışı Turları', subCategory: 'Vizesiz Yurt Dışı', title: 'Gürcistan Kültür Turu', duration: '7 Gün / 6 Gece', price: 18500, priceText: '₺18.500', image: 'https://images.unsplash.com/photo-1585856262626-317c89469e5e?w=800', rating: 5, features: ['Tiflis', 'Şarap Yolu', 'Kafkas Dağları'] },

    // Dubai Turları
    { id: 'dubai-1', category: 'Yurt Dışı Turları', subCategory: 'Dubai', title: 'Dubai Klasik Tur', duration: '5 Gün / 4 Gece', price: 22999, priceText: '₺22.999', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', rating: 5, features: ['Burj Khalifa', 'Dubai Mall', 'Çöl Safari'] },
    { id: 'dubai-2', category: 'Yurt Dışı Turları', subCategory: 'Dubai', title: 'Dubai Lüks Paket', duration: '7 Gün / 6 Gece', price: 38000, priceText: '₺38.000', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800', rating: 5, features: ['5 Yıldız Otel', 'VIP Turlar', 'Özel Transfer'] },
    { id: 'dubai-3', category: 'Yurt Dışı Turları', subCategory: 'Dubai', title: 'Dubai & Abu Dhabi', duration: '6 Gün / 5 Gece', price: 27500, priceText: '₺27.500', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800', rating: 5, features: ['2 Şehir', 'Şeyh Zayed Camii', 'Ferrari World'] },
    { id: 'dubai-4', category: 'Yurt Dışı Turları', subCategory: 'Dubai', title: 'Dubai Alışveriş Festivali', duration: '4 Gün / 3 Gece', price: 19999, priceText: '₺19.999', image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800', rating: 5, features: ['Alışveriş Turu', 'İndirimler', 'Mall Gezisi'] },
    { id: 'dubai-5', category: 'Yurt Dışı Turları', subCategory: 'Dubai', title: 'Dubai Balayı', duration: '6 Gün / 5 Gece', price: 35000, priceText: '₺35.000', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800', rating: 5, features: ['Romantik Akşam Yemekleri', 'Yat Turu', 'Spa'] },
    { id: 'dubai-6', category: 'Yurt Dışı Turları', subCategory: 'Dubai', title: 'Dubai Ekspres', duration: '3 Gün / 2 Gece', price: 15500, priceText: '₺15.500', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', rating: 4, features: ['Hızlı Tur', 'Önemli Noktalar', 'Ekonomik'] },

    // Avrupa Kültür Turları
    { id: 'europe-culture-1', category: 'Kültür Turları', subCategory: 'Avrupa Kültür', title: 'Paris Sanat Turu', duration: '5 Gün / 4 Gece', price: 32000, priceText: '₺32.000', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', rating: 5, features: ['Louvre', 'Eiffel', 'Seine Cruise'] },
    { id: 'europe-culture-2', category: 'Kültür Turları', subCategory: 'Avrupa Kültür', title: 'Orta Avrupa Rotası', duration: '10 Gün / 9 Gece', price: 42000, priceText: '₺42.000', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800', rating: 5, features: ['Prag', 'Viyana', 'Budapeşte'] },

    // Asya Kültür Turları
    { id: 'asia-culture-1', category: 'Kültür Turları', subCategory: 'Asya Kültür', title: 'Çin Büyük Duvar', duration: '9 Gün / 8 Gece', price: 38000, priceText: '₺38.000', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800', rating: 5, features: ['Pekin', 'Şangay', 'Terrakota Ordusu'] },
    { id: 'asia-culture-2', category: 'Kültür Turları', subCategory: 'Asya Kültür', title: 'Hindistan Altın Üçgen', duration: '8 Gün / 7 Gece', price: 28000, priceText: '₺28.000', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800', rating: 5, features: ['Delhi', 'Agra', 'Jaipur'] },

    // Orta Doğu Turları
    { id: 'middle-east-1', category: 'Kültür Turları', subCategory: 'Orta Doğu', title: 'Ürdün Petra Hazinesi', duration: '6 Gün / 5 Gece', price: 26000, priceText: '₺26.000', image: 'https://images.unsplash.com/photo-1585155967216-77c612902c98?w=800', rating: 5, features: ['Petra', 'Wadi Rum', 'Ölü Deniz'] },

    // Kutsal Topraklar
    { id: 'holy-lands-1', category: 'Kültür Turları', subCategory: 'Kutsal Topraklar', title: 'Kudüs & Kutsal Yerler', duration: '7 Gün / 6 Gece', price: 32000, priceText: '₺32.000', image: 'https://images.unsplash.com/photo-1605971868720-63e6a63d1eb4?w=800', rating: 5, features: ['Kudüs', 'Betlehem', 'Nasıra'] },

    // Uzak Doğu
    { id: 'far-east-1', category: 'Kültür Turları', subCategory: 'Uzak Doğu', title: 'Singapur & Malezya', duration: '7 Gün / 6 Gece', price: 32000, priceText: '€2.650', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800', rating: 5, features: ['Modern Şehirler', '2 Ülke', 'Alışveriş'] },

    // Türkiye Turları
    { id: 'antalya-1', category: 'Türkiye Turları', subCategory: 'Antalya', title: 'Antalya Klasik Tur', duration: '4 Gün / 3 Gece', price: 220, priceText: '€220', image: 'https://images.unsplash.com/photo-1648644769787-6e4f77f26703?w=800', rating: 5, features: ['Kaleiçi', 'Düden Şelalesi', 'Plaj Keyfi'] },
    { id: 'antalya-2', category: 'Türkiye Turları', subCategory: 'Antalya', title: 'Antalya Her Şey Dahil', duration: '7 Gün / 6 Gece', price: 450, priceText: '€450', image: 'https://images.unsplash.com/photo-1669046632648-609242cd51e8?w=800', rating: 5, features: ['5 Yıldız Otel', 'Her Şey Dahil', 'Aqua Park'] },
    
    { id: 'cappadocia-1', category: 'Türkiye Turları', subCategory: 'Kapadokya', title: 'Kapadokya Balon Turu', duration: '3 Gün / 2 Gece', price: 225, priceText: '€225', image: 'https://images.unsplash.com/photo-1641958308842-8bfb108a0b57?w=800', rating: 5, features: ['Sıcak Hava Balonu', 'Peri Bacaları', 'Mağara Otel'] },
    { id: 'cappadocia-2', category: 'Türkiye Turları', subCategory: 'Kapadokya', title: 'Kapadokya Özel Tur', duration: '4 Gün / 3 Gece', price: 340, priceText: '€340', image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800', rating: 5, features: ['VIP Balon Turu', 'Yeraltı Şehri', 'ATV Safari'] },
    
    { id: 'aegean-1', category: 'Türkiye Turları', subCategory: 'Ege', title: 'Ege Kıyıları Turu', duration: '5 Gün / 4 Gece', price: 295, priceText: '€295', image: 'https://images.unsplash.com/photo-1656506598002-9a5138c3a461?w=800', rating: 5, features: ['Efes Antik Kenti', 'Pamukkale', 'Kuşadası'] },
    { id: 'aegean-2', category: 'Türkiye Turları', subCategory: 'Ege', title: 'Bodrum & Datça', duration: '6 Gün / 5 Gece', price: 380, priceText: '€380', image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800', rating: 5, features: ['Bodrum Kalesi', 'Datça Yarımadası', 'Plaj Keyfi'] },
    
    { id: 'mediterranean-1', category: 'Türkiye Turları', subCategory: 'Akdeniz', title: 'Kaş & Kekova', duration: '4 Gün / 3 Gece', price: 320, priceText: '€320', image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800', rating: 5, features: ['Batık Şehir', 'Tekne Turu', 'Dalış'] },
    { id: 'mediterranean-2', category: 'Türkiye Turları', subCategory: 'Akdeniz', title: 'Fethiye & Ölüdeniz', duration: '6 Gün / 5 Gece', price: 395, priceText: '€395', image: 'https://images.unsplash.com/photo-1599577180661-f1e7c77bbc0a?w=800', rating: 5, features: ['Yamaç Paraşütü', 'Mavi Lagün', 'Saklıkent'] },
  ];

  // Kategoriler
  const categories = [
    { value: 'all', label: 'Tüm Turlar', count: allTours.length },
    { value: 'Yurt Dışı Turları', label: 'Yurt Dışı Turları', count: allTours.filter(t => t.category === 'Yurt Dışı Turları').length },
    { value: 'Kültür Turları', label: 'Kültür Turları', count: allTours.filter(t => t.category === 'Kültür Turları').length },
    { value: 'Türkiye Turları', label: 'Türkiye Turları', count: allTours.filter(t => t.category === 'Türkiye Turları').length },
  ];

  // Filtreleme fonksiyonu
  const filteredTours = allTours.filter(tour => {
    // Kategori filtresi
    if (selectedCategory !== 'all' && tour.category !== selectedCategory) return false;
    
    // Fiyat filtresi
    if (selectedPrice !== 'all') {
      if (selectedPrice === 'low' && tour.price > 25000) return false;
      if (selectedPrice === 'medium' && (tour.price < 25000 || tour.price > 40000)) return false;
      if (selectedPrice === 'high' && tour.price < 40000) return false;
    }
    
    // Süre filtresi
    if (selectedDuration !== 'all') {
      const days = parseInt(tour.duration.split(' ')[0]);
      if (selectedDuration === 'short' && days > 5) return false;
      if (selectedDuration === 'medium' && (days < 6 || days > 8)) return false;
      if (selectedDuration === 'long' && days < 9) return false;
    }
    
    // Rating filtresi
    if (selectedRating > 0 && tour.rating < selectedRating) return false;
    
    return true;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedDuration('all');
    setSelectedRating(0);
  };

  const FilterPanel = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filtreler
        </h3>
        <button 
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Temizle
        </button>
      </div>

      {/* Kategori Filtresi */}
      <div className="mb-6">
        <h4 className="text-gray-700 mb-3">Kategori</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat.value} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="radio"
                name="category"
                value={cat.value}
                checked={selectedCategory === cat.value}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="flex-1">{cat.label}</span>
              <span className="text-sm text-gray-500">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Fiyat Filtresi */}
      <div className="mb-6">
        <h4 className="text-gray-700 mb-3">Fiyat Aralığı</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="price"
              value="all"
              checked={selectedPrice === 'all'}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>Tümü</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="price"
              value="low"
              checked={selectedPrice === 'low'}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>₺25.000'e kadar</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="price"
              value="medium"
              checked={selectedPrice === 'medium'}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>₺25.000 - ₺40.000</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="price"
              value="high"
              checked={selectedPrice === 'high'}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>₺40.000+</span>
          </label>
        </div>
      </div>

      {/* Süre Filtresi */}
      <div className="mb-6">
        <h4 className="text-gray-700 mb-3">Tur Süresi</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="duration"
              value="all"
              checked={selectedDuration === 'all'}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>Tümü</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="duration"
              value="short"
              checked={selectedDuration === 'short'}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>1-5 Gün</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="duration"
              value="medium"
              checked={selectedDuration === 'medium'}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>6-8 Gün</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="duration"
              value="long"
              checked={selectedDuration === 'long'}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>9+ Gün</span>
          </label>
        </div>
      </div>

      {/* Rating Filtresi */}
      <div className="mb-6">
        <h4 className="text-gray-700 mb-3">Minimum Puan</h4>
        <div className="space-y-2">
          {[0, 4, 5].map(rating => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={selectedRating === rating}
                onChange={(e) => setSelectedRating(Number(e.target.value))}
                className="w-4 h-4 text-blue-600"
              />
              <div className="flex items-center gap-1">
                {rating === 0 ? (
                  <span>Tümü</span>
                ) : (
                  <>
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-1">ve üzeri</span>
                  </>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4 text-center">Tüm Turlar</h1>
          <p className="text-xl text-center text-white/90">
            {filteredTours.length} adet tur bulundu
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2"
          >
            <Filter className="w-5 h-5" />
            Filtreler
          </button>

          {/* Mobile Filter Overlay */}
          {mobileFilterOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileFilterOpen(false)}>
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-4">
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="absolute top-4 right-4"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <FilterPanel />
                </div>
              </div>
            </div>
          )}

          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Tours Grid */}
          <div className="flex-1">
            {filteredTours.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-xl mb-4">Seçtiğiniz filtrelere uygun tur bulunamadı.</p>
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
                  <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${tour.image})` }}
                    />
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {tour.subCategory}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < tour.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-lg mb-3">{tour.title}</h3>
                      <div className="space-y-2 mb-4">
                        {tour.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="text-xl text-blue-600">{tour.priceText}</div>
                      </div>
                      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Detayları Gör
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}