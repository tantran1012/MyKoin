import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@mui/material';
import { blue, red } from '@mui/material/colors';

export default function Block({ block }) {
  return (
    <CardActionArea>
      <Card sx={{ maxWidth: 280 }}>
        <CardHeader
          title="Block"
          subheader={block.previousHash.length < 2 ? '(Genesic block)' : ''}
        />
        <CardContent>
          <Typography variant="body2" gutterBottom>
            Thời gian: <br />
            {new Date(block.timestamp).toLocaleDateString('vi-VN')}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color={red[400]} noWrap gutterBottom>
            Hash: <br />
            {block.hash}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color={blue[400]} noWrap gutterBottom>
            PrevHash: <br />
            {block.previousHash}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color={blue[400]} gutterBottom>
            Nonce: {block.nonce}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
