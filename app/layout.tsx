import { ClientLayout } from "@/components/client-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToDo List App",
  description: "Vacancy test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
