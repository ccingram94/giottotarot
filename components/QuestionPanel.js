import { signIn, signOut, useSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'
import { render } from 'react-dom';
import Button from '@material-ui/core/Button'

const prisma = new PrismaClient();

const getServerSideProps = async({ req }) => {
  const questions = await prisma.questions.findMany({
    where: {
      author: { id: userId },
    },
  })
  console.log(questions)
  return { props: { questions }}
}


export default function QuestionPanel({ questions }) {
    const [session, loading] = useSession();
    if (session) {
        return (
          <div>
            <Button onClick={signOut}>Sign Out</Button>
          </div>
        );
    } else { 
        return (
          <div>
            <p>gotta log in for me to fetch your readings buddy</p>
            <p>please log in</p>
          </div>
        )}
}