export default function Spinner() {
  return (
    <div className="text-center mx-auto p-10 spinner-area">
        <div className="spinner-border text-info spinner-init"
          role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
