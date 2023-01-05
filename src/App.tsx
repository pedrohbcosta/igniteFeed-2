import { useState } from 'react'

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { PostProps } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  const [count, setCount] = useState(0)

  interface Posts extends PostProps {
    id: number;
  }

  const posts: Posts[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/pedrohbcosta.png',
        author: 'Pedro Batista',
        role: 'CMO @yellowberrymkt'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋,'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,'},
        { type: 'link', content: '👉 jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-12-29 12:50:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/jramiresbrito.png',
        author: 'João Ramires',
        role: 'CTO @yellowberrymkt'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋,'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,'},
        { type: 'link', content: '👉 jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-12-30 14:50:00'),
    },
  ]

  return (
    <div>
      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      
      </div>
      
    </div>
    )
}
