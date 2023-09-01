"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react';
import './globals.css'
// export const metadata = {
//   title: 'WEB tutorial',
//   description: 'Generated by egoing',
// }
export default function RootLayout({ children }) {
  const [topics, setTopics] = useState([]);
  useEffect(() => { 
    fetch("http://localhost:9999/topics")
    .then(res=> res.json())
    .then(result => {
      setTopics(result);

    })
  })
  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((topic) => {
            return <li key = {topic.id}><Link href = {`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <ul>
          <li><Link href="/create">create</Link></li>
          <li><Link href="/update/id">update</Link></li>
          <li><button>delete</button></li>
        </ul>
      </body>
    </html>
  )
}