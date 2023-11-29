import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  name: string,
  role: string,
  avatarUrl: string,
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content } : PostProps) {

  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const isNewCommentEmpty = newCommentText.length === 0;

  const publishedDateFomatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSufix: true,
  });

  // tipo formevent pois é um evento de formulário
  function handeCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  // por ser disparado pelo input e nao pelo forma deve avisar o ts usando paramentro
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório, preencha-o por favor!");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar img={author.avatarUrl} alt="Avatar usuário" />

            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time 
            title={publishedDateFomatted}
            dateTime={publishedAt.toISOString()}>
              {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {
            content.map(line => {

              if (line.type === 'paragraph') {
                return <p key={line.content}>{line.content}</p>
              } else if (line.type === 'link') {
                return <p key={line.content}><a href="#">{line.content}</a></p>
              }

            })
          }
        </div>

        <form onSubmit={handeCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name="comment"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />

          <footer>
            <button 
              type='submit'
              disabled={isNewCommentEmpty}
            >
                Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment} 
              />
            );
          })}
        </div>

      </article>
    </>
  );
}