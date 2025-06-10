import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

async function signIn(credenciais) {
  res = await axios.post(
    `${API_URL}:signInWithPassword?key=${API_KEY}`,
    credenciais
  );
}

export { signIn };
