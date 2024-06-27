import TeamContainer from '../_UIcomponents/TeamContainer'

const page = () => {
  return (
    <main className='flex flex-col gap-4 px-4 min-h-screen w-full'>
      <TeamContainer title={'Office Bearers'} />
      <TeamContainer title={'Developers'} />
      <TeamContainer title={'Competitive Programmers'} />
      <TeamContainer title={'Designers'} />
    </main>
  )
}

export default page