import { useNetwork } from 'wagmi'
import etherscan from '../../utils/constants/etherscan'

// TODO: fix this
const arweaveUrl = 'https://arweave.net:443'

const trimAddress = (address) => address.substring(0, 8).concat('...')

const AccountAddress = ({ account, ens }) => {
  const toDisplay = ens || (account ? trimAddress(account) : 'Anonymous')
  const { activeChain: { id } } = useNetwork();
  return (
    account
      ? (
        <a
          href={etherscan.chainIdToUrl(id) + '/' + account}
          target='_blank' rel='noreferrer'
          className='no-underline text-gray-500 hover:text-black'
        >
          {toDisplay}
        </a>
        )
      : (
          { toDisplay }
        )
  )
}

const SignatureList = ({ list }) => {
  return (
    <>
      <div className='flex flex-col gap-y-8 mx-auto text-gray-500 w-full overflow-scroll h-96'>
        {list.map((signature, index) => (
          <div className='mx-auto flex flex-row gap-x-8 justify-between w-full md:w-2/3' key={index}>
            <div className='flex flex-row gap-x-8 w-max flex-shrink-0 items-center justify-left flex-grow'>
              <p className='flex flex-grow'>
                <AccountAddress
                  account={signature.data.account}
                  ens={signature.ens}
                />
              </p>
              <a
                className='text-ellipsis text-gray-300 hover:text-gray-800 hidden md:block  overflow-hidden w-32 grow font-thin no-underline'
                href={arweaveUrl + '/' + signature.id}
                target='_blank'
                rel='noreferrer'
              >
                {signature.id}
              </a>
            </div>
            <div className='justify-right w-28'>
              {signature.date ?? 'pending'}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SignatureList
