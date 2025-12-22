import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EditProfile = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="profile-container">
          <aside className="sidebar">
            <ul>
              <li className="font-calibri">تعديل البيانات</li>
              <li className="font-calibri">سجل طلباتي</li>
              <li className="font-calibri">تسجيل الخروج</li>
            </ul>
          </aside>
          <div className="profile-content">
            <h1>تعديل البيانات</h1>
            <form className="profile-form">
              <input type="text" placeholder="الاسم الكامل" />
              <input type="tel" placeholder="رقم الجوال" />
              <input type="text" placeholder="العنوان" />
              <button type="submit">حفظ التعديلات</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EditProfile;
