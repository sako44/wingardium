import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  ...routing,
  localeDetection: true, // السماح بالكشف عن اللغة تلقائيًا
});

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"], // التأكد من تطبيق الميدل وير على كل الصفحات
};
