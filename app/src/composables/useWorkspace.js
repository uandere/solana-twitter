import { computed } from "vue";
import { useAnchorWallet } from "solana-wallets-vue";
import { Connection } from "@solana/web3.js";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import idl from "../../../target/idl/solana_twitter.json";

let workspace = null;

export const useWorkspace = () => workspace;

export const initWorkspace = () => {
  const wallet = useAnchorWallet();
  const connection = new Connection("http://127.0.0.1:8899");
  const provider = computed(() => new AnchorProvider(connection, wallet.value));
  const program = computed(() => new Program(idl, provider.value));

  
  workspace = {
    wallet,
    connection,
    provider,
    program,
  };
};
