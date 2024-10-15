import React from 'react'

import { getPosts } from '@/lib/db-utilites';
import NewSearchComp from './NewSearchComp';


const NewBlogSearchList = async () => {
    const posts = await getPosts();

    const blog = posts.map((post) => ({
        id: post.id,
        title: post.title,
		href: `/blogs/${post.slug}`,
    }))

  return (
      <div>
      {/* <NewBlogSearchComponent blog={blog} /> */}
      <NewSearchComp blog={ blog } />
    </div>
  )
}

export default NewBlogSearchList