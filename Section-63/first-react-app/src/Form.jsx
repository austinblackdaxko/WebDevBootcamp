// Section 65 - video 628

function handleFormSubmit(evt) {
  evt.preventDefault();
  console.log('handled form submit')
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}