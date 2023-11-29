/* eslint-disable react/prop-types */
import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?auto=format&fit=crop&q=80&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

      <div className={styles.profile}>
        <Avatar  img="https://avatars.githubusercontent.com/u/76964434?v=4" />

        <strong>Matheus Machado</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edite seu perfil
        </a>
      </footer>
    </aside>
  );
}