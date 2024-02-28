import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <div>products</div>
    <ul>
        <li>
            <Link href='/products/1'>product 1 </Link>
            <Link href='/products/2'>product 2 </Link>
            <Link href='/products/3'>product 3 </Link>
            <Link href='/products/4'>product 4 </Link>

        </li>
    </ul>
    </>
  )
}
