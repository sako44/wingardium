import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["tr", "en"],

  // Used when no locale matches
  defaultLocale: "tr",
  localePrefix: "as-needed", // يجعل tr بدون سلاش، بينما يظهر en عند التبديل
});
