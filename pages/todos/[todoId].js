import Link from "next/link";

export async function getStaticProps(context) {

  const {params} = context
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
  )
  const todo = await data.json()

  return {
    props: { todo },
  }
}

export async function getStaticPaths() {

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()
  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      }
    }
  })

  return { paths, fallback: false }
}

export default function Todo({ todo }) {
    return (
        <>
          <Link href="/todos">
            <p>Voltar</p>
          </Link>
          <h1>Exibindo o todo: {todo.id}</h1>
          <h3>Texto: {todo.title}</h3>
          <p>
            Comentário: bla bla bla...
            <Link href={`/todos/${todo.id}/comments/1`}>
                <p>Detalhes</p>
            </Link>
          </p>
          <p>
            Comentário: ble ble ble...
            <Link href={`/todos/${todo.id}/comments/2`}>
                <p>Detalhes</p>
            </Link>
          </p>
          <p>
            Comentário: bli bli bli...
            <Link href={`/todos/${todo.id}/comments/3`}>
                <p>Detalhes</p>
            </Link>
          </p>
        </>
    )
}
