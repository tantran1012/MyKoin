import { Grid } from '@mui/material';
import Block from './block';

export default function BlockChain(props) {
  const { blockChain, selectedBlock, setSelectedBlock } = props;
  console.log(props);
  return (
    <Grid container spacing={3}>
      {blockChain.map((block, idx) => (
        <Grid key={block.hash} item onClick={() => setSelectedBlock(idx)}>
          <Block block={block} />
        </Grid>
      ))}
    </Grid>
  );
}
