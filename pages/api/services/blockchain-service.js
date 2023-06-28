import EC from 'elliptic';
import { Blockchain } from '../blockchain';

export class BlockchainService {
  blockchainInstance = new Blockchain();
  walletKeys = [];
  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');
    this.generateWalletKeys();
  }

  getBlock() {
    return this.blockchainInstance.chain;
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }

  generateWalletKeys = () => {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();
    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    });
  };
}
