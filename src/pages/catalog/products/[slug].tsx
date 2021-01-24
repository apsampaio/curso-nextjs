import { useRouter } from "next/router";
import { useState } from "react";
import dynamic from "next/dynamic";

const AddToCartModal = dynamic(() => import("@/components/AddToCartModal"), {
  loading: () => <p>Loading...</p>,
});
export default function Product() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {
    setModalVisible(true);
  };

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <button onClick={handleAddToCart}>Add To Cart</button>

      {modalVisible && <AddToCartModal />}
    </div>
  );
}
