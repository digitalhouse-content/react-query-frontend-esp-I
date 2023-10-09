import { useState } from 'react'
import './App.css'
import { Posts } from './components/Posts'
import { Post } from './components/Post'
import { NewPost } from './components/NewPost'

function App() {

  const [postId, setPostId] = useState(-1)
  
  const handlePostId = (id) => {
    setPostId(id)
  }

  return (
    <main>
      <NewPost />
      {
        postId === -1 ? <Posts handlePostId={handlePostId} /> : (
          <>
            <button onClick={() => setPostId(-1)}>Back</button>
            <Post id={postId} />
          </>
          ) 
      }
    </main>
  )
}

export default App
