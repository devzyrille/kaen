const RecipeSearch = ({ query, handleQuery, handleSearch }) => {
  return (
    <>
      <div className='py-2 px-6 lg:w-2/5 md:w-3/5 sm:w-full relative flex flex-col justify-center place-self-center m-auto'>
        <svg className='absolute left-10' width='16' height='16'>
          <path
            className='fill-current text-gray-400'
            d='M6.4 1.6a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm-4.525.275a6.4 6.4 0 019.58 8.45l4.31 4.31a.8.8 0 01-1.13 1.13l-4.31-4.31A6.399 6.399 0 010 6.4a6.4 6.4 0 011.875-4.525z'
          />
        </svg>
        <input
          type='text'
          placeholder='Search'
          value={query}
          onChange={handleQuery}
          placeholder='What do you want to cook today?'
          className='border border-yellow-100 rounded p-2 pl-10 placeholder-gray-300 outline-none hover:border-yellow-400 focus:border-yellow-400 focus:bg-yellow-50 focus:bg-opacity-25'
        />
        <div className='w-1/4 absolute top-2 right-3 pr-2'>
          <button
            className='h-10 w-full text-white rounded-lg bg-yellow-500 hover:bg-yellow-600 '
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </>
  )
}

export default RecipeSearch
