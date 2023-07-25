export default function Greeter({ person="Everyone", from="Anonymous" }) {
  return (
    <>
      <h1>Hello {person}!</h1>
      <h2>From: {from}</h2>
    </>
  ) ;
}