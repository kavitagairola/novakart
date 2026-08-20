import { useEffect, useState } from "react";    
function ProductGallery({ product }) {

  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image
  );

  useEffect(() => {
    setSelectedImage(
      product.images?.[0] || product.image
    );
  }, [product.id]);


  return (
   <div >

      {/* Main Image */}

<div className="relative flex h-[480px] w-full items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

  


<img
  src={selectedImage}
  alt={product.name}
  className="max-h-full max-w-full object-contain cursor-zoom-in transition-all duration-500 hover:scale-105"
/>

      </div>

      {/* Thumbnails */}

        {product.images && (
  <div className="mt-6 flex flex-wrap gap-3">

          {product.images.map((image, index) => (

           <button
  key={image}
  onClick={() => setSelectedImage(image)}
  className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border-2 bg-slate-50 transition-all duration-300 ${
    selectedImage === image
      ? "border-black shadow-md"
      : "border-slate-200 hover:-translate-y-1 hover:border-black hover:shadow-md"
  }`}
>

             <img
  src={image}
  alt={product.name}
  className="max-h-full max-w-full object-contain"
/>

            </button>

          ))}

        </div>
      )}

    </div>
  );
}

export default ProductGallery;