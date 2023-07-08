import { UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="border-b border-slate-900 p-6 flex justify-between items-center">
      <p className="text-white">Clerk Tutorial</p>
      <UserButton afterSignOutUrl="/sign-in" />
    </nav>
  );
}
