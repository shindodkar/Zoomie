import { SignIn } from "@clerk/nextjs";

export default function SingInPage() {
  return (
    <main className="flex h-screen w-full justify-center items-center">
      <SignIn />
    </main>
  );
}
