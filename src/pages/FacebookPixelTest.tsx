import { useState } from 'react';
import { trackFacebookEvent } from '../components/FacebookPixel';
import { CheckCircle2, AlertCircle, Send, Activity } from 'lucide-react';

export function FacebookPixelTest() {
  const [testResults, setTestResults] = useState<Array<{
    event: string;
    status: 'success' | 'error';
    timestamp: string;
  }>>([]);

  const runTest = (eventName: string, eventData?: any) => {
    try {
      trackFacebookEvent(eventName, eventData);
      
      setTestResults(prev => [...prev, {
        event: eventName,
        status: 'success',
        timestamp: new Date().toLocaleTimeString('tr-TR')
      }]);
    } catch (error) {
      setTestResults(prev => [...prev, {
        event: eventName,
        status: 'error',
        timestamp: new Date().toLocaleTimeString('tr-TR')
      }]);
    }
  };

  const testEvents = [
    {
      name: 'PageView',
      description: 'Sayfa görüntüleme',
      data: {}
    },
    {
      name: 'ViewContent',
      description: 'İçerik görüntüleme (Dubai Vize)',
      data: {
        content_name: 'Dubai Visa Service',
        content_category: 'visa_services',
        content_type: 'product',
        content_ids: ['dubai-visa-landing'],
        currency: 'USD',
        value: 147
      }
    },
    {
      name: 'Search',
      description: 'Arama eventi',
      data: {
        search_string: 'Dubai tur paketleri',
        content_category: 'tours'
      }
    },
    {
      name: 'Lead',
      description: 'Lead eventi (Form gönderimi)',
      data: {
        content_name: 'Dubai Visa Application',
        content_category: 'visa',
        currency: 'USD',
        value: 147
      }
    },
    {
      name: 'SubmitApplication',
      description: 'Başvuru gönderim eventi',
      data: {
        content_name: 'Dubai Visa Application',
        content_category: 'visa',
        currency: 'USD',
        value: 147
      }
    },
    {
      name: 'Contact',
      description: 'İletişim eventi',
      data: {
        contact_type: 'phone',
        phone_number: '+905432200543'
      }
    },
    {
      name: 'AddToCart',
      description: 'Vize türü seçimi',
      data: {
        content_name: 'Dubai Visa - 30-day-single',
        content_type: 'product',
        value: 147,
        currency: 'USD'
      }
    }
  ];

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full mb-4">
            <Activity className="w-5 h-5" />
            <span className="font-bold">Facebook Pixel Test Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Facebook Pixel Event Tester</h1>
          <p className="text-xl text-gray-600">
            Tüm Facebook Pixel eventlerini manuel olarak test edin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Test Events */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <Send className="w-6 h-6 text-blue-600" />
              Test Eventleri
            </h2>

            <div className="space-y-4">
              {testEvents.map((event, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-blue-900">{event.name}</h3>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                    <button
                      onClick={() => runTest(event.name, event.data)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm font-semibold"
                    >
                      Test Et
                    </button>
                  </div>
                  
                  {Object.keys(event.data).length > 0 && (
                    <details className="mt-2">
                      <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700">
                        Event Data
                      </summary>
                      <pre className="mt-2 text-xs bg-gray-50 p-3 rounded-lg overflow-x-auto">
                        {JSON.stringify(event.data, null, 2)}
                      </pre>
                    </details>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={clearResults}
              className="w-full mt-6 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-all"
            >
              Test Sonuçlarını Temizle
            </button>
          </div>

          {/* Test Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-green-600" />
              Test Sonuçları
            </h2>

            {testResults.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <AlertCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Henüz test yapılmadı</p>
                <p className="text-sm mt-2">Sol taraftan bir event seçin</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {testResults.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 ${
                      result.status === 'success'
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {result.status === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{result.event}</p>
                        <p className="text-sm text-gray-600">{result.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Instructions */}
            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-3">📋 Test Talimatları</h3>
              <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
                <li>Yukarıdaki eventlerden birini test edin</li>
                <li>Browser Console'u açın (F12)</li>
                <li>Console'da mavi renkli "[Facebook Pixel]" mesajını görün</li>
                <li>Facebook Events Manager'a gidin</li>
                <li>Test Events sekmesinde eventi kontrol edin</li>
              </ol>
            </div>

            {/* Quick Links */}
            <div className="mt-6 space-y-3">
              <a
                href="https://www.facebook.com/events_manager2/list/pixel/1937731077140815/test_events"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
              >
                Facebook Events Manager'ı Aç →
              </a>
              <a
                href="https://developers.facebook.com/docs/meta-pixel/reference"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-200 text-gray-700 text-center px-6 py-3 rounded-lg hover:bg-gray-300 transition-all"
              >
                Facebook Pixel Dokümantasyonu →
              </a>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl mb-4">🔍 Pixel Test Kodu</h2>
          <p className="text-gray-600 mb-4">
            Facebook'ta test modunu aktif hale getirmek için aşağıdaki kodu kullanabilirsiniz:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
            <code className="text-sm text-gray-800">
              <strong>Pixel ID:</strong> 1937731077140815<br/>
              <strong>Test Event Code:</strong> TEST86570
            </code>
          </div>

          <div className="mt-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-yellow-900 mb-2">⚠️ Önemli Notlar</h3>
            <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
              <li>Test eventleri gerçek veriye sayılmaz</li>
              <li>Events Manager'da "Test Events" sekmesinde görünürler</li>
              <li>Prod moduna geçmeden önce test etmeyi unutmayın</li>
              <li>Console'da eventlerin başarıyla gönderildiğini kontrol edin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}