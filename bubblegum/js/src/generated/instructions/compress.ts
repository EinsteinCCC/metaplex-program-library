/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category Compress
 * @category generated
 */
export const compressStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CompressInstructionArgs',
);
/**
 * Accounts required by the _compress_ instruction
 *
 * @property [] treeAuthority
 * @property [**signer**] leafOwner
 * @property [] leafDelegate
 * @property [] merkleTree
 * @property [_writable_] tokenAccount
 * @property [_writable_] mint
 * @property [_writable_] metadata
 * @property [_writable_] masterEdition
 * @property [_writable_, **signer**] payer
 * @property [] logWrapper
 * @property [] compressionProgram
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category Compress
 * @category generated
 */
export type CompressInstructionAccounts = {
  treeAuthority: web3.PublicKey;
  leafOwner: web3.PublicKey;
  leafDelegate: web3.PublicKey;
  merkleTree: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  mint: web3.PublicKey;
  metadata: web3.PublicKey;
  masterEdition: web3.PublicKey;
  payer: web3.PublicKey;
  logWrapper: web3.PublicKey;
  compressionProgram: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const compressInstructionDiscriminator = [82, 193, 176, 117, 176, 21, 115, 253];

/**
 * Creates a _Compress_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Compress
 * @category generated
 */
export function createCompressInstruction(
  accounts: CompressInstructionAccounts,
  programId = new web3.PublicKey('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'),
) {
  const [data] = compressStruct.serialize({
    instructionDiscriminator: compressInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.treeAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.leafOwner,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.leafDelegate,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.merkleTree,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.masterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.logWrapper,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.compressionProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
