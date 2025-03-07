"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation"; // ✅ استخدام `next/navigation`
import { useRouter } from "next/navigation";

function TranslateButton() {
  const pathname = usePathname();
  const router = useRouter();

  // تحديد اللغة الحالية
  const isEnglish = pathname.startsWith("/en");

  const switchLocale = () => {
    if (isEnglish) {
      // إزالة "/en" فقط من بداية المسار
      router.push(pathname.replace(/^\/en/, "/tr"));
    } else {
      // إضافة "/en" إلى بداية المسار إذا لم يكن موجودًا
      router.push(`/en${pathname}`);
    }

    // router.refresh();
  };

  return (
    <Button
      variant={"ghost"}
      onClick={switchLocale}
      className="shadow-xl border-primary text-primary hover:text-black bg-secondary border text-[16px] rounded-[15px] px-3 py-5 transition duration-300 ease-in-out"
    >
      {isEnglish ? "Tr" : "En"}{" "}
    </Button>
  );
}

export default TranslateButton;
