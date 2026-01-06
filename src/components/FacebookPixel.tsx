import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Facebook Pixel ID'nizi buraya ekleyin
const FACEBOOK_PIXEL_ID = '871595629012972';

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

      // Initialize Pixel
      window.fbq('init', FACEBOOK_PIXEL_ID);
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
    console.log('[FB Pixel] Event:', eventName, data); // Debug için
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