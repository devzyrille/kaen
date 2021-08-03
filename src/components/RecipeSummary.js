import React, { useEffect } from 'react'

const RecipeSummary = (recipe) => {
  const { url, label, image, calories, healthLabels } = recipe

  return (
    <>
      <div className='box-border md:box-content bg-yellow-50 hover:bg-yellow-100 p-5 m-5'>
        <h1 className='font-black text-2xl font-sans mb-5'>
          {label} {new Date().getTime().toString()}
        </h1>
        <div className='h-64 grid grid-cols-3 gap-4'>
          <div>
            <img src={image} className='' width='250' className='rounded-md' />
          </div>
          <div>calories {parseInt(calories)}</div>
          <div>
            <ul>
              {healthLabels.map((healthLabel, index) => {
                return (
                  <span
                    key={index}
                    class='inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'
                  >
                    {healthLabel}
                  </span>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeSummary
