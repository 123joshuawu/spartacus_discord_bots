/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type LogDeploy = ContractEventLog<{
  masterContract: string;
  data: string;
  cloneAddress: string;
  0: string;
  1: string;
  2: string;
}>;
export type LogDeposit = ContractEventLog<{
  token: string;
  from: string;
  to: string;
  amount: string;
  share: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type LogFlashLoan = ContractEventLog<{
  borrower: string;
  token: string;
  amount: string;
  feeAmount: string;
  receiver: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type LogRegisterProtocol = ContractEventLog<{
  protocol: string;
  0: string;
}>;
export type LogSetMasterContractApproval = ContractEventLog<{
  masterContract: string;
  user: string;
  approved: boolean;
  0: string;
  1: string;
  2: boolean;
}>;
export type LogStrategyDivest = ContractEventLog<{
  token: string;
  amount: string;
  0: string;
  1: string;
}>;
export type LogStrategyInvest = ContractEventLog<{
  token: string;
  amount: string;
  0: string;
  1: string;
}>;
export type LogStrategyLoss = ContractEventLog<{
  token: string;
  amount: string;
  0: string;
  1: string;
}>;
export type LogStrategyProfit = ContractEventLog<{
  token: string;
  amount: string;
  0: string;
  1: string;
}>;
export type LogStrategyQueued = ContractEventLog<{
  token: string;
  strategy: string;
  0: string;
  1: string;
}>;
export type LogStrategySet = ContractEventLog<{
  token: string;
  strategy: string;
  0: string;
  1: string;
}>;
export type LogStrategyTargetPercentage = ContractEventLog<{
  token: string;
  targetPercentage: string;
  0: string;
  1: string;
}>;
export type LogTransfer = ContractEventLog<{
  token: string;
  from: string;
  to: string;
  share: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type LogWhiteListMasterContract = ContractEventLog<{
  masterContract: string;
  approved: boolean;
  0: string;
  1: boolean;
}>;
export type LogWithdraw = ContractEventLog<{
  token: string;
  from: string;
  to: string;
  amount: string;
  share: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface BentoBox extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): BentoBox;
  clone(): BentoBox;
  methods: {
    DOMAIN_SEPARATOR(): NonPayableTransactionObject<string>;

    balanceOf(arg0: string, arg1: string): NonPayableTransactionObject<string>;

    batch(
      calls: (string | number[])[],
      revertOnFail: boolean
    ): PayableTransactionObject<{
      successes: boolean[];
      results: string[];
      0: boolean[];
      1: string[];
    }>;

    batchFlashLoan(
      borrower: string,
      receivers: string[],
      tokens: string[],
      amounts: (number | string | BN)[],
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    claimOwnership(): NonPayableTransactionObject<void>;

    deploy(
      masterContract: string,
      data: string | number[],
      useCreate2: boolean
    ): PayableTransactionObject<string>;

    deposit(
      token_: string,
      from: string,
      to: string,
      amount: number | string | BN,
      share: number | string | BN
    ): PayableTransactionObject<{
      amountOut: string;
      shareOut: string;
      0: string;
      1: string;
    }>;

    flashLoan(
      borrower: string,
      receiver: string,
      token: string,
      amount: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    harvest(
      token: string,
      balance: boolean,
      maxChangeAmount: number | string | BN
    ): NonPayableTransactionObject<void>;

    masterContractApproved(
      arg0: string,
      arg1: string
    ): NonPayableTransactionObject<boolean>;

    masterContractOf(arg0: string): NonPayableTransactionObject<string>;

    nonces(arg0: string): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    pendingOwner(): NonPayableTransactionObject<string>;

    pendingStrategy(arg0: string): NonPayableTransactionObject<string>;

    permitToken(
      token: string,
      from: string,
      to: string,
      amount: number | string | BN,
      deadline: number | string | BN,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    registerProtocol(): NonPayableTransactionObject<void>;

    setMasterContractApproval(
      user: string,
      masterContract: string,
      approved: boolean,
      v: number | string | BN,
      r: string | number[],
      s: string | number[]
    ): NonPayableTransactionObject<void>;

    setStrategy(
      token: string,
      newStrategy: string
    ): NonPayableTransactionObject<void>;

    setStrategyTargetPercentage(
      token: string,
      targetPercentage_: number | string | BN
    ): NonPayableTransactionObject<void>;

    strategy(arg0: string): NonPayableTransactionObject<string>;

    strategyData(arg0: string): NonPayableTransactionObject<{
      strategyStartDate: string;
      targetPercentage: string;
      balance: string;
      0: string;
      1: string;
      2: string;
    }>;

    toAmount(
      token: string,
      share: number | string | BN,
      roundUp: boolean
    ): NonPayableTransactionObject<string>;

    toShare(
      token: string,
      amount: number | string | BN,
      roundUp: boolean
    ): NonPayableTransactionObject<string>;

    totals(arg0: string): NonPayableTransactionObject<{
      elastic: string;
      base: string;
      0: string;
      1: string;
    }>;

    transfer(
      token: string,
      from: string,
      to: string,
      share: number | string | BN
    ): NonPayableTransactionObject<void>;

    transferMultiple(
      token: string,
      from: string,
      tos: string[],
      shares: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean
    ): NonPayableTransactionObject<void>;

    whitelistMasterContract(
      masterContract: string,
      approved: boolean
    ): NonPayableTransactionObject<void>;

    whitelistedMasterContracts(
      arg0: string
    ): NonPayableTransactionObject<boolean>;

    withdraw(
      token_: string,
      from: string,
      to: string,
      amount: number | string | BN,
      share: number | string | BN
    ): NonPayableTransactionObject<{
      amountOut: string;
      shareOut: string;
      0: string;
      1: string;
    }>;
  };
  events: {
    LogDeploy(cb?: Callback<LogDeploy>): EventEmitter;
    LogDeploy(options?: EventOptions, cb?: Callback<LogDeploy>): EventEmitter;

    LogDeposit(cb?: Callback<LogDeposit>): EventEmitter;
    LogDeposit(options?: EventOptions, cb?: Callback<LogDeposit>): EventEmitter;

    LogFlashLoan(cb?: Callback<LogFlashLoan>): EventEmitter;
    LogFlashLoan(
      options?: EventOptions,
      cb?: Callback<LogFlashLoan>
    ): EventEmitter;

    LogRegisterProtocol(cb?: Callback<LogRegisterProtocol>): EventEmitter;
    LogRegisterProtocol(
      options?: EventOptions,
      cb?: Callback<LogRegisterProtocol>
    ): EventEmitter;

    LogSetMasterContractApproval(
      cb?: Callback<LogSetMasterContractApproval>
    ): EventEmitter;
    LogSetMasterContractApproval(
      options?: EventOptions,
      cb?: Callback<LogSetMasterContractApproval>
    ): EventEmitter;

    LogStrategyDivest(cb?: Callback<LogStrategyDivest>): EventEmitter;
    LogStrategyDivest(
      options?: EventOptions,
      cb?: Callback<LogStrategyDivest>
    ): EventEmitter;

    LogStrategyInvest(cb?: Callback<LogStrategyInvest>): EventEmitter;
    LogStrategyInvest(
      options?: EventOptions,
      cb?: Callback<LogStrategyInvest>
    ): EventEmitter;

    LogStrategyLoss(cb?: Callback<LogStrategyLoss>): EventEmitter;
    LogStrategyLoss(
      options?: EventOptions,
      cb?: Callback<LogStrategyLoss>
    ): EventEmitter;

    LogStrategyProfit(cb?: Callback<LogStrategyProfit>): EventEmitter;
    LogStrategyProfit(
      options?: EventOptions,
      cb?: Callback<LogStrategyProfit>
    ): EventEmitter;

    LogStrategyQueued(cb?: Callback<LogStrategyQueued>): EventEmitter;
    LogStrategyQueued(
      options?: EventOptions,
      cb?: Callback<LogStrategyQueued>
    ): EventEmitter;

    LogStrategySet(cb?: Callback<LogStrategySet>): EventEmitter;
    LogStrategySet(
      options?: EventOptions,
      cb?: Callback<LogStrategySet>
    ): EventEmitter;

    LogStrategyTargetPercentage(
      cb?: Callback<LogStrategyTargetPercentage>
    ): EventEmitter;
    LogStrategyTargetPercentage(
      options?: EventOptions,
      cb?: Callback<LogStrategyTargetPercentage>
    ): EventEmitter;

    LogTransfer(cb?: Callback<LogTransfer>): EventEmitter;
    LogTransfer(
      options?: EventOptions,
      cb?: Callback<LogTransfer>
    ): EventEmitter;

    LogWhiteListMasterContract(
      cb?: Callback<LogWhiteListMasterContract>
    ): EventEmitter;
    LogWhiteListMasterContract(
      options?: EventOptions,
      cb?: Callback<LogWhiteListMasterContract>
    ): EventEmitter;

    LogWithdraw(cb?: Callback<LogWithdraw>): EventEmitter;
    LogWithdraw(
      options?: EventOptions,
      cb?: Callback<LogWithdraw>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "LogDeploy", cb: Callback<LogDeploy>): void;
  once(
    event: "LogDeploy",
    options: EventOptions,
    cb: Callback<LogDeploy>
  ): void;

  once(event: "LogDeposit", cb: Callback<LogDeposit>): void;
  once(
    event: "LogDeposit",
    options: EventOptions,
    cb: Callback<LogDeposit>
  ): void;

  once(event: "LogFlashLoan", cb: Callback<LogFlashLoan>): void;
  once(
    event: "LogFlashLoan",
    options: EventOptions,
    cb: Callback<LogFlashLoan>
  ): void;

  once(event: "LogRegisterProtocol", cb: Callback<LogRegisterProtocol>): void;
  once(
    event: "LogRegisterProtocol",
    options: EventOptions,
    cb: Callback<LogRegisterProtocol>
  ): void;

  once(
    event: "LogSetMasterContractApproval",
    cb: Callback<LogSetMasterContractApproval>
  ): void;
  once(
    event: "LogSetMasterContractApproval",
    options: EventOptions,
    cb: Callback<LogSetMasterContractApproval>
  ): void;

  once(event: "LogStrategyDivest", cb: Callback<LogStrategyDivest>): void;
  once(
    event: "LogStrategyDivest",
    options: EventOptions,
    cb: Callback<LogStrategyDivest>
  ): void;

  once(event: "LogStrategyInvest", cb: Callback<LogStrategyInvest>): void;
  once(
    event: "LogStrategyInvest",
    options: EventOptions,
    cb: Callback<LogStrategyInvest>
  ): void;

  once(event: "LogStrategyLoss", cb: Callback<LogStrategyLoss>): void;
  once(
    event: "LogStrategyLoss",
    options: EventOptions,
    cb: Callback<LogStrategyLoss>
  ): void;

  once(event: "LogStrategyProfit", cb: Callback<LogStrategyProfit>): void;
  once(
    event: "LogStrategyProfit",
    options: EventOptions,
    cb: Callback<LogStrategyProfit>
  ): void;

  once(event: "LogStrategyQueued", cb: Callback<LogStrategyQueued>): void;
  once(
    event: "LogStrategyQueued",
    options: EventOptions,
    cb: Callback<LogStrategyQueued>
  ): void;

  once(event: "LogStrategySet", cb: Callback<LogStrategySet>): void;
  once(
    event: "LogStrategySet",
    options: EventOptions,
    cb: Callback<LogStrategySet>
  ): void;

  once(
    event: "LogStrategyTargetPercentage",
    cb: Callback<LogStrategyTargetPercentage>
  ): void;
  once(
    event: "LogStrategyTargetPercentage",
    options: EventOptions,
    cb: Callback<LogStrategyTargetPercentage>
  ): void;

  once(event: "LogTransfer", cb: Callback<LogTransfer>): void;
  once(
    event: "LogTransfer",
    options: EventOptions,
    cb: Callback<LogTransfer>
  ): void;

  once(
    event: "LogWhiteListMasterContract",
    cb: Callback<LogWhiteListMasterContract>
  ): void;
  once(
    event: "LogWhiteListMasterContract",
    options: EventOptions,
    cb: Callback<LogWhiteListMasterContract>
  ): void;

  once(event: "LogWithdraw", cb: Callback<LogWithdraw>): void;
  once(
    event: "LogWithdraw",
    options: EventOptions,
    cb: Callback<LogWithdraw>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
