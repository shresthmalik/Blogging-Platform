import React from 'react'

const CommentsList = ({comments}) => {
    if (comments.length === 0) return <h3 className='text-2xl font-semibold mt-5'>No comments yet</h3>
  return (
    <>
      <h3 className='text-2xl font-semibold mt-5'>Comments:</h3>
        {comments.map((comment, key) => ( 
            <div>
                <h4 className='text-xl font-semibold mt-5'>{comment.username}</h4>
                <p className='mt-1 mb-4'>{comment.text}</p>
            </div>  
        ))}
    </>
  )
}

export default CommentsList
