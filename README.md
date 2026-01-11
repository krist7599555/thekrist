# 🌟 TheKrist — บล็อกส่วนตัว


<a style="text-align: center; display: block; padding: 12px" href="https://thekrist.com">thekrist.com</a>



[TheKrist](https://thekrist.com) เป็นบล็อกส่วนตัวที่เน้นบทความเชิงไดอารี่ ความคิด และบทเรียนชีวิตที่เขียนด้วยภาษาไทย ✨

---

## 🔎 สิ่งที่มีในโปรเจค

- สร้างด้วย **SvelteKit** และ **mdsvex** (ใช้ `.svx` สำหรับโพสต์)
- สไตล์ด้วย **Tailwind CSS** และ **DaisyUI** (ธีมตั้งไว้เป็น **light-only**)
- ฟอนต์หลัก: **MN Ice Cream Vanilla** (วางที่ `src/lib/assets/fonts/`)
- Formatter: **Oxfmt** (`oxfmt --write .`) — ตอนนี้ใช้ `oxfmt` เป็นเครื่องมือจัดรูปแบบเดียวนะครับ

---

## 🚀 คำสั่งที่ใช้บ่อย

- พัฒนาแบบ dev: `npm run dev`
- สร้างโปรดักชัน: `npm run build`
- พรีวิว: `npm run preview`
- รัน formatter: `npm run format` (เรียก `oxfmt --write .`)
- ตรวจและแก้ lint: `npm run lint` (ใช้ `oxfmt --check` + `oxlint --fix`)
- รันเทสต์: `npm run test`

---

## ✍️ บทความตัวอย่าง

โปรเจคนี้ใช้ไฟล์ `.svx` สำหรับโพสต์ใน `src/routes/` เช่น:

- `src/routes/1.svx` — "วิถีซามูไร กับคำถามว่าชีวิตกำลังแลกอะไรอยู่"
- `src/routes/2.svx` — "ผียุงบอกบุญ"

คุณสามารถเพิ่มไฟล์ `.svx` ใหม่ใน `src/routes/` เพื่อสร้างหน้าโพสต์ได้ทันที

---

## 🛠️ หมายเหตุการตั้งค่า

- ไฟล์ฟอนต์วางที่ `src/lib/assets/fonts/` และถูกประกาศโดย `@font-face` ใน `src/routes/layout.css`
- เพื่อป้องกันเบราว์เซอร์บังคับโหมดมืด เราได้ตั้งค่า `color-scheme: light` และเพิ่ม `<meta name="color-scheme" content="light" />` ใน `src/app.html` เพื่อให้เว็บแสดงเฉพาะธีมสว่าง
- ถ้าต้องการรองรับฟอร์แมตเว็บ ฟอนต์ `ttf` สามารถแปลงเป็น `woff/woff2` เพื่อประสิทธิภาพที่ดีกว่า

---

## 🤝 ช่วยกันดูแลโค้ด

- กรุณารัน `npm run format` ก่อนเปิด PR เพื่อให้รูปแบบโค้ดคงที่
- ถ้าต้องการ ผมสามารถเพิ่ม Git hook (Husky + lint-staged) ให้รัน formatter อัตโนมัติก่อน commit

---

ถ้าต้องการให้ README นี้เพิ่ม/ปรับอะไรอีก (เช่น ข้อมูลการ deploy, CI, หรือวิธีเขียนโพสต์แบบละเอียด) ก็บอกได้เลยครับ 🙌
