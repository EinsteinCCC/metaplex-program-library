/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { TransferArgs, transferArgsBeet } from '../types/TransferArgs';

/**
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export type TransferInstructionArgs = {
  transferArgs: TransferArgs;
};
/**
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export const TransferStruct = new beet.FixableBeetArgsStruct<
  TransferInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['transferArgs', transferArgsBeet],
  ],
  'TransferInstructionArgs',
);
/**
 * Accounts required by the _Transfer_ instruction
 *
 * @property [_writable_] token Token account
 * @property [] tokenOwner Token account owner
 * @property [_writable_] destination Destination token account
 * @property [] destinationOwner Destination token account owner
 * @property [] mint Mint of token asset
 * @property [_writable_] metadata Metadata (pda of ['metadata', program id, mint id])
 * @property [] edition (optional) Edition of token asset
 * @property [_writable_] ownerTokenRecord (optional) Token record account
 * @property [_writable_] destinationTokenRecord (optional) Token record account
 * @property [**signer**] authority Transfer authority (token or delegate owner)
 * @property [_writable_, **signer**] payer Payer
 * @property [] sysvarInstructions Instructions sysvar account
 * @property [] splTokenProgram SPL Token Program
 * @property [] splAtaProgram SPL Associated Token Account program
 * @property [] authorizationRulesProgram (optional) Token Authorization Rules Program
 * @property [] authorizationRules (optional) Token Authorization Rules account
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export type TransferInstructionAccounts = {
  token: web3.PublicKey;
  tokenOwner: web3.PublicKey;
  destination: web3.PublicKey;
  destinationOwner: web3.PublicKey;
  mint: web3.PublicKey;
  metadata: web3.PublicKey;
  edition?: web3.PublicKey;
  ownerTokenRecord?: web3.PublicKey;
  destinationTokenRecord?: web3.PublicKey;
  authority: web3.PublicKey;
  payer: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  sysvarInstructions: web3.PublicKey;
  splTokenProgram: web3.PublicKey;
  splAtaProgram: web3.PublicKey;
  authorizationRulesProgram?: web3.PublicKey;
  authorizationRules?: web3.PublicKey;
};

export const transferInstructionDiscriminator = 49;

/**
 * Creates a _Transfer_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Transfer
 * @category generated
 */
export function createTransferInstruction(
  accounts: TransferInstructionAccounts,
  args: TransferInstructionArgs,
  programId = new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
) {
  const [data] = TransferStruct.serialize({
    instructionDiscriminator: transferInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.token,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.destination,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.destinationOwner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.edition ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ownerTokenRecord ?? programId,
      isWritable: accounts.ownerTokenRecord != null,
      isSigner: false,
    },
    {
      pubkey: accounts.destinationTokenRecord ?? programId,
      isWritable: accounts.destinationTokenRecord != null,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.sysvarInstructions,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.splTokenProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.splAtaProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRulesProgram ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRules ?? programId,
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
