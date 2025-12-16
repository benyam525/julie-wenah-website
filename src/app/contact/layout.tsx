import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Julie Wenah",
  description: "Get in touch with Julie Wenah for speaking inquiries, collaboration opportunities, and partnership discussions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
