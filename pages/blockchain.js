import { ec } from 'elliptic';
import Head from 'next/head';
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout';
import homeStyles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

import { Blockchain, Transaction } from './api/blockchain';

export default function blockchain() {
  const [myBlockChain, setMyBlockchain] = useState(new Blockchain());
  const [mining, setMining] = useState(true);
  const eC = new ec('secp256k1');
  const myKey = eC.keyFromPrivate(
    '5967dba6e00498c03670aa254357d07cab3656f700e9cc8f1951d52b1a490c37'
  );

  const friendKey =
    '04a51495d4811748c77e514eb924ac25e27245c4507419f9e1c29c31fffa6bf73591fe2e967b9e0d6d7290bc2f96322748d934dcb7f55df44d0663f3fcea9a9907';
  const myWalletAddress = myKey.getPublic('hex');

  const handleClick = () => {
    let myCoin = myBlockChain;
    const tx1 = new Transaction(
      myWalletAddress,
      friendKey,
      Math.floor(Math.random() * 10 + 1)
    );
    tx1.signTransaction(myKey);
    myCoin.addTransaction(tx1);
    console.log('Starting the miner...');
    myCoin.minePendingTransactions(myWalletAddress);
    console.log(
      'Balance of you: ' + myCoin.getBalanceOfAddress(myWalletAddress)
    );
    setMyBlockchain(myCoin);
    setMining(!mining);
    console.log(myBlockChain);
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <button onClick={handleClick}>Miner</button>
      {myBlockChain.chain.map((block) => (
        <div className={homeStyles.card} key={block.timestamp}>
          <p>
            Thời gian: {new Date(block.timestamp).toLocaleDateString('vi-VN')}
          </p>
          <p>Hash: {block.hash}</p>
          <p>PrevHash: {block.previousHash}</p>
        </div>
      ))}
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      ></section>
    </Layout>
  );
}
