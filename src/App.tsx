import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Packages } from './pages/Packages';
import { About } from './pages/About';
import { Visa } from './pages/Visa';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { AllTours } from './pages/AllTours';

// Yurt Dışı Turları
import { VisaFree } from './pages/tours/VisaFree';
import { Montenegro } from './pages/tours/Montenegro';
import { Balkans } from './pages/tours/Balkans';
import { Italy } from './pages/tours/Italy';
import { Dubai } from './pages/tours/Dubai';
import { Japan } from './pages/tours/Japan';
import { Egypt } from './pages/tours/Egypt';
import { SharmElSheikh } from './pages/tours/SharmElSheikh';
import { Greece } from './pages/tours/Greece';
import { Thailand } from './pages/tours/Thailand';
import { Bali } from './pages/tours/Bali';

// Kültür Turları
import { EuropeCulture } from './pages/tours/EuropeCulture';
import { AsiaCulture } from './pages/tours/AsiaCulture';
import { MiddleEast } from './pages/tours/MiddleEast';
import { HolyLands } from './pages/tours/HolyLands';
import { FarEast } from './pages/tours/FarEast';

// Türkiye Turları
import { Antalya } from './pages/tours/Antalya';
import { Cappadocia } from './pages/tours/Cappadocia';
import { AegeanTurkey } from './pages/tours/AegeanTurkey';
import { MediterraneanTurkey } from './pages/tours/MediterraneanTurkey';

// Tur Detayları
import { BaliParadise } from './pages/tour-details/BaliParadise';
import { DubaiAjet } from './pages/tour-details/DubaiAjet';
import { DubaiMasali } from './pages/tour-details/DubaiMasali';
import { DubaiEmirates } from './pages/tour-details/DubaiEmirates';
import { BangkokPattaya } from './pages/tour-details/BangkokPattaya';
import { KesfetTayland } from './pages/tour-details/KesfetTayland';
import { BangkokPattayaExtended } from './pages/tour-details/BangkokPattayaExtended';
import { BaliUbudWonderland } from './pages/tour-details/BaliUbudWonderland';

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about" element={<About />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tours/all" element={<AllTours />} />
            
            {/* Yurt Dışı Turları */}
            <Route path="/tours/visa-free" element={<VisaFree />} />
            <Route path="/tours/montenegro" element={<Montenegro />} />
            <Route path="/tours/balkans" element={<Balkans />} />
            <Route path="/tours/italy" element={<Italy />} />
            <Route path="/tours/dubai" element={<Dubai />} />
            <Route path="/tours/japan" element={<Japan />} />
            <Route path="/tours/egypt" element={<Egypt />} />
            <Route path="/tours/sharm-el-sheikh" element={<SharmElSheikh />} />
            <Route path="/tours/greece" element={<Greece />} />
            <Route path="/tours/thailand" element={<Thailand />} />
            <Route path="/tours/bali" element={<Bali />} />
            
            {/* Kültür Turları */}
            <Route path="/tours/europe-culture" element={<EuropeCulture />} />
            <Route path="/tours/asia-culture" element={<AsiaCulture />} />
            <Route path="/tours/middle-east" element={<MiddleEast />} />
            <Route path="/tours/holy-lands" element={<HolyLands />} />
            <Route path="/tours/far-east" element={<FarEast />} />
            
            {/* Türkiye Turları */}
            <Route path="/tours/antalya" element={<Antalya />} />
            <Route path="/tours/cappadocia" element={<Cappadocia />} />
            <Route path="/tours/aegean-turkey" element={<AegeanTurkey />} />
            <Route path="/tours/mediterranean-turkey" element={<MediterraneanTurkey />} />
            
            {/* Tur Detayları */}
            <Route path="/tour-details/bali-paradise" element={<BaliParadise />} />
            <Route path="/tour-details/dubai-ajet" element={<DubaiAjet />} />
            <Route path="/tour-details/dubai-masali" element={<DubaiMasali />} />
            <Route path="/tour-details/dubai-emirates" element={<DubaiEmirates />} />
            <Route path="/tour-details/bangkok-pattaya" element={<BangkokPattaya />} />
            <Route path="/tour-details/kesfet-tayland" element={<KesfetTayland />} />
            <Route path="/tour-details/bangkok-pattaya-extended" element={<BangkokPattayaExtended />} />
            <Route path="/tour-details/bali-ubud-wonderland" element={<BaliUbudWonderland />} />
          </Routes>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}