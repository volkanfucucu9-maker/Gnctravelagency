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
  }
};

// Helper function - Custom conversions için
export const trackCustomEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, data);
  }
};