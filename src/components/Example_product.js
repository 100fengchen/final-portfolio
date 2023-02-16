import React from 'react'

export default function example_product(props) {
  return (
    <div class="example_product" style={{
        'display': props.IsItemClicked ? 'block' : 'none' 
        }}>
        Hellow world Plase shows up!!!!!
    </div>
  )
}
