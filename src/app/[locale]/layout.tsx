import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyWidget from "@/components/EmergencyWidget";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "am"
        ? "አንከተሰ ብርሃን እናትና ሕጻን የሕክምና ማዕከል"
        : "Anketse Berhan Maternal & Child Medical Center",
    description:
      locale === "am"
        ? "24 ሰዓት አገልግሎት - ለሴቶች እና ለልጆች ጥራት ያለው የጤና አገልግሎት"
        : "24-hour quality healthcare for women and children",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <EmergencyWidget />
      </div>
    </NextIntlClientProvider>
  );
}
