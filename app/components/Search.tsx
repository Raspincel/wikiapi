'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()        
        setSearch('')
        router.push(`/${search}/`)
    }
  return (
    <form onSubmit={handleSubmit} className="flex justify-center md:justify-between">
        <input 
            type="text"
            value={search}
            onChange={ e => setSearch(e.target.value)}
            className="bg-white p-2 w-60 md:w-80 text-xl rounded-xl"
            placeholder="Search"
        />

        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
        </button>
    </form>
  )
}
