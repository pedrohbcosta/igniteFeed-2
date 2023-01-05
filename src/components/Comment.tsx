import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { ThumbsUp, Trash } from 'phosphor-react'

import { useState } from 'react';

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export interface CommentProps {
  content: string;
  commentTime: Date;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, commentTime, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  const commentDateFormatted = format(commentTime, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const commentDateRelativeToNow = formatDistanceToNow(commentTime, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount(likeCount + 1);
  }

  return(
    <div className={ styles.comment }>
      <Avatar hasBorder={false} 
        src="https://github.com/pedrohbcosta.png"
        alt=""
      />

      <div className={ styles.commentBox }>
        <div className={ styles.commentContent }>
          <header>
            <div className={ styles.authorAndTime }>
              <strong>Pedro Batista</strong>
              <time 
                title={commentDateFormatted} 
                dateTime={commentTime.toISOString()}>
                {commentDateRelativeToNow}
              </time>
            </div>

            <button 
              onClick={handleDeleteComment} 
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{ content }</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}