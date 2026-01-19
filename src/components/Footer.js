import React from 'react';
import { Link } from 'react-router-dom';
import logooo from '../logooo.png';
import { FiInstagram, FiPhone, FiMapPin, FiMail, FiMessageCircle, FiHeadphones } from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaCcVisa, FaCcMastercard, FaCcAmex, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="text-center mb-12">
          <img
            src={logooo}
            alt="راونق"
            className="mx-auto h-40 w-auto filter brightness-0 invert drop-shadow-lg"
            style={{ marginTop: '-35px' }}
          />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-right">
          {/* Right Column - روابط مهمة */}
          <div>
            <h3 style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }} className="mb-6">روابط مهمة</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition-colors" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>الرئيسية</Link></li>
              <li><Link to="/offers" className="hover:text-brand-gold transition-colors" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>أحدث العروض</Link></li>
              <li><Link to="/washing-guide" className="hover:text-brand-gold transition-colors" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>تعليمات الغسيل والعناية بالملابس</Link></li>
              <li><Link to="/return-policy" className="hover:text-brand-gold transition-colors" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>سياسة الاسترجاع والاستبدال والاسترجاع</Link></li>
            </ul>
          </div>

          {/* Middle Column - تواصل معنا */}
          <div className="-ml-8">
            <h3 style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }} className="mb-6">تواصل معنا</h3>
            <div className="space-y-2 text-sm font-semibold">
              <a    style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}><FiMapPin className="inline mr-2" size={16} /> ش الأمير نواف بن عبدالعزيز - مرکز مزاين</a>
              <br></br>
              <br></br>
              <a   href= "mailto: atlascompany@gmail.com"  style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right'}}>✉️ atlascompany@gmail.com</a>
               <br></br>
               <br></br>
              <a href='tel: 6551235523 96+' style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}><FiPhone className="inline mr-2 text-white" size={16} />  6551235523 96+</a>
            </div>

          </div>

          {/* Left Column - مواقع التواصل و طرق الدفع */}
          <div>
            <div className="flex gap-24 items-start justify-between mb-6">
              <h3 style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>مواقع التواصل</h3>
              <h3 style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>طرق الدفع</h3>
            </div>
            <div className="flex gap-24 items-center justify-between">
              <div className="flex gap-3">
                <a href="https://instagram.com" className="hover:text-brand-gold transition-colors" aria-label="Instagram">
                  <FiInstagram size={24} />
                </a>
                <a href="https://tiktok.com" className="hover:text-brand-gold transition-colors" aria-label="TikTok">
                  <FaTiktok size={24} />
                </a>
                <a href="https://facebook.com" className="hover:text-brand-gold transition-colors" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
              </div>
              <div className="flex gap-3">
                <img src="/images/p1.png" alt="Payment Method 1" className="h-6 w-auto" />
                <img src="/images/p2.png" alt="Payment Method 2" className="h-6 w-auto" />
                <img src="/images/p3.png" alt="Payment Method 3" className="h-6 w-auto" />
                <img src="/images/p4.png" alt="Payment Method 4" className="h-6 w-auto" />
                <img src="/images/p5.png" alt="Payment Method 5" className="h-6 w-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-left flex items-center justify-start gap-4">
          <a href="https://atlas-data.sa/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7c4121e5f8af449fab8ea450fd7ca0fa%2Ffafb7b6e03c34d3ba8491e8f8d7fd5f8?format=webp&width=800"
              alt="Atlas Data"
              className="h-8 w-8 rounded-full object-cover"
            />
          </a>
          <p className="text-gray-400 text-xs" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>حقوق النشر 2024-2025 أطلس البيانات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
