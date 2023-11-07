import { ChallengeTitle, ChallengeButton } from "./styles"

export type Props = {
  title: string
  page: string
}

const ViewChallenge = ({ title, page }: Props) => {
  return (
    <>
      <ChallengeTitle>{title}</ChallengeTitle>
      <ChallengeButton to={page}>Acessar</ChallengeButton>
    </>
  )
}

export default ViewChallenge
