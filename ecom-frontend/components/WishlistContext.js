import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext({});

export function WishlistContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [wishProducts, setWishProducts] = useState([]);

  useEffect(() => {
    if (wishProducts?.length > 0) {
      ls?.setItem("wishlist", JSON.stringify(wishProducts));
    }
  }, [wishProducts]);

  useEffect(() => {
    if (ls && ls.getItem("wishlist")) {
      setWishProducts(JSON.parse(ls.getItem("wishlist")));
    }
  }, []);

  function addWish(productId) {
    setWishProducts((prev) => [...prev, productId]);
  }

  function removeWish(productId) {
    setWishProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  function clearWishlist() {
    setWishProducts([]);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishProducts,
        setWishProducts,
        addWish,
        removeWish,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
