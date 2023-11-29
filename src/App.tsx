import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/76964434?v=4',
      name: 'Matheus da Silva Machado',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto        que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2023-11-23 20:16:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/76964434?v=4',
      name: 'isabele Machado',
      role: 'Psicóloga',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Oie gente 👋'
      },
      {
        type: 'paragraph',
        content: 'Conclui mais um curso sobre psicologia organizacional, confere la 🚀'
      },
      {
        type: 'link',
        content: 'jane.psico/org'
      },
    ],
    publishedAt: new Date('2023-11-22 21:34:00'),
  }
];

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          }) }
        </main>
      </div>
    </>
  )
}