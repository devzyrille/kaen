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
                return <li key={index}>{healthLabel}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeSummary
