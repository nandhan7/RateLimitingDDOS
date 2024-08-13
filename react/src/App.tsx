import { Turnstile } from '@marsidev/react-turnstile'
import './styles.css'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState<string>("");
  const [otp,setOtp]=useState<string>("");
  const [password,setPassword]=useState<string>("")

  return (
    <div className="form-container">
    <form>
      <label htmlFor="otp">OTP</label>
      <input
        placeholder="OTP"
        id="otp"
        type="text"
        onChange={(e) => setOtp(e.target.value)}
        value={otp}
      />
      <label htmlFor="password">Password</label>
      <input
        placeholder="New password"
        id="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Turnstile 
        onSuccess={(token) => setToken(token)} 
        siteKey='0x4AAAAAAAhJHGpPe9NnG3Ll' 
      />
      <button
        type="button"
        onClick={async () => {
          await axios.post("http://localhost:3000/reset-password", {
            email: "nandanbv50@gmail.com",
            otp: otp,
            newPassword: password,
            token: token,
          });
        }}
      >
        Update password
      </button>
    </form>
  </div>
  )
}

export default App