import React, { useMemo, useState } from 'react'
import { useCart } from '../context/CartContext'

const Home = () => {
  const {products, addToCart,removeFromCart} = useCart()
  const [searchQuery,setSearchQuery] = useState("")
  const [brandFilter,setBrandFilter] = useState("ALL")
  const [priceRange,setPriceRange] = useState("ALL")
  const [inStock,setInStock] = useState(false)

  //get unique brans for filtering
  const brands = ["ALL", ...new Set(products.map((product)=> product.brand))]

  const filteredProducts = useMemo(()=>{
    return products.filter((product)=>{
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesBrand = brandFilter === "ALL" || product.brand === brandFilter;
      const matchesPrice = 
        priceRange === "ALL" ||
        (priceRange === "<500" && product.price < 500) ||
        (priceRange === "500-1000" && product.price >= 500 && product.price < 1000) ||
        (priceRange === ">1000" && product.price >= 1000)
        const matchesStock = inStock? product.stock > 0 : true;
      return matchesSearch && matchesBrand && matchesPrice && matchesStock
    })
  },[products,searchQuery,brandFilter,priceRange,inStock])
  return (
    <div className='p-6 bg-gray-100 relative top-24'>
      <div className='mb-6 flex flex-wrap gap-4 items-center justify-center'>
        {/* search filter */}
        <input className='px-3 py-2 border rounded-md' placeholder='search products...' type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}  />
        {/* {Brand Filter} */}
        <select value={brandFilter} onChange={(e)=>setBrandFilter(e.target.value)} name="" id="">{brands.map((brand)=>(
          <option value={brand} key={brand}>{brand}</option>
        ))}</select>
        {/* price range filter */}
        <select name="" id="" value={priceRange} onChange={(e)=>setPriceRange(e.target.value)}>
          <option value="ALL">ALL</option>
          <option value="<500">Less Than rs.500</option>
          <option value="500-1000">rs.500 - rs.1000</option>
          <option value=">1000">More Than rs.1000</option>
        </select>
        <label >
          <input type="checkbox" value={inStock} onChange={()=>setInStock(!inStock)} />
          <span>In Stock Only</span>
        </label>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        {filteredProducts.length === 0 ? (
          <p className='mt-4'>No products found.</p>
        ):(
          filteredProducts.map((product)=> (
            <div className='p-6 shadow-xl rounded-lg bg-gray-50' key={product.id}>
              <img className='w-full h-40 object-cover bg-white shadow-md rounded-sm' src={product.thumbnail} alt="" />
              <h2 className='product-design'>{product.title}</h2>
              <p className='product-design'>Brand : {product.brand}</p>
              <p className='product-design'>Price : rs.{product.price}</p>
              <p className='product-design'>Stock : {product.stock}</p>
              <p className='product-design'>Rating : ⭐{product.rating}</p>
            <div className='flex justify-center gap-3 mt-3'>
                <button className='px-3 py-1 shadow-md text-black text-2xl border border-gray-600 pb-2 rounded-lg trasition duration-500 hover:translate-y-2' onClick={()=>addToCart(product)}>+</button>
                <button className='px-4 py-1 shadow-md text-black text-2xl border border-gray-600 pb-2 rounded-lg trasition duration-500 hover:translate-y-2' onClick={()=>removeFromCart(product.id)}>-</button>
            </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Home