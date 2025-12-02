import React from 'react';
import { Link } from 'react-router-dom';
import logooo from '../logooo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <img
            src={logooo}
            alt="راونق"
            className="mx-auto h-40 w-auto filter brightness-0 invert drop-shadow-lg"
            style={{ marginTop: '-35px' }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-pink-400 transition-colors">الرئيسية</Link></li>
              <li><Link to="/offers" className="hover:text-pink-400 transition-colors">أحدث العروض</Link></li>
              <li><Link to="/washing-guide" className="hover:text-pink-400 transition-colors">تعليمات الغسيل</Link></li>
              <li><Link to="/return-policy" className="hover:text-pink-400 transition-colors">سياسة الاسترجاع</Link></li>
              <li><Link to="/contact" className="hover:text-pink-400 transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">التصنيفات</h3>
            <ul className="space-y-2">
              <li><Link to="/abayas" className="hover:text-pink-400 transition-colors">العبايات</Link></li>
              <li><Link to="/tarhas" className="hover:text-pink-400 transition-colors">الطرح</Link></li>
              <li><Link to="/niqabs" className="hover:text-pink-400 transition-colors">النقابات</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">بيانات التواصل</h3>
            <div className="space-y-2">
              <p>📍 الموقع الجغرافي</p>
              <p>📞 رقم الهاتف</p>
              <p>✉️ البريد الإلكتروني</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">طرق الدفع</h3>
            <div className="space-y-2">
              <p>💳 بطاقات ائتمان</p>
              <p>💰 الدفع عند الاستلام</p>
              <p>🏦 تحويل بنكي</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 راونق. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
