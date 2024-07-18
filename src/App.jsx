import React from 'react'
import BlogPostList from './components/BlogPostList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogPostItem from './components/BlogPostItem'
import BlogPostDetails from './components/BlogPostDetails'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogPostList/>}></Route>
        <Route path="/blog-details/:articleId" element={<BlogPostDetails />} />

      </Routes>
      </BrowserRouter>
      {/* <BlogPostList/> */}
    </div>
  )
}

export default App