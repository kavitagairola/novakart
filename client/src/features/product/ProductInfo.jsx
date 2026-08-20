    import { useState } from "react";
    import { useCart } from "../../context/CartContext";
import { Minus, Plus } from "lucide-react";
    function ProductInfo({ product }) {
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    return (
     <div className="w-full">

        {/* Badge */}

        <span className="rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
            {product.badge}
        </span>

        {/* Product Name */}

        <h1 className="mt-2 text-3xl xl:text-4xl font-bold text-slate-900">
            {product.name}
        </h1>

        {/* Rating */}

        <div className="mt-2 flex items-center gap-3">

            <span className="text-yellow-500">
            ⭐ {product.rating}
            </span>

            <span className="text-slate-500">
            ({product.reviews} Reviews)
            </span>

        </div>

        {/* Price */}

        <div className="mt-4 flex items-center gap-4">

            <span className="text-3xl font-bold text-slate-900">
            ₹{product.price.toLocaleString()}
            </span>

            <span className="text-lg text-slate-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
            </span>

        </div>

        {/* Description */}

        <p className="mt-4 leading-6 text-slate-600">
           {product.description}
        </p>

        {/* Quantity */}

        <div className="mt-5">

            <h3 className="mb-3 font-semibold">
            Quantity
            </h3>

            <div className="flex w-fit items-center rounded-full border border-slate-300">

            <button
                onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
                }
                className="h-12 w-12"
            >
                <Minus size={18} />
            </button>

            <span className="px-6 font-semibold">
                {quantity}
            </span>

            <button
                onClick={() =>
                setQuantity(quantity + 1)
                }
                className="px-5 py-3"
            >
                <Plus size={18} />
            </button>

            </div>

        </div>

        {/* Stock */}

        <div className="mt-5 space-y-1.5">

            <p className="font-semibold text-green-600">
            ✔ In Stock
            </p>

            <p>🚚 Free Shipping Available</p>

            <p>🔒 Secure Payment</p>

            <p>↩️ Easy Return</p>

        </div>

        {/* Buttons */}

        <div className="mt-6 grid grid-cols-2 gap-3">

            <button
            onClick={() =>
                addToCart(product, quantity)
            }
            className="rounded-xl bg-blue-600 px-10 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
            Add To Cart
            </button>

            <button className="rounded-xl border border-blue-600 px-10 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
            Buy Now
            </button>

        </div>

        </div>
    );
    }

    export default ProductInfo;