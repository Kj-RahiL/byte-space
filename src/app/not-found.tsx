import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { StatusScreen } from "@/components/layout/StatusScreen";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found · ByteSpace",
};

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <StatusScreen
        code="404"
        title="The page you are looking for doesn’t exist"
        description="Try to use a correct url or go back to homepage to start again"
        actions={<Button href="/">Back to Home</Button>}
      />
      <Footer />
    </main>
  );
};

export default NotFound;
