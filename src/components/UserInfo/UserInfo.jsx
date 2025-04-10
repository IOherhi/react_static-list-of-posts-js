import './UserInfo.scss';

export function UserInfo({ user }) {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
}
