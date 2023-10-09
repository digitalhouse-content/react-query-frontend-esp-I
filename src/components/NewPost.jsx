import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { createNewPost } from '../service'

export const NewPost = () => {

  const [newPost, setNewPost] = useState({
    title: '',
    body: ' '
  })

  const mutation = useMutation((newPost) => {
    return createNewPost(newPost)
  })

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Nuevo Post</h1>
      {mutation.isLoading && <p>Creando Post...</p>}
      <form>
        <input type="text" name='title' value={newPost.title} onChange={handleChange} placeholder='Title' />
        <input type="text" name='body' value={newPost.body} onChange={handleChange} placeholder='Body' />
        <button onClick={() => mutation.mutate(newPost)} type='submit'>Crear Post</button>
      </form>
    </div>
  )
}
