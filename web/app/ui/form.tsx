'use client';
import axios from 'axios'
import { useState } from 'react';
const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT
export default function MyForm() {
  const [name, setName] = useState(null)
  async function greet() {
    try {
      const res = await axios.post(`${endpoint}/greet`, { name })
      alert(res.data.message)
    } catch(ex) {
      throw new Error('Failed to fetch data')
    }
  }

  function handleNameChange(e: any) {
    setName(e.target.value)
  }
  return (
  <div className="flex space-x-2">
    <input type="text" name="name" id="name" placeholder="Input your name" className="px-2 border-gray-400 w-64 text-black" onChange={handleNameChange}/>
    <button className="px-10 py-2 bg-gray-400 text-black" onClick={() => greet()}>Greet</button>
  </div>
)
}