"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useI18n } from "@/components/LanguageProvider";

export default function HomeSearch() { const router = useRouter(); const { d } = useI18n(); const [query, setQuery] = useState(""); function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); router.push(`/items?query=${encodeURIComponent(query)}`); } return <form className="search-bar" onSubmit={submit}><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={d.home.searchPlaceholder} /><button className="primary" type="submit">{d.home.search}</button></form>; }