import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create an Account · ByteSpace",
  description: "Sign up for ByteSpace — free, quick and easy.",
};

const RegisterPage = () => {
  return (
    <AuthShell
      introTitle="Sign up and come in"
      introText="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account"
      title="Welcome to ByteSpace"
      cardClassName="sm:pb-12.75"
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-persian-blue-800 hover:underline"
          >
            Login
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
};

export default RegisterPage;
