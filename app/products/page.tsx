"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Checkout,
  CheckoutButton,
  CheckoutStatus,
} from "@coinbase/onchainkit/checkout";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock data - In a real app, this would come from an API
const products = [
  {
    id: 1,
    name: "COIN Cap (Coinbase Blue)",
    price: 5.99,
    description:
      "Our white “Coin” logo is embroidered onto a blue  ‘47 Classic Clean Up Cap for the most classic representation of the Coinbase brand.",
    image:
      "https://coinbaseshop.com/cdn/shop/files/20240203_845a_Photoshoot_Coinbase-Merch-Q1_IMGP9778.jpg?v=1707459710",
  },
  {
    id: 3,
    name: "Anti Anti Crypto Army T-Shirt",
    price: 5.99,
    description:
      "The Anti Crypto Army has a few powerful politicians on its side, but the Anti Anti Crypto Army is 52 million Americans strong. ",
    image:
      "https://coinbaseshop.com/cdn/shop/files/20240203_845a_Photoshoot_Coinbase-Merch-Q1_IMGP9605.jpg?v=1707445351",
  },
  {
    id: 3,
    name: "Stand With Crypto Enamel Pin Set",
    price: 5.99,
    description:
      "The “Stand with Crypto” shield has emerged as a unifying symbol for the crypto community.",
    image:
      "https://coinbaseshop.com/cdn/shop/files/20240203_845a_Photoshoot_Coinbase-Merch-Q1_IMGP9926.jpg?v=1707412964",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-8 px-24">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-8" />
          </div>
          <Button>Search</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader className="gap-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-md"
                />
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto gap-6">
                <span className="text-lg font-bold">${product.price}</span>
                <div className="w-48">
                  <Checkout productId="adb54c1b-6be0-4071-872b-a067e7a29352">
                    <CheckoutButton
                      className="custom-checkout-btn"
                      coinbaseBranded
                    />

                    <CheckoutStatus />
                  </Checkout>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
