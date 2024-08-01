import { web3 } from "@coral-xyz/anchor";
import { useWorkspace } from "@/composables";
import { Tweet } from "@/models";

export const sendTweet = async (topic, content) => {
  const { wallet, program } = useWorkspace();

  const tweet = web3.Keypair.generate();

  await program.value.methods
    .sendTweet(topic, content)
    .accounts({
      author: wallet.value.publicKey,
      tweet: tweet.publicKey,
      systemProgram: web3.SystemProgram.programId,
    })
    .signers([tweet])
    .rpc();

  const tweetAccount = await program.value.account.tweet.fetch(tweet.publicKey);

  return new Tweet(tweet.publicKey, tweetAccount);
};