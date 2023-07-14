import Link from "next/link";
import { useRouter } from 'next/router'

export default function Comment() {
    const router = useRouter()

    const todoId = router.query.todoId

    const commentId = router.query.commentId

    return (
        <>
          <Link href={`todos/${todoId}`}>
            <p>Voltar</p>
          </Link>
          <h1>Exibindo comentário número: {commentId}</h1>
          <p>Do Todo: {todoId}</p>
        </>
    )
}