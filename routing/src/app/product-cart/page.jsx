"use client";
import { useRouter } from "next/navigation";
export default function ProductCart() {
  const router = useRouter();
  const handleClick = () => {
    console.log("order placed ");
    router.back();
  };

  return (
    <>
      <h1>Order Page </h1>
      <button onClick={handleClick}> Place Order</button>
    </>
  );
}
