import React, { useContext } from 'react'
import ResultBookCard from './ResultBookCard'
import { BookStateContext } from '../context/bookState'


function Results() {
    const {result} = useContext(BookStateContext)
  return (
    <div className='bg-black min-h-screen text-white'>
        <p className='ml-4 py-8 text-2xl'>{result.length} Results found:</p>
        <div className='flex flex-wrap justify-center'>
            {
                result && result.map((book)=> (
                    <ResultBookCard key={book.key} author={book.author_name} bookImg={`${book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://via.placeholder.com/500?text=No+Image+Available"}`} btnChildren={'Add to bookself'} firstPublished={book.first_publish_year} title={book.title} bgcolor={'bg-blue-600'} target={'save'}/>
                ))
                }
        </div>
    </div>
  )
}

export default Results