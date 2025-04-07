import { PostInfo } from '../PostInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map((post, i) => (
      <PostInfo key={post.id} post={post} user={users[i]} />
    ))}

    <CommentList comments={comments} />
  </div>
);
