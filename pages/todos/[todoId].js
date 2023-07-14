import Link from "next/link";
import { useRouter } from 'next/router'

export default function Todo() {

    const router = useRouter()
    
    const todoId = router.query.todoId

    return (
        <>
          <Link href="/">
            <p>Voltar</p>
          </Link>
          <h1>Exibindo o todo: {todoId}</h1>
          <p>
            Comentário: bla bla bla...
            <Link href={`/todos/${todoId}/comments/1`}>
                <p>Detalhes</p>
            </Link>
          </p>
          <p>
            Comentário: ble ble ble...
            <Link href={`/todos/${todoId}/comments/2`}>
                <p>Detalhes</p>
            </Link>
          </p>
          <p>
            Comentário: bli bli bli...
            <Link href={`/todos/${todoId}/comments/3`}>
                <p>Detalhes</p>
            </Link>
          </p>
        </>
    )
}
