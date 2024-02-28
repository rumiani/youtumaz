import React from 'react'

export default function page({params}:{params:{productId:string, review:string}}) {  
  return (
    <div>Product {params.productId}, review {params.review}</div>
  )
}
