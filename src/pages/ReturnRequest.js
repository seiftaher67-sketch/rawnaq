import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { MdCheckCircle } from 'react-icons/md';

export default function ReturnRequest() {
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState(new Set([]));
    const [reason, setReason] = useState('');
    const [customReason, setCustomReason] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const order = {
        number: 'ORD-2025-124578',
        items: [
            { id: 1, name: 'عباءة سوداء أنيقة مع تطريز', price: 250, qty: 1, size: 'M', color: 'أسود', image: '/images/a3.jpg' },
            { id: 2, name: 'عباءة سوداء أنيقة مع تطريز', price: 250, qty: 1, size: 'M', color: 'أسود', image: '/images/a3.jpg' }
        ]
    };

    const toggleItem = (itemId) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(itemId)) {
            newSelected.delete(itemId);
        } else {
            newSelected.add(itemId);
        }
        setSelectedItems(newSelected);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedItems.size === 0) {
            alert('الرجاء اختيار منتج واحد على الأقل');
            return;
        }
        if (!reason.trim()) {
            alert('الرجاء اختيار سبب الإرجاع');
            return;
        }
        if (reason === 'other' && !customReason.trim()) {
            alert('الرجاء وصف السبب بالتفصيل');
            return;
        }
        // Show success modal
        setShowSuccessModal(true);

        // Auto-close after 3 seconds and navigate
        setTimeout(() => {
            navigate('/track-order');
        }, 3000);
    };

    return (
        <div className="pt-32 pb-24 container mx-auto px-6" dir="rtl">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <div className="mb-8 text-left">
                    <button
                        onClick={() => navigate('/track-order')}
                        style={{
                            fontFamily: 'Cairo',
                            fontWeight: 600,
                            fontStyle: 'SemiBold',
                            fontSize: '32px',
                            leadingTrim: 'NONE',
                            lineHeight: '24px',
                            letterSpacing: '0px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#717182',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            padding: '0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#5A5A5A'}
                        onMouseLeave={(e) => e.target.style.color = '#717182'}
                    >
                        <FiArrowRight size={32} />
                        العودة إلى الطلب
                    </button>
                </div>

                {/* Header Section */}
                <div className="mb-8">
                    <h1 style={{
                        fontFamily: 'Cairo',
                        fontWeight: 700,
                        fontStyle: 'Bold',
                        fontSize: '48px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        textAlign: 'right',
                        marginBottom: '8px',
                        color: '#000000'
                    }}>طلب إرجاع</h1>
                    <p style={{
                        fontFamily: 'Cairo',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#6B7280',
                        textAlign: 'right',
                        margin: '0'
                    }}> رقم الطلب : {order.number}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Select Products Section */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8">
                        <h2 style={{
                            fontFamily: 'Cairo',
                            fontWeight: 700,
                            fontStyle: 'Bold',
                            fontSize: '32px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textAlign: 'right',
                            marginBottom: '24px',
                            color: '#000000'
                        }}>اختر المنتجات المراد إرجاعها</h2>

                        <div className="space-y-4">
                            {order.items.map(item => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition cursor-pointer border border-gray-200"
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <div className="flex items-center gap-6 flex-1">
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.has(item.id)}
                                            onChange={() => toggleItem(item.id)}
                                            name={`item-${item.id}`}
                                            className="w-6 h-6 cursor-pointer flex-shrink-0"
                                        />
                                        <img src={item.image} alt="item" className="w-20 h-20 object-cover rounded" />
                                        <div className="text-right flex-1">
                                            <div style={{
                                                fontFamily: 'Cairo',
                                                fontWeight: 600,
                                                fontStyle: 'SemiBold',
                                                fontSize: '20px',
                                                lineHeight: '100%',
                                                color: '#000000',
                                                marginBottom: '8px'
                                            }}>
                                                {item.name}
                                            </div>
                                            <div className="text-xs text-gray-500" style={{
                                                fontFamily: 'Cairo',
                                                fontWeight: 400,
                                                fontStyle: 'Regular',
                                                fontSize: '16px',
                                                leadingTrim: 'NONE',
                                                lineHeight: '20px',
                                                letterSpacing: '0px'
                                            }}>
                                                المقاس: <span style={{
                                                    fontFamily: 'Cairo',
                                                    fontWeight: 500,
                                                    fontStyle: 'Medium',
                                                    fontSize: '16px',
                                                    leadingTrim: 'NONE',
                                                    lineHeight: '20px',
                                                    letterSpacing: '0px',
                                                    color: '#000000'
                                                }}>{item.size}</span>
                                            </div>
                                            <div className="text-xs text-gray-500" style={{
                                                fontFamily: 'Cairo',
                                                fontWeight: 400,
                                                fontStyle: 'Regular',
                                                fontSize: '16px',
                                                leadingTrim: 'NONE',
                                                lineHeight: '20px',
                                                letterSpacing: '0px'
                                            }}>
                                                اللون: <span style={{
                                                    fontFamily: 'Cairo',
                                                    fontWeight: 500,
                                                    fontStyle: 'Medium',
                                                    fontSize: '16px',
                                                    leadingTrim: 'NONE',
                                                    lineHeight: '20px',
                                                    letterSpacing: '0px',
                                                    color: '#000000'
                                                }}>{item.color}</span>
                                            </div>
                                            <div className="text-xs text-gray-500" style={{
                                                fontFamily: 'Cairo',
                                                fontWeight: 400,
                                                fontStyle: 'Regular',
                                                fontSize: '16px',
                                                leadingTrim: 'NONE',
                                                lineHeight: '20px',
                                                letterSpacing: '0px'
                                            }}>
                                                الكمية: <span style={{
                                                    fontFamily: 'Cairo',
                                                    fontWeight: 500,
                                                    fontStyle: 'Medium',
                                                    fontSize: '16px',
                                                    leadingTrim: 'NONE',
                                                    lineHeight: '20px',
                                                    letterSpacing: '0px',
                                                    color: '#000000'
                                                }}>{item.qty}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        fontFamily: 'Calibri',
                                        fontWeight: 400,
                                        fontStyle: 'Regular',
                                        fontSize: '32px',
                                        lineHeight: '100%',
                                        letterSpacing: '0%',
                                        color: '#000000',
                                        minWidth: '100px',
                                        textAlign: 'left',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        marginRight: '35px'
                                    }}>
                                        {item.price} <img src="/images/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Return Reason Section */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8">
                        <h2 style={{
                            fontFamily: 'Cairo',
                            fontWeight: 700,
                            fontStyle: 'Bold',
                            fontSize: '32px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textAlign: 'right',
                            marginBottom: '24px',
                            color: '#000000'
                        }}>سبب الاسترجاع</h2>

                        <div className="space-y-4">
                            <label className="flex items-center gap-4 cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition">
                                <input
                                    type="radio"
                                    name="reason"
                                    value="wrong_item"
                                    checked={reason === 'wrong_item'}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="w-5 h-5"
                                />
                                <span style={{
                                    fontFamily: 'Cairo',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    color: '#000000',
                                    lineHeight: '100%'
                                }}>تم استلام منتج خاطئ</span>
                            </label>

                            <label className="flex items-center gap-4 cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition">
                                <input
                                    type="radio"
                                    name="reason"
                                    value="damaged"
                                    checked={reason === 'damaged'}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="w-5 h-5"
                                />
                                <span style={{
                                    fontFamily: 'Cairo',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    color: '#000000',
                                    lineHeight: '100%'
                                }}>المنتج به عيب</span>
                            </label>

                            <label className="flex items-center gap-4 cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition">
                                <input
                                    type="radio"
                                    name="reason"
                                    value="not_as_described"
                                    checked={reason === 'not_as_described'}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="w-5 h-5"
                                />
                                <span style={{
                                    fontFamily: 'Cairo',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    color: '#000000',
                                    lineHeight: '100%'
                                }}>لا يطابق الوصف</span>
                            </label>

                            <label className="flex items-center gap-4 cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition">
                                <input
                                    type="radio"
                                    name="reason"
                                    value="size_mismatch"
                                    checked={reason === 'size_mismatch'}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="w-5 h-5"
                                />
                                <span style={{
                                    fontFamily: 'Cairo',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    color: '#000000',
                                    lineHeight: '100%'
                                }}>المقاس غير مناسب</span>
                            </label>

                            <label className="flex items-center gap-4 cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition">
                                <input
                                    type="radio"
                                    name="reason"
                                    value="other"
                                    checked={reason === 'other'}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="w-5 h-5"
                                />
                                <span style={{
                                    fontFamily: 'Cairo',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    color: '#000000',
                                    lineHeight: '100%'
                                }}>أخرى</span>
                            </label>
                        </div>

                        {/* Custom Reason Textarea */}
                        {reason === 'other' && (
                            <textarea
                                value={customReason}
                                onChange={(e) => setCustomReason(e.target.value)}
                                placeholder="الرجاء وصف السبب بالتفصيل..."
                                style={{
                                    marginTop: '24px',
                                    width: '100%',
                                    height: '120px',
                                    fontFamily: 'Cairo',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    color: '#333333',
                                    padding: '16px',
                                    border: '2px solid #D1D5DB',
                                    borderRadius: '8px',
                                    resize: 'none',
                                    boxSizing: 'border-box',
                                    lineHeight: '1.6',
                                    backgroundColor: '#F9FAFB',
                                    outline: 'none',
                                    transition: 'border-color 0.2s ease'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#9CA3AF'}
                                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                            />
                        )}
                    </div>

                    {/* Policy Notice */}
                    <div style={{
                        background: 'linear-gradient(180deg, #7F7F7F 0%, #BFBFBF 100%)',
                        borderRadius: '16px',
                        paddingTop: '32px',
                        paddingRight: '32px',
                        paddingBottom: '32px',
                        paddingLeft: '32px',
                        opacity: 1
                    }}>
                        <h3 style={{
                            fontFamily: 'Cairo',
                            fontWeight: 700,
                            fontStyle: 'Bold',
                            fontSize: '32px',
                            leadingTrim: 'NONE',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            textAlign: 'right',
                            color: '#FFFFFF',
                            marginTop: '0',
                            marginBottom: '24px'
                        }}>
                            سياسة الاسترجاع
                        </h3>

                        <div className="space-y-4">
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'right' }}>
                                <MdCheckCircle size={24} color="#16A34A" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <p style={{
                                    fontFamily: 'Cairo',
                                    fontWeight: 500,
                                    fontStyle: 'Medium',
                                    fontSize: '24px',
                                    leadingTrim: 'NONE',
                                    lineHeight: '20px',
                                    letterSpacing: '0px',
                                    textAlign: 'right',
                                    color: '#FFFFFF',
                                    margin: '0'
                                }}>
                                    يجب أن تكون المنتجات المرجعة غير مستخدمة وفي حالتها الأصلية
                                </p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'right' }}>
                                <MdCheckCircle size={24} color="#16A34A" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <p style={{
                                    fontFamily: 'Cairo',
                                    fontWeight: 500,
                                    fontStyle: 'Medium',
                                    fontSize: '24px',
                                    leadingTrim: 'NONE',
                                    lineHeight: '20px',
                                    letterSpacing: '0px',
                                    textAlign: 'right',
                                    color: '#FFFFFF',
                                    margin: '0'
                                }}>
                                    يتم قبول الاسترجاع خلال 14 يوماً من تاريخ الاستلام
                                </p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'right' }}>
                                <MdCheckCircle size={24} color="#16A34A" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <p style={{
                                    fontFamily: 'Cairo',
                                    fontWeight: 500,
                                    fontStyle: 'Medium',
                                    fontSize: '24px',
                                    leadingTrim: 'NONE',
                                    lineHeight: '20px',
                                    letterSpacing: '0px',
                                    textAlign: 'right',
                                    color: '#FFFFFF',
                                    margin: '0'
                                }}>
                                    يجب أن تكون العلامات والتعليقات الاصلية سليمة
                                </p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'right' }}>
                                <MdCheckCircle size={24} color="#16A34A" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <p style={{
                                    fontFamily: 'Cairo',
                                    fontWeight: 500,
                                    fontStyle: 'Medium',
                                    fontSize: '24px',
                                    leadingTrim: 'NONE',
                                    lineHeight: '20px',
                                    letterSpacing: '0px',
                                    textAlign: 'right',
                                    color: '#FFFFFF',
                                    margin: '0'
                                }}>
                                    سيتم معالجة استرجاع الأموال خلال 7-5 أيام عمل بعد الفحص
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-8">
                        <button
                            type="submit"
                            className="text-white py-4 rounded-full transition duration-300 hover:bg-blue-600"
                            style={{
                                fontFamily: 'Cairo',
                                fontWeight: 600,
                                fontStyle: 'SemiBold',
                                fontSize: '24px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textAlign: 'center',
                                backgroundColor: '#3B82F6',
                                border: 'none',
                                cursor: 'pointer',
                                paddingLeft: '100px',
                                paddingRight: '100px',
                                minWidth: '300px'
                            }}
                        >
                            إرسال طلب الإرجاع
                        </button>
                    </div>
                </form>

                {/* Success Modal */}
                {showSuccessModal && (
                    <div style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000
                    }}>
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            padding: '60px 40px',
                            maxWidth: '500px',
                            width: '90%',
                            textAlign: 'center',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                        }}>
                            <div style={{ marginBottom: '24px' }}>
                                <MdCheckCircle size={80} color="#3B82F6" style={{ margin: '0 auto' }} />
                            </div>

                            <h2 style={{
                                fontFamily: 'Cairo',
                                fontWeight: 700,
                                fontStyle: 'Bold',
                                fontSize: '32px',
                                lineHeight: '100%',
                                letterSpacing: '0px',
                                color: '#000000',
                                marginTop: '0',
                                marginBottom: '16px'
                            }}>
                                تم إرسال طلبك بنجاح
                            </h2>

                            <p style={{
                                fontFamily: 'Cairo',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '1.6',
                                color: '#666666',
                                marginTop: '0',
                                marginBottom: '0'
                            }}>
                                يتم معالجة طلبك خلال 14 يوماً من التسليم
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
