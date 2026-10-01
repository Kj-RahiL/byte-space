import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import LoginForm from "@/components/auth/LoginForm";
import SocialButtons from "@/components/auth/SocialButtons";

export const metadata: Metadata = {
  title: "Sign In · ByteSpace",
  description: "Sign in to ByteSpace to continue learning and creating.",
};

const LoginPage = () => {
  return (
    <AuthShell
      introTitle="Sign in with ease"
      introText="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
      cardClassName="sm:pb-10"
      footer={
        <>
          New user?{" "}
          <Link
            href="/register"
            className="font-medium text-persian-blue-800 hover:underline"
          >
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />
      <div className="mt-8.25 flex flex-col gap-10">
        <div className="flex items-center gap-4 text-body-l text-shuttle-gray-400">
          <span className="h-px flex-1 bg-shuttle-gray-200" />
          or
          <span className="h-px flex-1 bg-shuttle-gray-200" />
        </div>
        <SocialButtons />
      </div>
    </AuthShell>
  );
};

export default LoginPage;
