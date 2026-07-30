import { useParams } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";
import { products } from "../../constants/productData";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();

const product = products.find(
  (item) => item.id === Number(id)
);


const { addToCart } = useCart();


if (!product) {
  return (
    <MainLayout>
      <Container>
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold">
            Product Not Found
          </h2>
        </div>
      </Container>
    </MainLayout>
  );
}

const [selectedImage, setSelectedImage] = useState(
  product.images?.[0] || product.image
);
const [quantity, setQuantity] = useState(1);


const increaseQuantity = () => {
  setQuantity((prev) => prev + 1);
};

const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity((prev) => prev - 1);
  }
};

  return (
  

   <MainLayout>
  <Container>
    <div className="grid gap-12 py-16 lg:grid-cols-2">

      {/* Left Side */}
      <div>
        <img
  src={selectedImage}
  alt={product.name}
  className="h-[400px] w-full rounded-2xl border bg-white p-6 object-contain shadow-lg"
/>
     
      {product.images && (
  <div className="mt-4 flex gap-3">
    {product.images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`${product.name}-${index + 1}`}
        onClick={() => setSelectedImage(image)}
        className={`h-20 w-20 cursor-pointer rounded-lg border object-cover transition ${
          selectedImage === image
            ? "border-blue-600"
            : "border-gray-300"
        }`}
      />
    ))}
  </div>
)}
</div>


      {/* Right Side */}
      <div>

        <span className="inline-block rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white">
          {product.badge}
        </span>

        <h1 className="mt-4 text-4xl font-bold">
          {product.name}
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-yellow-500">
            ⭐ {product.rating}
          </span>

          <span className="text-gray-500">
            ({product.reviews} Reviews)
          </span>
        </div>

        <div className="mt-6 flex items-center gap-4">

          <span className="text-4xl font-bold text-blue-600">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-xl text-gray-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>

        </div>

        <p className="mt-8 leading-8 text-gray-600">
          Experience premium quality with this amazing product.
          Built using high-quality materials and designed to
          deliver excellent performance for everyday use.
        </p>

        <div className="mt-8">

  <h3 className="mb-3 text-lg font-semibold">
    Quantity
  </h3>

  <div className="flex w-fit items-center rounded-lg border">

    <button
  onClick={decreaseQuantity}
  className="px-5 py-3 text-xl hover:bg-gray-100"
>
  -
</button>

<span className="px-6 py-3 font-semibold">
  {quantity}
</span>

<button
  onClick={increaseQuantity}
  className="px-5 py-3 text-xl hover:bg-gray-100"
>
  +
</button>   

  </div>

</div>

<div className="mt-8 space-y-3">

  <p className="text-green-600 font-semibold">
    ✔ In Stock
  </p>

  <p>
    🚚 Free Shipping Available
  </p>

  <p>
    🔒 100% Secure Payment
  </p>

  <p>
    ↩️ 7 Days Easy Return
  </p>

</div>

<div className="mt-10 flex gap-4">
<button
  onClick={() => {
    

    console.log("Before Add");

    addToCart(product, quantity);

    console.log("After Add");
  }}
  className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
>
  Add To Cart
</button>

  <button
    className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
  >
    Buy Now
  </button>

</div>

      </div>

    </div>
  </Container>
</MainLayout>

 
  );
}

export default ProductDetails;