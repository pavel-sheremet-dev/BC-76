"use client";
import { useRouter } from "next/navigation";

import BackButton from "@/app/products/[productId]/BackButton";
import Modal from "@/components/Modal/Modal";
import { Product } from "@/types/product";

const ProductPreviewClient = ({ product }: { product: Product }) => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
    // router.push('/products/filter/all')
  };

  return (
    <Modal onClose={closeModal}>
      <div>
        <h3>Product Preview</h3>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <BackButton />
      </div>
    </Modal>
  );
};

export default ProductPreviewClient;
