import TeamContainer from '../_UIcomponents/TeamContainer'

const page = () => {
  return (
    <div className='flex flex-col gap-4'>
      <TeamContainer title={'Office Bearers'} />
      <TeamContainer title={'Developers'} />
      <TeamContainer title={'Competitive Programmers'} />
      <TeamContainer title={'Designers'} />
    </div>
  )
}

export default page