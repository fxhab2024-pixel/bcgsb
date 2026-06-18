# Policy Security — BCGSP

## گزارش آسیب‌پذیری‌های امنیتی

اگر آسیب‌پذیری امنیتی در BCGSP کشف کردید، لطفاً به‌صورت مسئول آن را گزارش دهید.

### نحوه گزارش

1. **عمومی گزارش ندهید** — آسیب‌پذیری را در GitHub Issues به‌صورت عمومی گزارش نکنید.
2. **ایمیل بزنید** — گزارش خود را به `security@bcgsp.com` ارسال کنید.
3. **جزئیات کامل** — شامل:
   - توضیح آسیب‌پذیری
   - مراحل بازتولید (PoC)
   - تأثیر قابل انتظار
   - پیشنهاد رفع (در صورت وجود)

### زمان‌بندی پاسخ

| مرحله | زمان |
|-------|------|
| تأیید دریافت گزارش | ۴۸ ساعت |
| ارزیابی اولیه | ۷ روز |
| رفع یا workaround | ۳۰ روز |
| افشای عمومی (پس از رفع) | ۹۰ روز |

## اقدامات امنیتی پیاده‌سازی‌شده

### احراز هویت
- ✅ JWT با زمان انقضای محدود
- ✅ هش رمز عبور با bcrypt (۱۰ rounds)
- ✅ Validation ایمیل با regex
- ✅ حداقل طول رمز عبور ۶ کاراکتر
- ✅ Lockout پس از تلاش‌های ناموفق متوالی (در حال پیاده‌سازی)

### کنترل دسترسی
- ✅ Role-Based Access Control (RBAC)
- ✅ نقش‌ها: admin, ceo, consultant, sme, analyst, branch_manager, investor
- ✅ محافظت API routes با `requireAuth` middleware
- ✅ بررسی نقش در endpointهای حساس

### محافظت API
- ✅ Validation تمام ورودی‌ها
- ✅ Rate limiting (در حال پیاده‌سازی)
- ⏳ CSRF protection (برای فرم‌ها)
- ⏳ CORS policy سخت‌گیرانه‌تر

### دیتابیس
- ✅ استفاده از Prisma ORM (جلوگیری از SQL Injection)
- ✅ Parameterized queries
- ✅ Relation cascade rules برای حفظ یکپارچگی داده

### زیرساخت
- ✅ HTTPS اجباری (Vercel)
- ⏳ HSTS Header (باید فعال شود)
- ⏳ Content-Security-Policy (باید تنظیم شود)
- ⏳ X-Frame-Options: DENY
- ⏳ X-Content-Type-Options: nosniff

## اقدامات پیشنهادی برای بهبود

1. فعال‌سازی HSTS، CSP و security headers در `next.config.ts`
2. افزودن rate limiting با `upstash/ratelimit`
3. پیاده‌سازی 2FA برای مدیران
4. افزودن audit log برای تغییرات حساس
5. اسکن خودکار وابستگی‌ها با Dependabot
6. اسکن امنیتی منظم با Snyk

## صفحه تشکر

از محققان امنیتی که آسیب‌پذیری‌ها را مسئولانه گزارش می‌دهند، با ذکر نام (با رضایت) در این صفحه تشکر خواهد شد.
