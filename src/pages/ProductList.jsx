import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../containers/ProductCard";
// import { Container, Grid, Typography } from '@mui/material';
import { Backdrop } from "@mui/material";
import { Funnel, MapPin, Search } from "lucide-react";
import FilterSidebar from "../components/FilterSidebar";
import { CartContext } from "../context/CartContext";
import mockReviews from "../data/mockReviews";
import mockProducts from "../data/products";

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(10);


  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const { filters, setFilters, searchTerm, setSearchTerm, resetFilter } = useContext(CartContext);

  // Function to apply filters
  const applyFilters = (product) => {
    // --- 1. Filter by Search Term ---
    const matchesSearchTerm =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    // --- 2. Filter by Region ---
    const matchesRegion =
      filters.region === "ทั้งหมด" || product.region === filters.region;

    // --- 3. Filter by Price ---
    const productPrice = product.variants[0].price;
    const matchesPrice =
      productPrice >= filters.price[0] && productPrice <= filters.price[1];

    // --- 4. Filter by product type ---
    const matchesTypes =
      filters.types.length === 0 ||
      (product.type && filters.types.includes(product.type));

    // --- 5. Filter by stars ---
    let matchesRating = false; // Default to false

    if (filters.rating === "any") {
      matchesRating = true; // If filter is 'any', always match
    } else {
      // Find reviews for the current product
      const productReviews = mockReviews.filter(
        (review) => review.product_id === product.product_id
      );

      if (productReviews.length > 0) {
        // Calculate the average rating
        const totalStars = productReviews.reduce(
          (sum, review) => sum + review.stars,
          0
        );
        const averageRating = totalStars / productReviews.length;

        // Get the minimum rating required by the filter
        const requiredRating = parseFloat(filters.rating); // e.g., "4" becomes 4.0

        // Check if the product's average rating meets the requirement
        if (!isNaN(requiredRating) && averageRating >= requiredRating) {
          matchesRating = true;
        }
      }
      // If a product has no reviews, it will only match if filters.rating is 'any'
    }

    // Combine ALL filter conditions
    return (
      matchesSearchTerm &&
      matchesRegion &&
      matchesPrice &&
      matchesTypes &&
      matchesRating
    );
  };

  const filteredProducts = mockProducts.filter(applyFilters);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5); // show 5 more on click
  };

  // Function to close the filter drawer
  const closeFilterDrawer = () => {
    setShowFilterDrawer(false);
  };

  useEffect(() => {
    return () => {
      resetFilter();
    }
  }, [resetFilter]);

  return (
    <div className="px-4 py-6 mx-auto max-w-7xl">
      <div className="flex w-full gap-4 mb-6 flex-col-1 md:flex-row md:items-center md:justify-end">
        {/* Left Section: Region Selector */}
        <div className="flex items-center gap-2 md:mr-auto">
          <MapPin />
          <label htmlFor="region" className="text-sm font-medium">
            ภูมิภาค
          </label>
          {/* This region selector is now redundant as it's also in the sidebar.
              If I want to remove this one and only use the sidebar one,
              or keep them both and ensure they sync state.
              For now, let's keep it as it was in your original code but note the redundancy. */}
          <select
            id="region"
            value={filters.region}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, region: e.target.value }))
            }
            className="px-2 py-1 text-sm border rounded cursor-pointer"
          >
            <option value="ทั้งหมด">ทั้งหมด</option>
            <option value="ภาคกลาง">ภาคกลาง</option>
            <option value="ภาคเหนือ">ภาคเหนือ</option>
            <option value="ภาคอีสาน">ภาคอีสาน</option>
            <option value="ภาคใต้">ภาคใต้</option>
          </select>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="flex items-center w-full gap-2 px-3 py-2 border rounded md:w-1/2">
          <span className="text-gray-500">
            <Search />
          </span>
          <input
            type="text"
            placeholder="ค้นหาสินค้า..."
            className="flex-1 text-sm outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Right Section: Filter Button */}
        <div>
          <button
            className="flex items-center gap-1 p-2 text-white bg-black rounded cursor-pointer"
            onClick={() => setShowFilterDrawer(true)}
          >
            <Funnel />
          </button>
        </div>
      </div>

      {/* Filter Drawer Overlay */}
      {showFilterDrawer && (
        <Backdrop
          open={showFilterDrawer}
          onClick={closeFilterDrawer}
          sx={{ zIndex: 49 }}
        ></Backdrop>
      )}

      {/* Filter Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-3/4 md:w-1/3 lg:w-1/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${showFilterDrawer ? "translate-x-0" : "translate-x-full"}`}
      >
        <FilterSidebar
          filter={filters}
          setFilters={setFilters}
          onClose={closeFilterDrawer} // Pass the close function
        />
      </div>

      <h2 className="text-2xl font-extrabold mb-7">สินค้าทั้งหมด</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-0 gap-y-7">
        {visibleProducts.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="px-4 py-2 text-sm bg-gray-100 rounded cursor-pointer hover:bg-gray-300"
          >
            ดูเพิ่มเติม ({filteredProducts.length - visibleCount})
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
