import { useEffect, useState } from 'react'
import { getPosts, nextPagePost } from '../service'
import PropTypes from 'prop-types'
import { useQuery } from '@tanstack/react-query'

export const Posts = ({ handlePostId }) => {

  const [page, setPage] = useState(1)
  
  const { data: posts, error, isLoading, isFetching, isPreviousData } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => nextPagePost(page),
    keepPreviousData: true
    
  })

  // const [posts, setPosts] = useState(null)
  // const [error, setError] = useState(false)
  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   getPosts().then((data) => {
  //     setLoading(true)
  //     setPosts(data)
  //   }).catch(() => {
  //     setError(true)
  //     setPosts(null)
  //   }).finally(() => {
  //     setLoading(false)
  //   })
  // }, [])


  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {/* {isFetching && <p>Updating...</p>} */}
      <ul>
        {posts && posts.map((post) => (
          <li onClick={() => handlePostId(post.id)} key={post.id}>{post.title}</li>
          ))}
      </ul>

      <button
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 1}
      >
        Prev Page
      </button>

      <button
        onClick={() => {
          if (!isPreviousData && posts?.length) {
            setPage((old) => old + 1)
          }
        }}

        disabled={isPreviousData || !posts?.length}
      >
        Next Page
      </button>
    </div>
  )
}

Posts.propTypes = {
  handlePostId: PropTypes.func.isRequired
}
