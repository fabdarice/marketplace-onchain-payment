import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to the Marketplace
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Your one-stop destination for buying and selling. Join our community
              of sellers and find amazing deals.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/products">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Start Shopping
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sell">
                <TrendingUp className="mr-2 h-4 w-4" />
                Start Selling
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}