import React from 'react';

export default function TrackOrder() {
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
            { id: 1, name: 'عباءة سوداء أليفية مع تطريز', price: 250, qty: 1, image: '/images/a3.jpg' },
            { id: 2, name: 'عباءة سوداء أليفية مع تطريز', price: 250, qty: 1, image: '/images/a3.jpg' }
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
                        minHeight: '132px',
                        transform: 'rotate(0deg)',
                        opacity: 1,
                        borderRadius: '16px',
                        paddingTop: '32px',
                        paddingRight: '32px',
                        paddingLeft: '32px',
                        paddingBottom: '32px',
                        background: 'linear-gradient(180deg, #BFBFBF 0%, #7F7F7F 100%)',
                        color: '#FFFFFF',
                        boxSizing: 'border-box'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                        <div style={{ textAlign: 'right', flex: '0 0 48%' }}>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>رقم الطلب</div>
                            <div style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'normal', fontSize: '24px', lineHeight: '24px' }}>{order.number}</div>
                        </div>

                        <div style={{ textAlign: 'center', flex: '0 0 26%' }}>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>تاريخ الطلب</div>
                            <div style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'normal', fontSize: '24px', lineHeight: '24px' }}>{order.date}</div>
                        </div>

                        <div style={{ textAlign: 'left', flex: '0 0 26%' }}>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '8px' }}>الحالة الحالية</div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#0B1220', padding: '8px 14px', borderRadius: '999px' }}>
                                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', marginInlineEnd: 10 }}></span>
                                <span style={{ color: '#FFFFFF', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'normal', fontSize: '24px', lineHeight: '24px' }}>{order.status}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border p-6 mb-6" style={{ maxWidth: '2000px', width: '100%', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 12 }}>
                        <h3 style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'normal', fontSize: '32px', leadingTrim: 'none', lineHeight: '24px', letterSpacing: '0px', margin: 0, textAlign: 'left' }}>رحلة الطلب</h3>
                    </div>
                    {/* connector line behind icons - centered vertically */}
                    <div style={{ position: 'absolute', left: '48px', right: '48px', top: '50%', transform: 'translateY(-50%)', height: '3px', background: '#60A5FA', zIndex: 0 }} />
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
                                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-white border`}>
                                        <img src="/images/v1.png" alt="v1" className="w-6 h-6 object-cover rounded-full" />
                                    </div>
                                ) : (
                                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${idx === order.steps.length - 1 ? 'bg-blue-500 text-white' : 'bg-white border'}`}>{idx + 1}</div>
                                )}
                                <div className="mt-2 font-semibold">{s.title}</div>
                                <div className="text-xs text-gray-400">{s.date}</div>
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
                                        <div className="text-xs text-gray-500" style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%' }}>المقاس: {it.qty}</div>
                                        <div className="text-xs text-gray-500" style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%' }}>اللون: {it.qty}</div>
                                        <div className="text-xs text-gray-500" style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%' }}>الكمية: {it.qty}</div>
                                    </div>

                                </div>
                                <div className="text-right">
                                    <div className="font-semibold">{it.price} ر.ق</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border p-6 shadow-sm mb-12 text-right">
                    <div className="grid grid-cols-2 gap-4">
                        <div>مبلغ إجمالي</div>
                        <div className="text-left font-semibold">{order.totals.subtotal} ر.ق</div>
                        <div>مصروفات التوصيل</div>
                        <div className="text-left">{order.totals.shipping} ر.ق</div>
                        <div className="font-semibold">المبلغ كامل</div>
                        <div className="text-left font-semibold">{order.totals.total} ر.ق</div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="bg-blue-300 hover:bg-blue-400 text-white py-4 px-56 rounded-full">الاستبدال متاح بعد التسليم</button>
                </div>

            </div>
        </div>
    );
}
