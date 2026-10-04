"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeSearch() { const router = useRouter(); const [query, setQuery] = useState(""); function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); router.push(`/items?query=${encodeURIComponent(query)}`); } return <form className="search-bar" onSubmit={submit}><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ค้นหาชื่อสิ่งของ สถานที่ หรือหมวดหมู่" /><button className="primary" type="submit">ค้นหา</button></form>; }