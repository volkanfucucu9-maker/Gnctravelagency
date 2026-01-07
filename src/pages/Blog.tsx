import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { useEffect } from 'react';
import { trackFacebookEvent } from '../components/FacebookPixel';

const blogPosts = [
  {
    id: 'dubai-abartmadan-kesfet',
    title: 'Dubai\'yi Abartmadan Keşfetmek',
    category: 'Dubai Rehberi',
    date: '2 Ocak 2025',
    author: 'GNC Travel',
    image: 'https://images.unsplash.com/photo-1718789967298-09132d1404bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc2NzM1MDAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        <li>Dubai vizesi danışmanlığı ve başvuru takibi</li>
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
      <p>Konsolosluk randevuları bazı dönemlerde çok hızlı dolar. Özellikle yaz aylarında ve akademik dönemlerde yoğunluk yaşanır. Erken planlama her zaman avantajdır.</p>

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
                to="/visa#form" 
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
            src="https://images.unsplash.com/photo-1571648393873-29bad2324860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBibG9nJTIwd3JpdGluZyUyMHBhc3Nwb3J0fGVufDF8fHx8MTc2NTIxMTEwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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