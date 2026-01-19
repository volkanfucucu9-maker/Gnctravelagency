import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { useEffect } from 'react';
import { trackFacebookEvent } from '../components/FacebookPixel';

const blogPosts = [
  {
    id: 'make-it-in-the-emirates-2025',
    title: 'Make It in the Emirates 2025: Birleşik Arap Emirlikleri\'nde İş ve Yatırım Fırsatları',
    category: 'Etkinlik & Fırsat',
    date: '19 Ocak 2026',
    author: 'GNC Travel',
    image: 'https://images.unsplash.com/photo-1716580107641-c2cc1832b559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVQUUlMjBFbWlyYXRlcyUyMGJ1c2luZXNzJTIwZXZlbnR8ZW58MXx8fHwxNzY4ODE4NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'Türkiye\'den iş insanları, girişimciler ve yatırımcılar için BAE\'de iş kurma, yatırım yapma ve kariyer fırsatlarını keşfetme platformu: Make It in the Emirates.',
    content: `
      <h2>🇦🇪 Make It in the Emirates Nedir?</h2>
      <p><strong>Make It in the Emirates (MIITE)</strong>, Birleşik Arap Emirlikleri hükümetinin düzenlediği, Türkiye'den iş insanları, girişimciler, yatırımcılar ve genç yeteneklerin BAE'deki iş, yatırım ve kariyer fırsatlarını yakından tanımasını sağlayan önemli bir platformdur.</p>
      
      <p>4-7 Mayıs 2025 tarihleri arasında gerçekleşecek bu etkinlik, BAE'nin dünya çapında iş yapma kolaylığı açısından lider konumunu ve sunduğu benzersiz fırsatları katılımcılara tanıtmayı amaçlıyor.</p>

      <h2>🎯 Etkinliğin Amacı</h2>
      <p>Make It in the Emirates, sadece bir tanıtım etkinliği değil; aynı zamanda:</p>
      <ul>
        <li><strong>Networking fırsatı:</strong> BAE'deki iş dünyası liderleri, yatırımcılar ve girişimcilerle doğrudan iletişim</li>
        <li><strong>Yatırım danışmanlığı:</strong> BAE'de şirket kurma, yatırım yapma ve vergi avantajları hakkında birebir bilgilendirme</li>
        <li><strong>Kariyer rehberliği:</strong> BAE'de çalışma izni, iş bulma ve kariyer planlama konularında uzman desteği</li>
        <li><strong>Sektörel keşif:</strong> Teknoloji, finans, gayrimenkul, turizm ve enerji gibi sektörlerdeki fırsatları yerinde görme</li>
        <li><strong>Vize ve yasal süreçler:</strong> Uzun süreli ikamet, Golden Visa ve iş vizesi başvuru süreçleri hakkında detaylı bilgi</li>
      </ul>

      <h2>💼 Kimler Katılmalı?</h2>
      <p>Make It in the Emirates, geniş bir katılımcı profiline hitap ediyor:</p>
      
      <h3>🏢 İş İnsanları ve Girişimciler</h3>
      <ul>
        <li>BAE'de şirket kurmak isteyen girişimciler</li>
        <li>İşlerini BAE'ye taşımak isteyen KOBİ sahipleri</li>
        <li>Uluslararası iş ağını genişletmek isteyen yatırımcılar</li>
        <li>Franchise ve distribütörlük fırsatlarını araştıranlar</li>
      </ul>

      <h3>💰 Yatırımcılar</h3>
      <ul>
        <li>Gayrimenkul yatırımı yapmayı düşünenler</li>
        <li>Start-up ekosisteminde yer almak isteyenler</li>
        <li>Portföyünü BAE'ye yönlendirmek isteyen bireysel yatırımcılar</li>
        <li>Golden Visa programına başvurmayı planlayan aileler</li>
      </ul>

      <h3>🎓 Genç Yetenekler ve Profesyoneller</h3>
      <ul>
        <li>BAE'de kariyer yapmak isteyen mezunlar</li>
        <li>Teknoloji, finans, sağlık sektörlerinde çalışmak isteyen profesyoneller</li>
        <li>Uluslararası tecrübe kazanmak isteyen gençler</li>
        <li>Freelance ve uzaktan çalışma fırsatlarını keşfetmek isteyenler</li>
      </ul>

      <div style="background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 32px; margin: 40px 0; display: flex; flex-wrap: wrap; align-items: center; gap: 24px; box-shadow: 0 10px 40px rgba(59, 130, 246, 0.15);">
        <div style="flex: 1; min-width: 280px;">
          <span style="display: inline-block; background: #3b82f6; color: white; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 16px;">Özel Hizmet</span>
          <h3 style="color: #1e40af; margin-bottom: 16px; font-size: 24px;">🇦🇪 Birleşik Arap Emirlikleri Vize Hizmetleri</h3>
          <p style="color: #475569; margin-bottom: 20px; line-height: 1.6;">Birleşik Arap Emirlikleri'ne seyahatiniz için profesyonel vize danışmanlığı. Hızlı işlem, yüksek onay oranı ve özel Dubai turlarımızla sizlere hizmet veriyoruz.</p>
          <a href="/#/dubai-visa" style="display: inline-flex; align-items: center; gap: 8px; background: #3b82f6; color: white; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: 600; transition: all 0.3s;">
            Detaylı Bilgi Al
            <span style="font-size: 18px;">→</span>
          </a>
          <p style="color: #64748b; margin-top: 12px; font-size: 13px;">Turist Vizesi • Transit Vize • Çok Girişli Vize</p>
        </div>
        <div style="flex: 1; min-width: 300px; max-width: 450px;">
          <img src="https://images.unsplash.com/photo-1651063820152-d3e7a27b4d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMEJ1cmolMjBLaGFsaWZhJTIwc2t5bGluZSUyMHN1bnNldHxlbnwxfHx8fDE3Njg4MjEyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Dubai Skyline" style="width: 100%; height: 240px; object-fit: cover; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.15);" />
        </div>
      </div>

      <h2>🌟 BAE'de İş Yapmanın Avantajları</h2>
      
      <h3>📌 Vergi Avantajları</h3>
      <ul>
        <li>%0 kurumlar vergisi (belirli serbest bölgelerde)</li>
        <li>Kişisel gelir vergisi yok</li>
        <li>KDV oranı sadece %5</li>
        <li>Sermaye transferinde kısıtlama yok</li>
      </ul>

      <h3>🌍 Stratejik Konum</h3>
      <ul>
        <li>Asya, Afrika ve Avrupa arasında köprü konumu</li>
        <li>Dünya çapında 240+ ülkeye kolay erişim</li>
        <li>Dubai Havalimanı: Dünyanın en işlek uluslararası havalimanı</li>
        <li>24 saat içinde dünya nüfusunun %80'ine ulaşım</li>
      </ul>

      <h3>💡 İnovasyon ve Teknoloji</h3>
      <ul>
        <li>Yapay zeka ve blockchain gibi gelecek teknolojilere yüksek yatırım</li>
        <li>Dünya çapında tanınan teknoloji merkezleri (Dubai Silicon Oasis, DIFC vb.)</li>
        <li>Start-up'lar için hibe ve destek programları</li>
        <li>5G altyapısı ve akıllı şehir uygulamaları</li>
      </ul>

      <h3>🏆 İş Yapma Kolaylığı</h3>
      <ul>
        <li>Dünya Bankası sıralamasında ilk 20'de yer alıyor</li>
        <li>Şirket kurmak için sadece birkaç gün yeterli</li>
        <li>100+ serbest ticaret bölgesi</li>
        <li>Yabancı sermayeye %100 mülkiyet hakkı</li>
      </ul>

      <h2>🗓️ Etkinlik Detayları</h2>
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; border-radius: 12px; color: white; margin: 20px 0;">
        <p style="margin: 0;"><strong>📅 Tarih:</strong> 4-7 Mayıs 2025</p>
        <p style="margin: 8px 0 0 0;"><strong>📍 Konum:</strong> Birleşik Arap Emirlikleri (Dubai, Abu Dhabi, Sharjah)</p>
        <p style="margin: 8px 0 0 0;"><strong>📄 Vize Desteği:</strong> <a href="/#/dubai-visa" style="color: #ffd700;">BAE Vize Başvurusu için tıklayın</a></p>
      </div>

      <h2>📋 Etkinlik Programı (Taslak)</h2>
      
      <h3>1. Gün: Kayıt ve Açılış</h3>
      <ul>
        <li>Katılımcı kayıt ve karşılama</li>
        <li>Açılış konuşmaları ve BAE vizyonu sunumu</li>
        <li>Networking kokteyli</li>
      </ul>

      <h3>2. Gün: Sektörel Sunumlar ve Workshop'lar</h3>
      <ul>
        <li>Teknoloji ve inovasyon panelleri</li>
        <li>Gayrimenkul yatırım fırsatları</li>
        <li>Turizm ve konaklama sektörü</li>
        <li>Finans ve bankacılık</li>
      </ul>

      <h3>3. Gün: Birebir Görüşmeler ve Saha Ziyaretleri</h3>
      <ul>
        <li>Serbest bölge ziyaretleri</li>
        <li>Yatırımcı buluşmaları</li>
        <li>Gayrimenkul projeleri turu</li>
      </ul>

      <h3>4. Gün: Kapanış ve Takip</h3>
      <ul>
        <li>İş anlaşmaları ve MoU imzaları</li>
        <li>Vize ve yasal süreç danışmanlığı</li>
        <li>Kapanış yemeği ve networking</li>
      </ul>

      <h2>📝 GNC Travel ile Make It in the Emirates'e Katılın</h2>
      <p><strong>GNC Travel Agency</strong> olarak, Make It in the Emirates etkinliğine katılmak isteyen Türk iş insanları, girişimciler ve yatırımcılara <strong>tam destek paketi</strong> sunuyoruz:</p>

      <h3>✅ Hizmetlerimiz:</h3>
      <ul>
        <li><strong>🎫 Etkinlik Kayıt Desteği:</strong> MIITE'ye başvuru sürecinde rehberlik</li>
        <li><strong>✈️ Uçuş ve Konaklama:</strong> Ekonomik ve konforlu seyahat paketleri</li>
        <li><strong>📄 Vize İşlemleri:</strong> BAE vize başvurunuzun hızlı ve sorunsuz tamamlanması</li>
        <li><strong>🚗 Ulaşım Hizmetleri:</strong> Havalimanı transferi ve etkinlik alanı ulaşımı</li>
        <li><strong>👔 İş Danışmanlığı:</strong> BAE'de şirket kurma, yatırım yapma konularında ön bilgilendirme</li>
        <li><strong>🏨 Konaklama Önerileri:</strong> Etkinlik alanına yakın otellerde rezervasyon</li>
      </ul>

      <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 24px 0; border-radius: 8px;">
        <h3 style="color: #1e40af; margin-top: 0;">🎁 Özel GNC Travel Avantajları</h3>
        <ul>
          <li>Erken rezervasyonda %10 indirim</li>
          <li>Grup katılımlarda özel fiyatlandırma</li>
          <li>Ücretsiz vize danışmanlığı</li>
          <li>Etkinlik sonrası takip desteği</li>
          <li>BAE'de şirket kurma sürecinde aracılık</li>
        </ul>
      </div>

      <h2>🔑 Golden Visa ve Uzun Süreli İkamet</h2>
      <p>Make It in the Emirates etkinliği, aynı zamanda <strong>BAE Golden Visa</strong> programı hakkında detaylı bilgi almanın mükemmel bir fırsatı.</p>

      <h3>Golden Visa Avantajları:</h3>
      <ul>
        <li>5 veya 10 yıllık ikamet izni</li>
        <li>Sponsor gerektirmeden uzun süreli kalış</li>
        <li>Aile bireylerini de kapsama alma</li>
        <li>BAE'de sınırsız iş yapma hakkı</li>
        <li>Dünya çapında 180+ ülkeye vizesiz seyahat</li>
      </ul>

      <h3>Kimler Başvurabilir?</h3>
      <ul>
        <li>Yatırımcılar (minimum $545,000 gayrimenkul yatırımı)</li>
        <li>Girişimciler (onaylı iş planı ile)</li>
        <li>Uzman profesyoneller (doktor, mühendis, bilim insanı vb.)</li>
        <li>Üstün yetenekli öğrenciler</li>
      </ul>

      <h2>💬 Katılımcı Yorumları (2024 Etkinliği)</h2>
      <blockquote style="border-left: 4px solid #10b981; padding-left: 16px; color: #6b7280; font-style: italic; margin: 20px 0;">
        "Make It in the Emirates'e katıldıktan sonra Dubai'de bir teknoloji şirketi kurdum. Etkinlikteki bağlantılar sayesinde ilk yatırımcımı buldum ve Golden Visa aldım. Hayatımın en iyi kararıydı!"
        <footer style="margin-top: 8px; font-style: normal; color: #374151;">— <strong>Ahmet K.</strong>, Teknoloji Girişimcisi, İstanbul</footer>
      </blockquote>

      <blockquote style="border-left: 4px solid #10b981; padding-left: 16px; color: #6b7280; font-style: italic; margin: 20px 0;">
        "BAE'de gayrimenkul yatırımı yapmak istiyordum ama nereden başlayacağımı bilmiyordum. MIITE'de aldığım bilgiler sayesinde Dubai Marina'da bir daire aldım ve şimdi kira geliri elde ediyorum."
        <footer style="margin-top: 8px; font-style: normal; color: #374151;">— <strong>Elif Y.</strong>, Yatırımcı, Ankara</footer>
      </blockquote>

      <h2>📞 Hemen Başvurun!</h2>
      <p>Make It in the Emirates 2025'e katılmak ve BAE'deki sınırsız fırsatları keşfetmek için <strong>GNC Travel</strong> ile iletişime geçin.</p>

      <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 24px; border-radius: 12px; color: white; margin: 24px 0; text-align: center;">
        <h3 style="margin-top: 0; color: white;">🎯 Şimdi Rezervasyon Yapın!</h3>
        <p style="margin: 12px 0;">Etkinlik kontenjanı sınırlıdır. Yerinizi şimdiden ayırtın!</p>
        <p style="margin: 16px 0 0 0; font-size: 18px;">
          <strong>📞 Telefon:</strong> +90 543 220 05 43<br/>
          <strong>📧 E-posta:</strong> info@gnctravel.com
        </p>
      </div>

      <h2>🎬 Son Söz</h2>
      <p>Birleşik Arap Emirlikleri, sadece bir turizm destinasyonu değil; aynı zamanda dünyanın en hızlı büyüyen iş ve yatırım merkezlerinden biri. <strong>Make It in the Emirates</strong> etkinliği, bu eşsiz fırsatları yakından tanımanız ve BAE'de yeni bir sayfa açmanız için mükemmel bir başlangıç noktası.</p>

      <p>Hayallerinizi gerçeğe dönüştürmek için ilk adımı atın. <strong>GNC Travel</strong> ile bu yolculukta yanınızdayız!</p>

      <p style="text-align: center; margin-top: 32px; font-size: 18px;">
        <strong>🇦🇪 Make It in the Emirates – Geleceğinizi BAE'de İnşa Edin! 🚀</strong>
      </p>
    `,
  },
  {
    id: 'dubai-abartmadan-kesfet',
    title: 'Dubai\'yi Abartmadan Keşfetmek',
    category: 'Dubai Rehberi',
    date: '2 Ocak 2025',
    author: 'GNC Travel',
    image: 'https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBzdW5zZXQlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzY4ODIxNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'GNC Travel Agency\'den: Gerçek hayata yakın Dubai önerileri. Kartpostal durakları değil, Dubai\'nin günlük yaşamını keşfedin.',
    content: `
      <h2>GNC Travel Agency'den: Gerçek Hayata Yakın Dubai Önerileri</h2>
      <p>Dubai çoğu zaman tek bir çerçevede anlatılıyor: ya aşırı lüks ya da turistik kalabalıklar. Oysa bu şehir, kısa süreli ziyaretlerde bile daha sade, daha gündelik ve tekrar edilebilir deneyimler sunuyor.</p>
      <p><strong>GNC Travel Agency</strong> olarak bu yazıda; kartpostal durakları değil, Dubai'ye ilk kez gelenlerin ya da ikinci kez gidenlerin gerçekten vakit geçirmekten keyif aldığı bölgeleri paylaşıyoruz.</p>
      <p>Amacımız iddia etmek değil; yön göstermek.</p>

      <h2>Sabah: Günlük Hayat Nerede Başlıyor?</h2>
      <p>Dubai'de sabahları şehir yavaş başlar. Bu ritmi görmek için Downtown ya da Marina'ya gitmek gerekmez. <strong>Satwa</strong>, sabah saatlerinde Dubai'nin en doğal hâllerinden birini sunar.</p>
      <ul>
        <li>Küçük mahalle lokantaları</li>
        <li>Hızlı servis edilen kahvaltılar</li>
        <li>Günlük hayatına giden insanlar</li>
      </ul>
      <p>Burada geçirilen kısa bir zaman, Dubai'nin "yaşayan şehir" tarafını görmenizi sağlar. Tur programlarında genelde yer almaz; ama iyi bir başlangıçtır.</p>

      <h2>Öğle: Yerel Yemek, Gösterişsiz Mekânlar</h2>
      <p>Öğle saatleri için <strong>Karama</strong> pratik ve nettir. Burası Dubai'de yaşayanların yemek için tercih ettiği bölgelerden biridir.</p>
      <ul>
        <li>Uygun fiyatlı Güney Asya mutfağı</li>
        <li>Menüden çok tezgâha bakarak seçim</li>
        <li>Uzun oturmaya değil, işlevselliğe odaklı mekânlar</li>
      </ul>
      <p>Karama, "özel hissettirme" iddiası olmayan ama tekrar gidilen bir bölgedir.</p>

      <h2>Öğleden Sonra: Alışveriş Merkezi Dışında Bir Alternatif</h2>
      <p>Dubai'de her serbest zaman alışveriş merkezinde geçmek zorunda değil. <strong>Al Quoz</strong>, bu açıdan farklı bir duraktır.</p>
      <ul>
        <li>Sanayi bölgesi görünümünün içinde galeriler</li>
        <li>Küçük kahve kavurucuları</li>
        <li>Sessiz, sakin alanlar</li>
      </ul>
      <p>Turlarımıza katılan misafirlerin özellikle "farklı" bulduğu bölgelerden biridir.</p>

      <h2>Deniz Görmek İsteyenler İçin Daha Sakin Bir Seçenek</h2>
      <p>Dubai'de deniz keyfi her zaman kalabalık plajlar anlamına gelmez. <strong>Al Mamzar Beach Park</strong>, daha yerel ve sakin bir alternatiftir.</p>
      <ul>
        <li>Ailelerin tercih ettiği alanlar</li>
        <li>Daha az kalabalık</li>
        <li>Kısa süreli dinlenme için ideal</li>
      </ul>
      <p>Programı yoğun olmayan Dubai turlarında rahatlıkla değerlendirilebilir.</p>

      <h2>Akşam: Ulaşımın Kendisi Deneyim Olduğunda</h2>
      <p>Akşam saatlerinde <strong>Dubai Creek</strong> çevresi hâlâ işlevseldir. Abra ile karşıya geçmek turistik bir şovdan çok, günlük hayatın parçasıdır.</p>
      <ul>
        <li>Kısa</li>
        <li>Ucuz</li>
        <li>Pratik</li>
      </ul>
      <p>Dubai'de hâlâ değişmeden kalan nadir alışkanlıklardan biridir.</p>

      <h2>GNC Travel Agency ile Dubai Deneyimi</h2>
      <p><strong>GNC Travel Agency</strong> olarak Dubai'yi tek bir anlatıya sıkıştırmadan, farklı beklentilere göre planlıyoruz.</p>
      <ul>
        <li>Kültür + şehir + serbest zaman dengesi</li>
        <li>Rehberli Dubai turları</li>
        <li>Türkiye çıkışlı, planlı programlar</li>
        <li>Birleşik Arap Emirlikleri vizesi danışmanlığı ve başvuru takibi</li>
      </ul>
      <p>Dubai'ye ilk kez gidiyor olun ya da tekrar ziyaret ediyor olun; önemli olan şehrin size uygun hâlini görmek.</p>

      <h2>Son Not</h2>
      <p>Dubai her zaman "etkileyici" olmak zorunda değil. Doğru planlandığında rahat, düzenli ve yorucu olmayan bir seyahat sunar.</p>
      <p>Dubai turları, vize danışmanlığı ve güncel programlarımız hakkında bilgi almak için <strong>GNC Travel Agency</strong> ile iletişime geçebilirsiniz.</p>
    `,
  },
  {
    id: 'almanya-d-tipi-vize',
    title: 'Almanya Ulusal Vizesi (D Tipi) Nasıl Alınır? – 2025 Güncel Rehber',
    category: 'Ulusal Vize',
    date: '8 Aralık 2024',
    author: 'GNC Travel',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW55JTIwYnJhbmRlbmJ1cmdlcnxlbnwxfHx8fDE3NjUxODc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Almanya\'da uzun süreli yaşamak, çalışmak veya eğitim almak isteyenler için D tipi ulusal vize başvuru süreci ve gerekli belgeler hakkında detaylı rehber.',
    content: `
      <h2>🎯 D Tipi Vize Nedir, Kimler İçin Gereklidir?</h2>
      <p>D tipi vize; Almanya'da 90 günden uzun süre kalmak isteyen herkesin başvurması gereken ulusal vize türüdür. Genellikle şu amaçlarla alınır:</p>
      <ul>
        <li>Çalışma vizesi</li>
        <li>Öğrenci vizesi</li>
        <li>Aile birleşimi</li>
        <li>Staj, araştırma veya uzun dönem projeler</li>
        <li>Serbest çalışma ve uzmanlık programları</li>
      </ul>
      <p>Kısacası, Almanya'da bir hayat kurmak istiyorsan D tipi vize zorunludur. Sürecin eksiksiz yürütülmesi için birçok kişi gibi <strong>GNC Travel'ın profesyonel vize danışmanlığına</strong> başvurmak, hem zaman kazandırır hem de hata riskini azaltır.</p>

      <h2>📄 Gerekli Belgeler (Genel Liste)</h2>
      <p>Belgeler başvuru amacına göre değişse de çoğu kategoride şu evraklar zorunludur:</p>
      <ul>
        <li>Geçerli pasaport</li>
        <li>Doldurulmuş ulusal vize başvuru formu</li>
        <li>Biyometrik fotoğraf (son 6 ay)</li>
        <li>Finansal durumu gösteren belgeler</li>
        <li>Konaklama veya davetiye belgeleri</li>
        <li>Vize amacına özel ek evraklar:
          <ul>
            <li><strong>Çalışma:</strong> İş sözleşmesi, iş teklifi</li>
            <li><strong>Öğrenci:</strong> Kabul mektubu, mali yeterlilik</li>
            <li><strong>Aile birleşimi:</strong> Evlilik/akrablık kanıtları</li>
          </ul>
        </li>
      </ul>
      <p>Bu aşamada birçok başvuruda en büyük sorun, belgelerin eksik veya hatalı hazırlanması oluyor. <strong>GNC Travel</strong>, başvuru sahiplerinin belgelerini kontrol ederek süreci daha güvenli hâle getiriyor.</p>

      <h2>📝 Başvuru Süreci – Adım Adım</h2>
      
      <h3>1. Vize formunu doldur</h3>
      <p>Formu dikkatli ve eksiksiz doldurmak çok önemli. Yapılan basit bir hata bile süreci uzatabilir. <strong>GNC Travel danışmanları</strong> burada en sık yapılan hataları engellemenize yardımcı olabilir.</p>

      <h3>2. Randevu al</h3>
      <p>Konsolosluk randevuları baz�� dönemlerde çok hızlı dolar. Özellikle yaz aylarında ve akademik dönemlerde yoğunluk yaşanır. Erken planlama her zaman avantajdır.</p>

      <h3>3. Evraklarını hazırla ve kontrol ettir</h3>
      <p>Belgeler hazırlandıktan sonra mutlaka bir kez daha kontrol edilmelidir. Danışmanlık hizmeti alan birçok kişi bu aşamada <strong>GNC Travel'dan</strong> destek almayı tercih ediyor.</p>

      <h3>4. Mülakat ve biyometri işlemleri</h3>
      <p>Başvuru günü biyometrik veriler verilir, bazı vize türlerinde kısa bir mülakat yapılabilir. Hazırlıklı olmak önemlidir.</p>

      <h3>5. Sonuç süreci</h3>
      <p>Değerlendirme süreci başvuru türüne göre birkaç hafta sürebilir. Sonuç olumlu olursa pasaporta D tipi vize etiketi işlenir.</p>

      <h2>💡 Başvuru Yaparken Dikkat Edilmesi Gerekenler</h2>
      <ul>
        <li>Belgeleri eksiksiz hazırlayın</li>
        <li>Biyometrik fotoğraf standartlarını kontrol edin</li>
        <li>Maddi yeterliliği güçlü şekilde belgeleyin</li>
        <li>Randevu tarihini mümkün olduğunca erken oluşturun</li>
        <li>Gerekli hâllerde profesyonel destek alın</li>
      </ul>
      <p>Özellikle ilk kez başvuranlar için sürecin yoğun ve stresli olması normaldir. Bu yüzden birçok kişi, hata riskini azaltmak için <strong>GNC Travel</strong> gibi danışmanlık firmalarıyla çalışmayı tercih eder.</p>

      <h2>📌 Sonuç: Almanya Hayaline Bir Adım Daha Yakınsın</h2>
      <p>Almanya'da uzun süre yaşamak veya çalışmak isteyen herkes için D tipi ulusal vize, sürecin kapısını açan ilk adımdır. Belgelerin eksiksiz hazırlanması ve sürecin doğru yönetilmesi, başvurunun olumlu sonuçlanması açısından kritik önem taşır.</p>
      
      <h2>✈️ Almanya vize sürecine GNC Travel güvencesiyle başla!</h2>
      <p>Evrak hazırlama, randevu, form doldurma gibi detaylarla uğraşmadan, daha hızlı ve doğru bir başvuru süreci için <strong>GNC Travel danışmanlığını</strong> tercih edebilirsin. Hayalindeki Almanya yolculuğu için profesyonel bir başlangıç yap!</p>
    `,
  },
  {
    id: 'turist-vizesi',
    title: 'Turist Vizesi Nasıl Alınır? Gerekli Belgeler ve Süreç',
    category: 'Turist Vizesi',
    date: '5 Aralık 2024',
    author: 'GNC Travel',
    image: 'https://images.unsplash.com/photo-1646870116973-a8aebc4d0dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwdmFjYXRpb24lMjBiZWFjaHxlbnwxfHx8fDE3NjUxOTg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Yurtdışına turistik amaçlı seyahat etmek isteyenler için turist vizesi başvuru süreci, gerekli belgeler ve dikkat edilmesi gereken noktalar.',
    content: `
      <h2>Turist Vizesi Nedir?</h2>
      <p>Turist vizesi, yurtdışına tatil veya turistik amaçlı seyahat etmek isteyen kişilere verilen geçici vize türüdür. Bu vize ile belirli bir süre için ülkede turistik faaliyetlerde bulunabilirsiniz.</p>
      
      <h2>Gerekli Belgeler</h2>
      <ul>
        <li>Geçerli pasaport (en az 6 ay geçerliliği olan)</li>
        <li>Vize başvuru formu (eksiksiz doldurulmuş ve imzalanmış)</li>
        <li>Biyometrik fotoğraflar (2 adet, beyaz fon)</li>
        <li>Seyahat sigortası (minimum 30.000 Euro teminat)</li>
        <li>Otel rezervasyonu veya konaklamanızı gösterir belgeler</li>
        <li>Gidiş-dönüş uçak bileti rezervasyonu</li>
        <li>Banka hesap özeti (son 3-6 ay)</li>
        <li>İş yerinden izin belgesi ve maaş bordrosu</li>
        <li>Vize ücreti dekont veya makbuzu</li>
      </ul>

      <h2>Başvuru Süreci</h2>
      <p><strong>1. Randevu Alın:</strong> Vize başvurusu yapmak istediğiniz ülkenin konsolosluğu veya vize başvuru merkezinden randevu alın.</p>
      <p><strong>2. Belgeleri Hazırlayın:</strong> Tüm gerekli belgeleri eksiksiz ve doğru bir şekilde hazırlayın. Belgelerin çevirilerinin noter onaylı olması gerekebilir.</p>
      <p><strong>3. Başvuruyu Yapın:</strong> Randevu gününüzde tüm belgelerinizle birlikte başvuru merkezine gidin. Parmak izi ve fotoğraf alınacaktır.</p>
      <p><strong>4. Vize Ücretini Ödeyin:</strong> Vize başvuru ücretini ödeyin (ülkeye göre değişiklik gösterir).</p>
      <p><strong>5. Sonucu Bekleyin:</strong> Başvuru süreci genellikle 15-30 gün arasında sonuçlanır.</p>

      <h2>Önemli Noktalar</h2>
      <ul>
        <li>Başvuru yapmadan önce mutlaka ilgili ülkenin vize şartlarını kontrol edin</li>
        <li>Belgelerin güncel ve doğru olduğundan emin olun</li>
        <li>Yeterli finansal kaynağa sahip olduğunuzu kanıtlayın</li>
        <li>Seyahat amacınızı net bir şekilde belirtin</li>
        <li>Konsolosluk görüşmesine hazırlıklı gidin</li>
        <li>Vize başvurusu yapılan ülkenin dilinde hazırlanmış belgeler tercih edilir</li>
      </ul>

      <h2>Red Durumunda Ne Yapmalı?</h2>
      <p>Vize başvurunuz reddedilirse, ret gerekçesini öğrenin ve eksiklikleri tamamlayarak tekrar başvuru yapabilirsiniz. GNC Travel olarak vize red durumlarında danışmanlık hizmeti sunuyoruz.</p>
    `,
  },
  {
    id: 'egitim-vizesi',
    title: 'Eğitim Vizesi Başvurusu: Öğrenci Vizesi İçin Rehber',
    category: 'Eğitim Vizesi',
    date: '3 Aralık 2024',
    author: 'GNC Travel',
    image: 'https://images.unsplash.com/photo-1602494834339-3d17099adf96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdW5pdmVyc2l0eSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjUxOTg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Yurtdışında eğitim görmek isteyenler için öğrenci vizesi başvuru süreci, gerekli belgeler ve dikkat edilmesi gereken önemli detaylar.',
    content: `
      <h2>Eğitim Vizesi Nedir?</h2>
      <p>Eğitim vizesi, yurtdışında üniversite, dil okulu veya diğer eğitim kurumlarında öğrenim görmek isteyen öğrencilere verilen özel vize türüdür. Bu vize ile eğitim süreniz boyunca ülkede kalabilirsiniz.</p>
      
      <h2>Gerekli Belgeler</h2>
      <ul>
        <li>Geçerli pasaport (eğitim süresi + 6 ay geçerliliği olan)</li>
        <li>Öğrenci vizesi başvuru formu (tam ve eksiksiz doldurulmuş)</li>
        <li>Biyometrik fotoğraflar (2 adet)</li>
        <li>Kabul mektubu (üniversite veya eğitim kurumundan)</li>
        <li>Eğitim ücretinin ödendiğine dair makbuz</li>
        <li>Finansal yeterlilik belgesi (banka hesap özeti, burs belgesi, sponsor mektubu)</li>
        <li>Dil yeterlilik belgesi (TOEFL, IELTS, vs.)</li>
        <li>Sağlık sigortası</li>
        <li>Diploma ve transkript (noter onaylı çevirisi)</li>
        <li>Motivasyon mektubu</li>
        <li>Özgeçmiş (CV)</li>
        <li>Nüfus cüzdanı veya kimlik belgesi</li>
      </ul>

      <h2>Başvuru Süreci</h2>
      <p><strong>1. Okul Kabulü:</strong> Öncelikle gitmek istediğiniz üniversite veya eğitim kurumundan kabul almalısınız.</p>
      <p><strong>2. Finansal Planlama:</strong> Eğitim ve yaşam masraflarınızı karşılayabildiğinizi kanıtlamalısınız. Ülkeye göre değişen minimum tutarlar vardır.</p>
      <p><strong>3. Vize Randevusu:</strong> İlgili konsolosluk veya vize merkezinden randevu alın.</p>
      <p><strong>4. Belge Hazırlığı:</strong> Tüm belgeleri eksiksiz hazırlayın. Çevirilerin noter onaylı olması önemlidir.</p>
      <p><strong>5. Mülakata Hazırlanın:</strong> Bazı ülkeler vize görüşmesi yapabilir. Eğitim planlarınız ve gelecek hedefleriniz hakkında net cevaplar verin.</p>
      <p><strong>6. Başvuruyu Tamamlayın:</strong> Tüm belgelerle birlikte başvurunuzu yapın ve takip numaranızı alın.</p>

      <h2>Önemli Noktalar</h2>
      <ul>
        <li>Başvurunuzu eğitime başlamadan en az 3-4 ay önce yapın</li>
        <li>Mali durumunuzu net bir şekilde belgeleyin</li>
        <li>Türkiye'ye geri dönme niyetinizi gösterin</li>
        <li>Tüm belgelerin güncel ve orijinal olduğundan emin olun</li>
        <li>Eğitim planınızı açık ve mantıklı bir şekilde anlatın</li>
        <li>Part-time çalışma izni olup olmadığını öğrenin</li>
      </ul>

      <h2>Çalışma İzni</h2>
      <p>Birçok ülkede öğrenci vizesiyle sınırlı saatlerde çalışma izni verilmektedir. Genellikle haftada 20 saat part-time çalışabilirsiniz. Tatil dönemlerinde bu süre artabilir.</p>

      <h2>Vize Uzatma</h2>
      <p>Eğitim süreniz uzarsa, vizenizi de uzatmanız gerekir. Vize süreniz dolmadan önce uzatma başvurusu yapmalısınız.</p>
    `,
  },
  {
    id: 'is-vizesi',
    title: 'İş Vizesi Başvurusu: Yurtdışında Çalışmak İçin Gerekli Adımlar',
    category: 'İş Vizesi',
    date: '1 Aralık 2024',
    author: 'GNC Travel',
    image: 'https://images.unsplash.com/photo-1642522029686-5485ea7e6042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY1MTAxMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Yurtdışında çalışmak isteyenler için iş vizesi başvuru süreci, gerekli evraklar ve işveren sponsorluğu hakkında detaylı bilgiler.',
    content: `
      <h2>İş Vizesi Nedir?</h2>
      <p>İş vizesi, yurtdışında çalışmak isteyen profesyonellere verilen çalışma izni ve vize türüdür. Bu vize ile belirli bir işveren için yasal olarak çalışabilirsiniz.</p>
      
      <h2>Gerekli Belgeler</h2>
      <ul>
        <li>Geçerli pasaport (en az 6-12 ay geçerliliği olan)</li>
        <li>İş vizesi başvuru formu (işveren tarafından doldurulmuş kısımlar dahil)</li>
        <li>Biyometrik fotoğraflar (2-4 adet)</li>
        <li>İş teklifi mektubu veya iş sözleşmesi</li>
        <li>İşveren sponsorluk belgesi</li>
        <li>Çalışma izni onayı (bazı ülkelerde)</li>
        <li>Diploma ve sertifikalar (noter onaylı çeviriler)</li>
        <li>Özgeçmiş (CV)</li>
        <li>Referans mektupları</li>
        <li>Sağlık raporu ve poliklinik kartı</li>
        <li>Sabıka kaydı (temiz olmalı)</li>
        <li>Sağlık sigortası</li>
        <li>Mali durum belgesi</li>
      </ul>

      <h2>Başvuru Süreci</h2>
      <p><strong>1. İş Bulma:</strong> Yurtdışında bir işveren bulmalı ve iş teklifi almalısınız. İşveren sizin için sponsorluk yapacaktır.</p>
      <p><strong>2. İşveren Başvurusu:</strong> Çoğu ülkede önce işverenin yerel makamlardan çalışma izni alması gerekir.</p>
      <p><strong>3. Vize Başvurusu:</strong> Çalışma izni onaylandıktan sonra vize başvurunuzu yapabilirsiniz.</p>
      <p><strong>4. Belge Toplama:</strong> Tüm gerekli belgeleri eksiksiz ve güncel bir şekilde hazırlayın.</p>
      <p><strong>5. Konsolosluk Görüşmesi:</strong> Vize görüşmesine katılın. İş deneyiminiz, yetenekleriniz ve neden o ülkede çalışmak istediğiniz sorulabilir.</p>
      <p><strong>6. Vize Onayı:</strong> Başvurunuz onaylandıktan sonra vizenizi alıp yurtdışına çıkabilirsiniz.</p>

      <h2>İş Vizesi Türleri</h2>
      <p><strong>Geçici İş Vizesi:</strong> Belirli bir süre için verilen vize (genellikle 1-3 yıl).</p>
      <p><strong>Kalıcı İş Vizesi:</strong> Uzun süreli çalışma izni veren vize (bazı ülkelerde oturma iznine dönüşebilir).</p>
      <p><strong>İç Transfer Vizesi:</strong> Çok uluslu şirketlerde çalışanların başka ülkedeki şubeye transferi için.</p>
      <p><strong>Serbest Meslek Vizesi:</strong> Serbest çalışanlar ve girişimciler için özel vize.</p>

      <h2>Önemli Noktalar</h2>
      <ul>
        <li>İşverenin güvenilir ve yasal bir kuruluş olduğundan emin olun</li>
        <li>İş sözleşmenizi dikkatlice okuyun ve anlayın</li>
        <li>Mesleki yeterliliğinizi belgeleyin</li>
        <li>İlgili ülkenin çalışma yasalarını öğrenin</li>
        <li>Vergi ve sigorta yükümlülüklerinizi bilin</li>
        <li>Aile üyeleriniz için vize gereklilikleri varsa öğrenin</li>
        <li>Vize süreniz ve yenileme koşullarını takip edin</li>
      </ul>

      <h2>Aile Birleşimi</h2>
      <p>İş vizeniz onaylandıktan sonra, eşiniz ve çocuklarınız için aile birleşimi vizesi başvurusu yapabilirsiniz. Her ülkenin farklı şartları ve süreleri vardır.</p>

      <h2>Oturma İznine Geçiş</h2>
      <p>Birçok ülkede belirli bir süre çalıştıktan sonra kalıcı oturma iznine başvuru yapabilirsiniz. Bu süre genellikle 3-5 yıl arasında değişir.</p>
    `,
  },
];

