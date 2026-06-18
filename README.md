# BCGSP — سیستم عامل هوش استراتژیک کسب‌وکار

> **نسخه ۰.۲.۰** | **به‌روزرسانی:** خرداد ۱۴۰۴
> **وضعیت:** فاز ۳ تکمیل‌شده، آماده توسعه فاز ۴

پلتفرم یکپارچه هوش مصنوعی برای رشد استراتژیک کسب‌وکارهای کوچک و متوسط (SME) — از تشخیص تا استراتژی، از برنامه‌ریزی تا اجرا.

## ✨ ویژگی‌های کلیدی

- **تشخیص استراتژیک ۱۰۰ سؤالی** — تحلیل ۱۰ بُعد کسب‌وکار با الگوریتم هوشمند
- **مشاور استراتژیک هوشمند** — هوش مصنوعی مخصوص استراتژی کسب‌وکار
- **توصیه‌های عملیاتی** — اولویت‌بندی‌شده با تحلیل اثر، هزینه، ریسک
- **نقشه راه رشد سه‌فازی** — برنامه بلندمدت با شاخص‌های اندازه‌گیری
- **آمادگی سرمایه‌گذاری** — ارزیابی بر اساس استانداردهای جهانی
- **ردیابی اجرای استراتژی** — داشبورد عملکردی و مدیریت وظایف

## 🏗 معماری فنی

| لایه | تکنولوژی |
|------|----------|
| Frontend | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui |
| Database | PostgreSQL + Prisma ORM |
| Auth | JWT + bcrypt |
| AI | z-ai-web-dev-sdk |
| Deployment | Vercel + Caddy (reverse proxy) |
| Package Manager | Bun |

## 📊 آمار پروژه

- **۲۹** مدل Prisma
- **۲۶** API Route
- **۳۷,۶۰۰+** خط کد TypeScript/TSX
- **۳۰+** کامپوننت React
- **۴ فاز** توسعه

## 🚀 شروع سریع

### پیش‌نیازها

- Node.js 18+ یا Bun 1.0+
- PostgreSQL 14+
- npm یا bun

### نصب

```bash
# کلون ریپازیتوری
git clone https://github.com/fxhab2024-pixel/bcgsb.git
cd bcgsb

# نصب وابستگی‌ها
bun install  # یا npm install

# تنظیم متغیرهای محیطی
cp .env.example .env.local
# فایل .env.local را با مقادیر واقعی پر کنید

# راه‌اندازی دیتابیس
bun run db:push        # ساخت schema
bun run db:seed        # پر کردن داده‌های نمونه

# اجرای پروژه
bun run dev            # http://localhost:3000
```

### حساب‌های آزمایشی (پس از seed)

| نقش | ایمیل | رمز عبور |
|-----|-------|----------|
| Admin | admin@bcgsp.com | admin123 |
| SME | sme@example.com | sme123 |

## 📁 ساختار پروژه

```
bcgsb/
├── prisma/
│   ├── schema.prisma          # ۲۹ مدل دیتابیس
│   ├── migrations/            # تاریخچه migration
│   └── seed.ts                # داده‌های اولیه
├── src/
│   ├── app/
│   │   ├── api/               # ۲۶ API Route
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (client-side router)
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                # shadcn/ui primitives
│   │   ├── admin/             # پنل مدیریت پیشرفته
│   │   ├── ai-agents/         # Agent‌های هوش مصنوعی
│   │   ├── bi/                # Business Intelligence
│   │   ├── crm/               # مدیریت ارتباط مشتری
│   │   ├── financial/         # فاکتور، هزینه، بودجه
│   │   ├── multi-tenant/      # مدیریت سازمان و شعب
│   │   ├── portals/           # پورتال‌های CEO/مشاور/SME
│   │   ├── security/          # مرکز امنیت
│   │   └── ...                # ۲۰+ کامپوننت دیگر
│   └── lib/
│       ├── auth.ts            # احراز هویت JWT
│       ├── db.ts              # Prisma client
│       ├── store.ts           # Zustand store
│       └── api-client.ts      # HTTP client
└── public/
```

## 🔐 امنیت

- احراز هویت JWT با expire time
- هش رمز عبور با bcrypt (۱۰ rounds)
- Role-based access control (admin, ceo, consultant, sme)
- محافظت از API routes با `requireAuth` middleware
- Validation ورودی‌ها در همه endpoints

## 🛣 نقشه راه

- ✅ **فاز ۱** — MVP و هسته عملیاتی
- ✅ **فاز ۲** — BI پیشرفته، اتوماسیون، پورتال‌های تعاملی
- ✅ **فاز ۳** — Multi-tenant، گزارش‌ساز، امنیت، یکپارچگی
- 🔜 **فاز ۴** — AI واقعی، اتوماسیون هوشمند، White-Label کامل

## 📝 مجوز

این پروژه اختصاصی است. تمامی حقوق محفوظ است.

## 👥 تیم

- **مالک:** fxhab2024-pixel
- **پلتفرم توسعه:** با کمک هوش مصنوعی

---

**ساخت‌شده با ❤️ برای کسب‌وکارهای ایرانی**
