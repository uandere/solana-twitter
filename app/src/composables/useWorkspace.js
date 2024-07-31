import { computed } from "vue";
import { useAnchorWallet } from "solana-wallets-vue";
import { Connection } from "@solana/web3.js";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import idl from '@/idl/solana_twitter.json'

const clusterUrl = process.env.VUE_APP_CLUSTER_URL

let workspace = null;
export const useWorkspace = () => workspace;

const preflightCommitment = 'confirmed'
const commitment = 'confirmed'

export const initWorkspace = () => {
  const wallet = useAnchorWallet();
  console.log(clusterUrl);
  const connection = new Connection(clusterUrl, commitment);
  const provider = computed(() => new AnchorProvider(connection, wallet.value, { preflightCommitment }));
  const program = computed(() => new Program(idl, provider.value));

  
  workspace = {
    wallet,
    connection,
    provider,
    program,
  };
};
