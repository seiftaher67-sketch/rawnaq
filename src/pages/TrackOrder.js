import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TrackOrder() {
    const navigate = useNavigate();
    const order = {
        number: 'ORD-2025-124578',
        date: '15 ديسمبر 2025',
        status: 'في طريقه الاستلام',
        steps: [
            { title: 'تم تقديم الطلب', date: '2025-12-15', image: '/images/v6.png' },
            { title: 'تم التأكيد', date: '2025-12-15' },
            { title: 'قيد المراجعه', date: '2025-12-16' },
            { title: 'تم الشحن', date: '2025-12-16' },
            { title: 'في طريقها للتسليم', date: '2025-12-17' },
            { title: 'تم التسليم', date: '2025-12-18' }
        ],
        shipping: {
            method: 'الشحن السريع',
            recipient: 'أميمة حسن',
            address: 'طريق الوصول، حي 1، دبي، الإمارات العربية المتحدة',
            expected: '11-2-2026'
        },
        items: [
            { id: 1, name: 'عباءة سوداء أنيقة مع تطريز', price: 250, qty: 1, size: 'M', color: 'أسود', image: '/images/a3.jpg' },
            { id: 2, name: 'عباءة سوداء أنيقة مع تطريز', price: 250, qty: 1, size: 'M', color: 'أسود', image: '/images/a3.jpg' }
        ],
        totals: { subtotal: 500, shipping: 20, total: 520 }
    };

    return (
        <div className="pt-32 pb-24 container mx-auto px-6" dir="rtl">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-right mb-2"
                    style={{
                        fontFamily: 'Cairo',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '48px',
                        leadingTrim: 'none',
                        lineHeight: '100%',
                        letterSpacing: '0px'
                    }}
                >تتبع طلبك</h1>

                <p className="text-right mb-8"
                    style={{
                        fontFamily: 'Cairo',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '24px',
                        leadingTrim: 'none',
                        lineHeight: '100%',
                        letterSpacing: '0px',
                        color: '#6B7280'
                    }}
                >تابع رحلة طلبك وأدر المرتجعات</p>

                <div className="mx-auto shadow-sm mb-6"
                    style={{
                        maxWidth: '2000px',
                        width: '100%',
                        height: '148px',
                        transform: 'rotate(0deg)',
                        opacity: 1,
                        borderRadius: '14px',
                        paddingTop: '16px',
                        paddingRight: '16px',
                        paddingLeft: '36px',
                        background: 'linear-gradient(180deg, #BFBFBF 0%, #7F7F7F 100%)',
                        color: '#FFFFFF',
                        boxSizing: 'border-box'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                        <div style={{ textAlign: 'right', flex: '0 0 48%', marginRight: '20px' }}>
                            <div style={{ paddingTop: '20px' ,  marginRight:'50px', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', color: '#000000' }}>رقم الطلب</div>
                            <div style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', marginTop: '8px' }}>{order.number}</div>
                        </div>

                        <div  style={{ marginRight:'-100px' , textAlign: 'right', flex: '0 0 26%' ,paddingTop: '20px' }}>
                            <div style={{ marginRight:'13px', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', color: '#000000' }}>تاريخ الطلب</div>
                            <div style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', marginTop: '8px' }}>{order.date}</div>
                        </div>

                        <div style={{ paddingTop: '20px', textAlign: 'center', flex: '0 0 26%' }}>
                            <div style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', color: '#000000' }}>الحالة الحالية</div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#0B1220', padding: '8px 14px', borderRadius: '999px', marginTop: '8px' }}>
                                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', marginInlineEnd: 10 }}></span>
                                <span style={{ color: '#FFFFFF', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>{order.status}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border p-6 mb-6" style={{ maxWidth: '2000px', width: '100%', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 12 }}>
                        <h3 style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'normal', fontSize: '32px', leadingTrim: 'none', lineHeight: '24px', letterSpacing: '0px', margin: 0, textAlign: 'left' }}>رحلة الطلب</h3>
                    </div>
                    {/* connector line behind icons - centered vertically */}
                    <div style={{ position: 'absolute', left: '48px', right: '48px', top: '50%', transform: 'translateY(-50%)', height: '3px', background: '#3B82F6', zIndex: 0 }} />
                    <div className="flex items-center justify-center gap-12 text-sm text-gray-600 mb-2 flex-row" style={{ position: 'relative', zIndex: 10 }}>
                        {order.steps.map((s, idx) => (
                            <div key={idx} className="flex-1 text-center">
                                {s.title === 'تم تقديم الطلب' ? (
                                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-blue-500`}>
                                        <img src="/images/v6.png" alt="v6" className="w-6 h-6 object-cover rounded-full" />
                                    </div>
                                ) : s.title === 'تم التأكيد' ? (
                                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-blue-500`}>
                                        <img src="/images/v7.png" alt="v7" className="w-6 h-6 object-cover rounded-full" />
                                    </div>
                                ) : s.title === 'قيد المراجعه' ? (
                                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-blue-500`}>
                                        <img src="/images/v4.png" alt="v4" className="w-6 h-6 object-cover rounded-full" />
                                    </div>
                                ) : s.title === 'تم الشحن' ? (
                                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-blue-500`}>
                                        <img src="/images/v8.png" alt="v8" className="w-6 h-6 object-cover rounded-full" />
                                    </div>
                                ) : s.title === 'في طريقها للتسليم' ? (
                                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-blue-500`}>
                                        <img src="/images/v2.png" alt="v2" className="w-6 h-6 object-cover rounded-full" />
                                    </div>
                                ) : s.title === 'تم التسليم' ? (
                                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gray-400 border`} style={{ opacity: 0.5 }}>
                                        <img src="/images/v1.png" alt="v1" className="w-6 h-6 object-cover rounded-full" />
                                    </div>
                                ) : (
                                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${idx === order.steps.length - 1 ? 'bg-blue-500 text-white' : 'bg-white border'}`}>{idx + 1}</div>
                                )}
                                <div className="mt-2 font-semibold" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'normal', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'center' }}>{s.title}</div>
                                <div className="text-xs text-gray-400" style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'normal', fontSize: '14px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'center' }}>{s.date}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border p-6 shadow-sm mb-6">
                    <h3 style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '32px', textAlign: 'right', marginBottom: '16px' }}>معلومات الشحن</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right text-sm text-gray-700 items-start">
                        <div className="md:text-right">
                            <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>اسم العميل</div>
                            <div className="mt-2" style={{ display: 'block', width: '452px', height: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>{order.shipping.recipient}</div>
                        </div>

                        <div className="text-right">
                            <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>شركه الشحن</div>
                            <div className="mt-2" style={{ display: 'block', width: '452px', height: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', marginRight: '10px', textAlign: 'right' }}>{order.shipping.company || 'وصلها'}</div>
                        </div>

                        <div className="md:text-right">
                            <div className="flex items-start justify-end gap-6">
                                <div>
                                    <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>طريقة الدفع</div>
                                    <div className="mt-2" style={{ display: 'block', width: '220px', lineHeight: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 600, fontSize: '16px', lineHeight: '24px', textAlign: 'right', marginRight: '10px' }}>ماستر كارد</div>
                                </div>
                                <div>
                                    <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>تاريخ التوصيل المتوقع</div>
                                    <div className="mt-2" style={{ display: 'block', width: '220px', lineHeight: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 600, fontSize: '16px', lineHeight: '24px', textAlign: 'right' }}>{order.shipping.expected}</div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-start-1 md:mt-4">
                            <div className="text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>عنوان التسليم</div>
                            <div className="mt-2" style={{ display: 'block', width: '452px', height: '24px', whiteSpace: 'normal', wordBreak: 'break-word', transform: 'rotate(0deg)', opacity: 1, overflow: 'hidden', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>{order.shipping.address}</div>
                        </div>


                    </div>
                </div>

                <div className="bg-white rounded-2xl border p-6 shadow-sm mb-6" style={{ border: '1px solid #EFEFEF' }}>
                    <h3 style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right', marginBottom: '16px' }}>عناصر الطلب</h3>
                    <div className="space-y-4">
                        {order.items.map(it => (
                            <div key={it.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <img src={it.image} alt="item" className="w-20 h-20 object-cover rounded" />
                                    <div className="text-right">
                                        <div style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px' }}>{it.name}</div>
                                        <div className="text-xs text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px' }}>المقاس: <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', color: '#000000' }}>{it.size}</span></div>
                                        <div className="text-xs text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px' }}>اللون: <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', color: '#000000' }}>{it.color}</span></div>
                                        <div className="text-xs text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px' }}>الكمية: <span style={{ fontFamily: 'Cairo', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', color: '#000000' }}>{it.qty}</span></div>
                                    </div>

                                </div>
                                <div className="text-right">
                                    <div style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%', display: 'inline-flex', alignItems: 'center', marginLeft: '10px' }}>{it.price} <img src="/images/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-100 rounded-xl border border-gray-300 p-8 flex flex-col justify-center">
                    <div className="space-y-4 text-right">
                        <div className="flex justify-between items-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                            <span className="text-gray-700">المبلغ الإجمالي</span>
                            <span className="text-gray-700" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                                {order.totals.subtotal}
                                <img src="/images/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} />
                            </span>
                        </div>
                        <div className="flex justify-between items-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                            <span className="text-gray-700">مصاريف التوصيل</span>
                            <span className="text-gray-700" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                                {order.totals.shipping}
                                <img src="/images/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} />
                            </span>
                        </div>
                        <div className="flex justify-between items-center" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
                            <span className="text-gray-800">المبلغ كامل</span>
                            <span className="text-gray-800" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                                {order.totals.total}
                                <img src="/images/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center" style={{ marginTop: '20px' }}>
                    <button
                        onClick={() => navigate('/return-request')}
                        className="bg-blue-300 hover:bg-blue-400 text-white py-4 px-56 rounded-full transition"
                        style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'center' }}>المرتجعات متاحة بعد التسليم</button>
                </div>

            </div>
        </div>
    );
}
