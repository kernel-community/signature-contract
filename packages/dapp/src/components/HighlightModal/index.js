import Mintable from './Mintable'
import Footer from './Footer'
import { HighlightContext } from '../../contexts/Highlight'
import { useContext } from 'react'
import Share from '../common/Share'
import Modal from '../../layouts/Modal'

const HighlightModal = () => {
  const { state } = useContext(HighlightContext)
  if (!state.modal) return;
  if (state.tx) {
    return <Share />
  } else {
    return (
      <Modal>
        <div className='flex justify-center md:p-8 w-full h-min-content md:w-min my-auto rounded-lg shadow-xl bg-white'>
          <div className='flex flex-col gap-y-8 items-center my-auto'>
            <div className='flex flex-col font-redaction justify-between'>
              <Mintable />
              <Footer />
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default HighlightModal
