import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]); //Holds the list of products after applying filters
  const [category,setCategory] = useState([]); //Stores selected categories, only categories not products
  const [subCategory,setSubcategory] = useState([]); // sotres selected sub categories
  const [sortType,setSortType] = useState('relevant');

  //category will have the elements from previous array if they are not equal to the current element 
  const toggleCategory = (e) => {

    //if value already exist then remove it in case of toggle 
    if(category.includes(e.target.value)) //checks if the value from event is already present in category array, if true then the value is already in the category array
    {
      // If the condition is true, the function calls setCategory to update the category state and a new array is created using .filter method. prev represent current state of the category array 
      setCategory(prev => prev.filter(item => item!==e.target.value)) //item => item!==e.target.value creates a new array excluding the element equal to e.target.value. excluding because it is toggle, so it will remove it 
    }
    else //if value does not exist
    {
      //add the value to the category array
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value))
    {
      setSubcategory(prev=>prev.filter(item=>item!=e.target.value))
    }
    else
    {
      setSubcategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice(); //create a copy of the products to avoid modifying the original products

    //filter by search 
    if(showSearch && search) //if showSearch is true and there is some string in search
    {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    
    //filter by category
    if(category.length>0) //check if category has atleast some product
    {
      productsCopy = productsCopy.filter(item => category.includes(item.category)) //include only the products whose category matches any of the selected categories
    }

    //filter by subCategory
    if(subCategory.length>0)
    {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    //save categorized products to filterProducts array
    setFilterProducts(productsCopy);
  }

  //sorting by price or relevance
  const sortProduct = () => {

    // creating a copy of filterProducts
    let filterProductsCopy = filterProducts.slice();

    switch(sortType)
    {
      case 'low-high':
        setFilterProducts(filterProductsCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(filterProductsCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default: 
        applyFilter();  //If no specific sorting type is selected, the products are reset by reapplying the filter
        break;
    }

  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>
      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer '>FILTERS
          <img src={assets.back_icon} alt="" className={`h-3 mt-1 sm:hidden ${showFilter ? '-rotate-90' : 'rotate-180'}`} />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Laptops'} onChange={toggleCategory} /> Laptops
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Mobile Phones'} onChange={toggleCategory} /> Mobile Phones
            </p>
          </div>
        </div>
         {/* sub-category filter */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Performance Oriented'} onChange={toggleSubCategory} /> Performance Oriented
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Budget Friendly'} onChange={toggleSubCategory} /> Budget Friendly
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-1'>
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>

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
