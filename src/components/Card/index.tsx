import { CardContainer } from './styles'

interface CardProps {
  title: string
  body: string
}

export function Card({ title, body }: CardProps) {
  return (
    <CardContainer>
      <div>
        <h3>{title}</h3>
        <span>Há 1 dia</span>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </CardContainer>
  )
}
