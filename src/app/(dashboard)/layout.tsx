import { Navbar } from "~/components/navbar";

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
