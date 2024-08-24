import Link from "next/link";

export default function Products() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="products/0">
        <h1>Products 0</h1>
      </Link>
      <Link href="products/2">
        <h2>Product 1</h2>
      </Link>
      <Link href="products/2" replace>
        <h2>Product 2</h2>
      </Link>
      <Link href="products/3">
        <h2>Product 3</h2>
      </Link>
    </div>
  );
}
