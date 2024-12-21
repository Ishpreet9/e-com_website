import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const [isVisible, setIsVisible] = useState(false);
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]); //Holds the list of products after applying filters
  const [category, setCategory] = useState([]); //Stores selected categories, only categories not products
  const [subCategory, setSubcategory] = useState([]); // sotres selected sub categories
  const [sortType, setSortType] = useState('relevant');

  //category will have the elements from previous array if they are not equal to the current element 
  const toggleCategory = (e) => {

    //if value already exist then remove it in case of toggle 
    if (category.includes(e.target.value)) //checks if the value from event is already present in category array, if true then the value is already in the category array
    {
      // If the condition is true, the function calls setCategory to update the category state and a new array is created using .filter method. prev represent current state of the category array 
      setCategory(prev => prev.filter(item => item !== e.target.value)) //item => item!==e.target.value creates a new array excluding the element equal to e.target.value. excluding because it is toggle, so it will remove it 
    }
    else //if value does not exist
    {
      //add the value to the category array
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubcategory(prev => prev.filter(item => item != e.target.value))
    }
    else {
      setSubcategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice(); //create a copy of the products to avoid modifying the original products

    //filter by search 
    if (showSearch && search) //if showSearch is true and there is some string in search
    {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    //filter by category
    if (category.length > 0) //check if category has atleast some product
    {
      productsCopy = productsCopy.filter(item => category.includes(item.category)) //include only the products whose category matches any of the selected categories
    }

    //filter by subCategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    //save categorized products to filterProducts array
    setFilterProducts(productsCopy);
  }

  //sorting by price or relevance
  const sortProduct = () => {

    // creating a copy of filterProducts
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(filterProductsCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(filterProductsCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();  //If no specific sorting type is selected, the products are reset by reapplying the filter
        break;
    }

  }

  useEffect(() => {
    setIsVisible(true);
  }, [])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className={`transition-opacity ease-in duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className='text-3xl font-semibold mt-10'>
        <Title text1={'ALL'} text2={'COLLECTIONS'} />
      </div>
      <div className='flex flex-row gap-10 pt-6'>
        {/* product sort */}
        <div className='flex justify-between text-base sm:text-2xl mb-4 max-h-14'>
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-600 border-opacity-75 hover:border-yellow-500 hover:border-opacity-75 hover:cursor-pointer outline-none text-lg px-1 py-3 text-white bg-black bg-opacity-25'>
            <option className='bg-black text-gray-300' value="relevant">Sort By: Relevant</option>
            <option className='bg-black text-gray-300' value="low-high">Sort By: Low to High</option>
            <option className='bg-black text-gray-300' value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* filter options */}
        <div className='w-56'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-3xl font-semibold flex items-center cursor-pointer text-gray-200'>FILTERS
            <img src={assets.back_icon} alt="" className={`h-3 mt-1 ${showFilter ? '-rotate-90' : 'rotate-180'} filter invert brightness-0 mx-4`} />
          </p>
          <div className={`sm:flex sm:justify-start sm:gap-8 mb-6 transition-all duration-500 ease-in-out ${showFilter ? 'opacity-100' : 'opacity-0'}`}>
            {/* category filter */}
            <div className={`border-2 border-gray-400 sm:min-w-56 pl-5 pr-1 py-3 mt-5 ${showFilter ? '' : 'hidden'}`}>
              <p className='mb-3 text-sm font-medium text-yellow-500 text-opacity-75'>CATEGORIES</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2 text-gray-300'>
                  <input type="checkbox" className='w-3' value={'Laptops'} onChange={toggleCategory} /> Laptops
                </p>
                <p className='flex gap-2 text-gray-300'>
                  <input type="checkbox" className='w-3' value={'Mobile Phones'} onChange={toggleCategory} /> Mobile Phones
                </p>
              </div>
            </div>
            {/* sub-category filter */}
            <div className={`border-2 border-gray-400 sm:min-w-56 pl-5 pr-1 py-3 mt-5 ${showFilter ? '' : 'hidden'}`}>
              <p className='mb-3 text-sm font-medium text-yellow-500 text-opacity-75'>TYPE</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2 text-gray-300'>
                  <input type="checkbox" className='w-3' value={'Performance Oriented'} onChange={toggleSubCategory} /> Performance Oriented
                </p>
                <p className='flex gap-2 text-gray-300'>
                  <input type="checkbox" className='w-3' value={'Budget Friendly'} onChange={toggleSubCategory} /> Budget Friendly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* map products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))
        }
      </div>
    </div>
  )
}

export default Collection

// Here’s a concise explanation of the logic:

// ---

// ### **1. Initial Setup**
// - **States**:
//   - `category` and `subCategory` store selected categories and subcategories.
//   - `filterProducts` holds the filtered list of products.
//   - `products` is retrieved from `ShopContext`.

// ---

// ### **2. Toggling Categories and Subcategories**
// #### **`toggleCategory`**:
// - If the clicked value exists in `category`, remove it using `.filter`.
// - Otherwise, add it using `setCategory(prev => [...prev, e.target.value])`.

// #### **`toggleSubCategory`**:
// - Works the same way as `toggleCategory` but for `subCategory`.

// ---

// ### **3. Filtering Logic**
// #### **`applyFilter`**:
// 1. Copy `products`:
//    ```javascript
//    let productsCopy = products.slice();
//    ```

// 2. Filter by `category`:
//    ```javascript
//    if (category.length > 0) {
//      productsCopy = productsCopy.filter(item => category.includes(item.category));
//    }
//    ```

// 3. Filter by `subCategory`:
//    ```javascript
//    if (subCategory.length > 0) {
//      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
//    }
//    ```

// 4. Update `filterProducts`:
//    ```javascript
//    setFilterProducts(productsCopy);
//    ```

// ---

// This approach dynamically filters the product list based on the selected categories and subcategories.
