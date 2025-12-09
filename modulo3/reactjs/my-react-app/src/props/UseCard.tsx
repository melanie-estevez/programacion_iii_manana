
export default function UserCard({ user }) {
  return <div>{user.name} - {user.age} años - Direccion: {user.direccion} - Telefono: {user.telefono} </div>;
}
