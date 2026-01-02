import { MapPin, Calendar, Users, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Package {
  id: number;
  title: string;
  duration: string;
  price: string;
  priceNote?: string;
  image: string;
  rating: number;
  features: string[];
  detailUrl?: string;
}

interface TourTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  packages: Package[];
  highlights: string[];
  whyChoose: string[];
}

export function TourTemplate({ 
  title, 
  description, 
  heroImage, 
  packages, 
  highlights,
  whyChoose 
}: TourTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl mb-4">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Tur Özellikleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Tur Paketleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < pkg.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({pkg.rating}.0)</span>
                  </div>
                  <h3 className="text-xl mb-3">{pkg.title}</h3>
                  <div className="space-y-2 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl text-blue-600">{pkg.price}</div>
                      {pkg.priceNote && <div className="text-xs text-gray-500">{pkg.priceNote}</div>}
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    {pkg.detailUrl ? (
                      <Link 
                        to={pkg.detailUrl}
                        className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                      >
                        Detayları İncele
                      </Link>
                    ) : (
                      <Link 
                        to="/contact"
                        className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                      >
                        Bilgi Al
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Neden Bizi Tercih Etmelisiniz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((reason, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl mb-6">Hayalinizdeki Tatile Hazır Mısınız?</h2>
          <p className="text-gray-600 mb-8">
            Uzman ekibimiz size en uygun tur paketini bulmak için hazır. Hemen iletişime geçin!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block"
            >
              Hemen İletişime Geç
            </Link>
            <Link 
              to="/tours/all"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors inline-block text-center"
            >
              Tüm Turları İncele
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}