export default function ShowDate(){
  const today = new Date().toLocaleDateString();
  return <p>Tu reserva fue realizada el {today}</p>
}