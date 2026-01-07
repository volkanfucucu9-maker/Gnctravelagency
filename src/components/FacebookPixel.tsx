import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Facebook Pixel ID'nizi buraya ekleyin
const FACEBOOK_PIXEL_ID = '1937731077140815';

// Test mode için test_event_code (Facebook Events Manager'dan alınan kod)
const TEST_EVENT_CODE = 'TEST86570';

export function FacebookPixel() {
  const location = useLocation();

  useEffect(() => {
    // Facebook Pixel script'ini yükle
    if (typeof window !== 'undefined' && !window.fbq) {
      // Facebook Pixel base code
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      // Initialize Pixel with test_event_code
      window.fbq('init', FACEBOOK_PIXEL_ID, {}, { test_event_code: TEST_EVENT_CODE });
      window.fbq('track', 'PageView');
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null;
}

// TypeScript için window.fbq tanımı
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Helper function - Form gönderimlerini track etmek için
export const trackFacebookEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
    
    // Debug için detaylı log
    console.log(`%c[Facebook Pixel] Event: ${eventName}`, 'background: #1877F2; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;');
    if (data) {
      console.log('%cEvent Data:', 'color: #1877F2; font-weight: bold;', data);
    }
    console.log('%c✅ Event successfully sent to Facebook', 'color: green;');
  } else {
    console.warn('[Facebook Pixel] fbq is not loaded yet');
  }
};

// Helper function - Custom conversions için
export const trackCustomEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, data);
    console.log('[FB Pixel] Custom:', eventName, data); // Debug için
  }
};

// Scroll depth tracking
export const trackScrollDepth = (depth: number) => {
  trackCustomEvent('ScrollDepth', { depth_percentage: depth });
};

// Time on page tracking
export const trackTimeOnPage = (seconds: number, pageName: string) => {
  trackCustomEvent('TimeOnPage', { 
    seconds: seconds,
    page: pageName,
    minutes: Math.round(seconds / 60 * 10) / 10
  });
};

// Button click tracking
export const trackButtonClick = (buttonName: string, location: string) => {
  trackCustomEvent('ButtonClick', {
    button_name: buttonName,
    button_location: location
  });
};

// Tour view tracking
export const trackTourView = (tourName: string, tourPrice: string, tourId: string) => {
  trackFacebookEvent('ViewContent', {
    content_name: tourName,
    content_ids: [tourId],
    content_type: 'product',
    value: parseFloat(tourPrice.replace(/[^0-9.]/g, '')),
    currency: 'EUR'
  });
};

// Form interaction tracking
export const trackFormStart = (formName: string) => {
  trackFacebookEvent('InitiateCheckout', {
    content_name: formName,
    content_category: 'visa_form'
  });
};

// Visa type selection tracking
export const trackVisaSelection = (visaType: string, price: number) => {
  trackFacebookEvent('AddToCart', {
    content_name: `Dubai Visa - ${visaType}`,
    content_type: 'product',
    value: price,
    currency: 'USD'
  });
};

// Contact tracking (phone/whatsapp)
export const trackContactClick = (contactType: 'phone' | 'whatsapp', number: string) => {
  trackFacebookEvent('Contact', {
    contact_type: contactType,
    phone_number: number
  });
};

// Search tracking
export const trackSearch = (searchString: string, searchLocation?: string) => {
  trackFacebookEvent('Search', {
    search_string: searchString,
    content_category: searchLocation || 'general_search'
  });
};