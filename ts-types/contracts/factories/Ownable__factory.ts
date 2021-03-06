/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Ownable } from "../Ownable";

export class Ownable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(owner_: string, overrides?: Overrides): Promise<Ownable> {
    return super.deploy(owner_, overrides || {}) as Promise<Ownable>;
  }
  getDeployTransaction(
    owner_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(owner_, overrides || {});
  }
  attach(address: string): Ownable {
    return super.attach(address) as Ownable;
  }
  connect(signer: Signer): Ownable__factory {
    return super.connect(signer) as Ownable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Ownable {
    return new Contract(address, _abi, signerOrProvider) as Ownable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isNextOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nextOwner_",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161050838038061050883398101604081905261002f9161007d565b600080546001600160a01b0319166001600160a01b03831690811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100ad565b60006020828403121561008f57600080fd5b81516001600160a01b03811681146100a657600080fd5b9392505050565b61044c806100bc6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b1461009c5780638f32d59b146100cc578063ed459df2146100eb578063f2fde38b146100fe57600080fd5b806323452b9c14610082578063715018a61461008c57806379ba509714610094575b600080fd5b61008a610111565b005b61008a61018f565b61008a610232565b6000546100af906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6000546001600160a01b031633145b60405190151581526020016100c3565b6001546001600160a01b031633146100db565b61008a61010c3660046103e6565b610307565b6000546001600160a01b031633146101705760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e000000000000000060448201526064015b60405180910390fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031633146101e95760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610167565b6000805473ffffffffffffffffffffffffffffffffffffffff1916815560405181907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3565b6001546001600160a01b031633146102b25760405162461bcd60e51b815260206004820152602c60248201527f63757272656e74206f776e6572206d757374207365742063616c6c657220617360448201527f206e657874206f776e65722e00000000000000000000000000000000000000006064820152608401610167565b6001805473ffffffffffffffffffffffffffffffffffffffff19908116909155600080543392168217815560405182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3565b6000546001600160a01b031633146103615760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610167565b6001600160a01b0381166103b75760405162461bcd60e51b815260206004820152601f60248201527f4e657874206f776e657220697320746865207a65726f20616464726573732e006044820152606401610167565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000602082840312156103f857600080fd5b81356001600160a01b038116811461040f57600080fd5b939250505056fea2646970667358221220c7981defc485321c9ec4ba4673be7a0e279353dd7f51470c27fe2a3d925d753064736f6c63430008060033";
