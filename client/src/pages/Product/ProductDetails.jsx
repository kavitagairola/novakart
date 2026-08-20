import { useParams } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";

import { products } from "../../constants/productData";

import ProductGallery from "../../features/product/ProductGallery";

import ProductInfo from "../../features/product/ProductInfo";
import ProductSpecifications from "../../features/product/ProductSpecifications";
import ProductShipping from "../../features/product/ProductShipping";
import ProductDescription from "../../features/product/ProductDescription";
import RelatedProducts from "../../features/product/RelatedProducts";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <MainLayout>
        <Container>

          <h2 className="py-20 text-center text-3xl font-bold">
            Product Not Found
          </h2>

        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

     <Container>

  {/* Hero Section */}

  <div className="grid grid-cols-1 items-start gap-12 py-12 lg:py-16 lg:grid-cols-[520px_minmax(0,1fr)]">

    <ProductGallery product={product} />

    <ProductInfo product={product} />

  </div>

  {/* Description */}

  <ProductDescription product={product} />

  {/* Specifications */}

  <ProductSpecifications product={product} />

  {/* Shipping */}

  <ProductShipping />

<RelatedProducts product={product} />

</Container>

    </MainLayout>
  );
}

export default ProductDetails;