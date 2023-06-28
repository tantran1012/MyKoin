import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

import { Divider, Typography } from '@mui/material';
import { useState } from 'react';
import BlockChain from '../components/blockchain';
import Transactions from '../components/transactions';
import { BlockchainService } from './api/services/blockchain-service';

export default function blockchain() {
  const [blockChain, setBlockchain] = useState(new BlockchainService());
  const [selectedBlock, setSelectedBlock] = useState(0);

  const handleChangeBlock = (id) => {
    setSelectedBlock(id);
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Typography variant="h4" gutterBottom>
        Danh sách các block trong hệ thống
      </Typography>
      <BlockChain
        blockChain={blockChain.getBlock()}
        selectedBlock={selectedBlock}
        setSelectedBlock={handleChangeBlock}
      />
      <Divider sx={{ my: 3 }} />
      <Typography variant="h4" gutterBottom>
        Danh sách các transaction
      </Typography>
      <Transactions block={blockChain.getBlock()[selectedBlock]} />
    </Layout>
  );
}
