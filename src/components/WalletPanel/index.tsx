import React from 'react'

import AuctionContainer from 'components/AuctionContainer'
import AuctionHeader from 'components/AuctionHeader'
import AuctionPriceBar from 'containers/AuctionPriceBar'
import AuctionWalletSummary from 'containers/AuctionWalletSummary'
import ButtonCTA from 'components/ButtonCTA'
import TokenPair from 'containers/TokenPair'


const WalletPanel: React.SFC = () => (
  <AuctionContainer auctionDataScreen="details">
    <AuctionHeader backTo="/">
      Confirm Order Details
      </AuctionHeader>
    <TokenPair />
    <AuctionPriceBar header="Price" />
    <AuctionWalletSummary />
    <p>
      When submitting the order and signing with MetaMask,
        your deposit will be added to the next (scheduled) auction. Every auction takes approx. 5 hours.
      </p>
    <ButtonCTA onClick={() => console.log('Submitting Order')}>
      Submit Order <i className="icon icon-walletOK"></i>
    </ButtonCTA>
  </AuctionContainer>
)

export default WalletPanel
