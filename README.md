# 57-sonli Davlat Maktabgacha Ta'lim Tashkiloti (Farg'ona shahri)
## "Mening Bog'cham" Innovatsion Elektron Boshqaruv va Pedagogik Monitoring Platformasi

Ushbu platforma O'zbekiston Respublikasi Maktabgacha va maktab ta'limi vazirligining "Ilk qadam" davlat o'quv dasturi asosida 57-DMTT faoliyatini to'liq raqamlashtirish uchun ishlab chiqilgan.

### Asosiy Bo'limlar:
- рџ“Љ **Boshqaruv Paneli (Dashboard)**: Asosiy statistika, FaceID davomat, bolalar va xodimlar ko'rsatkichlari.
- рџ—єпёЏ **Rivojlanish Xaritasi**: 5 ta yosh toifasi (3-4, 4-5, 5-6, 6-7 yosh va Maktabga tayyorlik diagnostikasi) bo'yicha 5 ta davlat sohasi indikatorlari, K/B/T/D 4 ballik baholash va rasmiy blanklarni chop etish.
- рџ‘Ґ **Xodimlar**: 42 nafar xodim haqida to'liq ma'lumot, toifalar, ma'lumoti va Excel eksport.
- рџ“¦ **Oziq-ovqat Ombori**: 24 turdagi mahsulotlar bo'yicha kirim, chiqim, qoldiqlar (Alohida mahsulot daftari va Umumiy Svod hisobot).
- рџЌЅпёЏ **Oshxona Nazorati va Taomnoma**: Kunlik 10 kunlik perspektiv menyu va porsiyalar nazorati.
- рџ©є **Tibbiyot Xonasi**: Hamshira brokeraj daftarlari, antropometriya, vaksinalar va salomatlik jurnallari.

---

### Render.com platformasida deploy qilish:

Ushbu loyihani Renderda 2 xil usulda deploy qilish mumkin:

#### 1-Usul: Web Service (Node.js orqali)
1. Renderda **New +** -> **Web Service** ni tanlang.
2. GitHub repozitoriyangizni ulang.
3. Sozlamalarni quyidagicha belgilang:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. **Deploy Web Service** tugmasini bosing!

#### 2-Usul: Static Site (Tavsiya etiladi - 100% Bepul va Tez)
1. Renderda **New +** -> **Static Site** ni tanlang.
2. GitHub repozitoriyangizni ulang.
3. Sozlamalarni quyidagicha belgilang:
   - **Build Command**: (bo'sh qoldiring)
   - **Publish Directory**: `.` (nuqta qo'ying)
4. **Create Static Site** tugmasini bosing!

---
В© 2026 57-sonli Davlat Maktabgacha Ta'lim Tashkiloti. Barcha huquqlar himoyalangan.