import React from 'react';

const productTypes = [
  "ข้าวหอมมะลิ",
  "ข้าวเหนียว",
  "ข้าวขาว",
  "ข้าวเพื่อสุขภาพ",
  "ผลิตภัณฑ์แปรรูป",
  "เครื่องดื่ม",
  "ขนมขบเคี้ยว",
];

const FilterSidebar = ({ filter, setFilters, onClose }) => {

  // Handler for checkbox changes (Product Types)
  const handleTagChange = (type) => {
    setFilters(prev => {
      const currentTags = prev.types;
      if (currentTags.includes(type)) {
        // If tag is already selected, remove it
        return { ...prev, types: currentTags.filter(tag => tag !== type) };
      } else {
        // If tag is not selected, add it
        return { ...prev, types: [...currentTags, type] };
      }
    });
  };

  // Handler for radio button changes (Rating)
  const handleRatingChange = (ratingValue) => {
    setFilters(prev => ({ ...prev, rating: ratingValue }));
  };


  return (
    <div className="p-6">
      {/* Header and Close Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">ตัวกรอง</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M15.78 14.36a1 1 0 01-1.42 1.42L12 13.41l-2.36 2.37a1 1 0 01-1.42-1.42L10.59 12 8.23 9.64a1 1 0 011.42-1.42L12 10.59l2.36-2.37a1 1 0 011.42 1.42L13.41 12l2.37 2.36z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Filter Section: Product Types */}
      <div className="pb-4 mb-4 border-b"> {/* Added border-b and pb-4 for separation */}
        <h3 className="mb-2 font-semibold text-md">ประเภทสินค้า</h3>
        {productTypes.map((type) => (
          <div key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`filter-type-${type}`} // Use unique IDs
              checked={filter.types.includes(type)}
              onChange={() => handleTagChange(type)}
              className="w-4 h-4 mr-2 text-black border-gray-300 rounded focus:ring-black" // Styled checkbox
            />
            <label htmlFor={`filter-type-${type}`} className="flex-1 text-sm text-gray-700 cursor-pointer">
              {type}
            </label>
            {/* You can add counts here like in the screenshot if you have the data */}
            {/* <span className="text-xs text-gray-500">(XX)</span> */}
          </div>
        ))}
      </div>

      {/* Filter Section: Region (Optional - you can remove this if only using the sidebar) */}
      <div className="pb-4 mb-4 border-b"> {/* Added border-b and pb-4 */}
        <h3 className="mb-2 font-semibold text-md">ภูมิภาค</h3>
        <select
          value={filter.region}
          onChange={(e) => setFilters((prev) => ({ ...prev, region: e.target.value }))}
          className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring focus:border-black"
        >
          <option value="ทั้งหมด">ทั้งหมด</option>
          <option value="ภาคกลาง">ภาคกลาง</option>
          <option value="ภาคเหนือ">ภาคเหนือ</option>
          <option value="ภาคอีสาน">ภาคอีสาน</option>
          <option value="ภาคใต้">ภาคใต้</option>
        </select>
      </div>


      {/* Filter Section: Price */}
      <div className="pb-4 mb-4 border-b"> {/* Added border-b and pb-4 */}
        <h3 className="mb-2 font-semibold text-md">ราคา</h3>
        {/* Add your price range input here */}
        <div className="flex items-center"> {/* Use flex for layout */}
          <input
            type="number"
            value={filter.price[0]}
            onChange={(e) => setFilters((prev) => ({ ...prev, price: [parseInt(e.target.value), prev.price[1]] }))}
            className="w-1/2 px-2 py-1 mr-2 text-sm border rounded focus:outline-none focus:ring focus:border-black"
            placeholder="Min" // Added placeholder
          />
          <span className="text-gray-500">-</span> {/* Separator */}
          <input
            type="number"
            value={filter.price[1]}
            onChange={(e) => setFilters((prev) => ({ ...prev, price: [prev.price[0], parseInt(e.target.value)] }))}
            className="w-1/2 px-2 py-1 ml-2 text-sm border rounded focus:outline-none focus:ring focus:border-black"
            placeholder="Max" // Added placeholder
          />
        </div>
        {/* You might want to add a price range slider here for better UX */}
      </div>

      {/* Filter Section: Customer Review */}
      <div className="mb-4">
        <h3 className="mb-2 font-semibold text-md">รีวิวจากลูกค้า</h3>
        <div className="flex flex-col"> {/* Use flex-col for radio buttons */}
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              name="rating" // Same name for radio group
              value="any"
              checked={filter.rating === 'any'}
              onChange={() => handleRatingChange('any')}
              className="w-4 h-4 text-black form-radio focus:ring-black" // Styled radio button
            />
            <span className="ml-2 text-sm text-gray-700">Any rating</span>
            {/* Add count here if available */}
            {/* <span className="ml-auto text-xs text-gray-500">(XXX)</span> */}
          </label>
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              name="rating"
              value="5" // Value for 5 stars and up
              checked={filter.rating === '5'}
              onChange={() => handleRatingChange('5')}
              className="w-4 h-4 text-black form-radio focus:ring-black"
            />
            <span className="ml-2 text-sm text-gray-700">★★★★★ & Up</span>
            {/* Add count here if available */}
            {/* <span className="ml-auto text-xs text-gray-500">(XXX)</span> */}
          </label>
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              name="rating"
              value="4" // Value for 4 stars and up
              checked={filter.rating === '4'}
              onChange={() => handleRatingChange('4')}
              className="w-4 h-4 text-black form-radio focus:ring-black"
            />
            <span className="ml-2 text-sm text-gray-700">★★★★☆ & Up</span>
            {/* Add count here if available */}
            {/* <span className="ml-auto text-xs text-gray-500">(XXX)</span> */}
          </label>
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              name="rating"
              value="3" // Value for 3 stars and up
              checked={filter.rating === '3'}
              onChange={() => handleRatingChange('3')}
              className="w-4 h-4 text-black form-radio focus:ring-black"
            />
            <span className="ml-2 text-sm text-gray-700">★★★☆☆ & Up</span>
            {/* Add count here if available */}
            {/* <span className="ml-auto text-xs text-gray-500">(XXX)</span> */}
          </label>
          {/* Add more rating options if needed */}
        </div>
      </div>


      {/* Apply Filters Button */}
      <button
        className="w-full py-2 mt-6 text-white transition-colors duration-200 bg-black rounded hover:bg-gray-800"
        onClick={onClose} // This button typically just closes the sidebar after applying filters via state changes
      >
        เลือกตัวกรอง
      </button>
    </div>
  );
};

export default FilterSidebar;