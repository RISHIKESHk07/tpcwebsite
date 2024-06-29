import { teamsData } from '@/data'
import TeamContainer from '../_UIcomponents/TeamContainer'

const page = () => {
  return (
    <main className='min-h-screen w-full py-6'>
      <div className='flex-center flex-col gap-2 mb-4'>
        <h1 className='text-4xl md:text-6xl'><span className='gradient-text'>We</span> are everywhere</h1>
        <p className='max-sm:text-sm break-words'>{'<p>From web to app, AI to ML, Blockchain to DevOps</p>'}</p>
      </div>
      <div className='flex flex-col gap-4'>
        {teamsData.map((team, index) => (
          <TeamContainer key={index} title={team.teamName} />
        ))}
      </div>
    </main>
  )
}

export default page