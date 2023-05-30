import { BounceLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div style={{ display: 'grid', placeContent: 'center', height: '60vh' }}>
      <BounceLoader color="var(--colors-text)" />
    </div>
  )
}

export default Spinner
