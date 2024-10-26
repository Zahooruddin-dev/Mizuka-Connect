
function PostList({ posts }) {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <p>{post.content}</p>
                    <small>Posted by User ID: {post.userId}</small>
                </div>
            ))}
        </div>
    );
}

export default PostList;