export function Blog() {
  const { id } = useParams();
  
  // Track ViewContent event on page load
  useEffect(() => {
    if (id) {
      // Track specific blog post
      const post = blogPosts.find(p => p.id === id);
      if (post) {
        trackFacebookEvent('ViewContent', {
          content_name: post.title,
          content_category: 'blog_post',
          content_type: 'article',
          content_ids: [id]
        });
        console.log(`[Blog Post] ViewContent event tracked: ${post.title}`);
      }
    } else {
      // Track blog list page
      trackFacebookEvent('ViewContent', {
        content_name: 'Blog List',
        content_category: 'blog',
        content_type: 'page'
      });
      console.log('[Blog Page] ViewContent event tracked');
    }
  }, [id]);
  
  if (id) {
    const post = blogPosts.find(p => p.id === id);
    
    if (!post) {
      return (
        <div className="min-h-screen bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-4">Makale Bulunamadı</h1>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Blog Listesine Dön
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
        {/* Article Hero */}
        <div className="relative h-[400px] bg-gradient-to-br from-blue-900 to-blue-700">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl ml-0 px-4 sm:px-6 lg:px-8 text-white flex flex-col items-start">
              <div className="mb-8">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Blog Listesine Dön</span>
                </Link>
              </div>
              
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-green-500 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="mb-8">{post.title}</h1>
              
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
            }}
          />

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-200">
            <h3 className="mb-4 text-blue-900">Vize Başvurunuzda Yardıma İhtiyacınız Var mı?</h3>
            <p className="text-gray-700 mb-6">
              GNC Travel olarak vize başvuru sürecinizde size profesyonel destek sağlıyoruz. 
              Uzman ekibimiz tüm belgelerinizi kontrol eder ve başvuru sürecini takip eder.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/dubai-visa" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Hemen Başvur
              </Link>
              <a 
                href="tel:+905432200543" 
                className="bg-white text-blue-600 px-6 py-3 rounded-full border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blog List View
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1716580107641-c2cc1832b559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVQUUlMjBFbWlyYXRlcyUyMGJ1c2luZXNzJTIwZXZlbnR8ZW58MXx8fHwxNzY4ODE4NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Blog Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-green-500 rounded-full mb-6">
                Vize & Seyahat Rehberi
              </span>
              <h1 className="mb-6">Vize Rehberi & Blog</h1>
              <p className="text-xl text-blue-100 mb-8">
                Yurtdışı vize başvuruları hakkında bilmeniz gereken her şey. 
                Uzman ekibimizden ipuçları ve detaylı rehberler.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/visa"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
                >
                  Vize Başvurusu Yap
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Uzman Desteği Al
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
                    {post.category}
                  </span>
                  <h3 className="mb-3 hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
                  >
                    Devamını Oku
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}