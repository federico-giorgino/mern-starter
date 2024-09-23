import { Header } from "@/components/header";

interface Props {
  children: React.ReactNode;
}

export function RootLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto p-10 sm:px-0 flex-1 flex">
        {children}
      </div>
    </div>
  );
}
