import { SignUp } from "@clerk/nextjs";

export default function SingUpPage() {
  return (
    <main className="flex h-screen w-full justify-center items-center">
      <SignUp />
    </main>
  );
}
