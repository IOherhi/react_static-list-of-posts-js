import './PostInfo.scss';
import { UserInfo } from '../UserInfo';

export function PostInfo({ post, user }) {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {user ? <UserInfo key={user.id} user={user} /> : null}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      <b data-cy="NoCommentsMessage">No comments yet</b>
    </div>
  );
}
