import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [], // تحميل البيانات من LocalStorage
    shippingCost: Number(localStorage.getItem("shippingCost")) || 55, // تحميل قيمة الشحن من localStorage أو القيمة الافتراضية

  }),
  actions: {

    addToCart(product, quantity) {
      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        // تحديث الكمية إذا كان المنتج موجودًا
        existingItem.quantity += quantity;
      } else {
        // إضافة منتج جديد مع الكمية
        this.cartItems.push({ ...product, quantity });
      }
      this.saveCart();
    },

    removeFromCart(productId) {
        // إزالة المنتج من السلة بناءً على الـ id
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
        this.saveCart();
      },


    saveCart() {
      // حفظ السلة في LocalStorage
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    updateShippingCost(cost) {
      this.shippingCost = cost; // تحديث قيمة تكلفة الشحن
      localStorage.setItem("shippingCost", cost); // حفظ القيمة في localStorage
    },
    
    clearCart() {
      this.cartItems = [];
      this.saveCart();
    },
  },
});
