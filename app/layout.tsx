import { CustomThemeProvider } from "@/shared/providers/custom-theme-provider";
import { store } from "@/store";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={montserrat.className}>
        <Provider store={store}>
          <CustomThemeProvider>
            {children}
            <div id="modal"></div>
          </CustomThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
