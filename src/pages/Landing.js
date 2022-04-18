import { useNavigate } from 'react-router-dom'
const Landing = () => {
  let navigate = useNavigate()

  return (
    <div>
        <h1>This is the Landing Page</h1>
      <section>
        <button onClick={() => navigate('/signin')}>
          Continue by logging in or creating a new account.
        </button>
      </section>
    </div>
  )
}

export default Landing