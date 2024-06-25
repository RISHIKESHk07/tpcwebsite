import TeamContainer from '../_UIcomponents/TeamContainer'

const page = () => {
  return (
    <div className='flex flex-col gap-4'>
      <TeamContainer title={'Web DEV'} />
      <TeamContainer modalTitle={'Awsome!'} title={'CP'} />
      <TeamContainer />
    </div>
  )
}

export default page