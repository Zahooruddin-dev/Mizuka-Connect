import  { useState } from 'react';

function PostForm({ userId, onPostCreate }) {
    const [postContent, setPostContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postContent) {
            onPostCreate({ userId, content: postContent, id: Date.now() }); // Use an actual ID generation in production
            setPostContent(''); // Clear input after submission
        }
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <textarea
                placeholder="What's on your mind?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                required
            />
            <button type="submit">Post</button>
        </form>
    );
}

export default PostForm;
