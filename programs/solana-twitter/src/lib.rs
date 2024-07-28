use std::mem::size_of;

use anchor_lang::prelude::*;

declare_id!("B3W8FdURNLEEJncJNEFfu3Jfui7PTbpAcuXDnbA4Ctin");

#[program]
pub mod solana_twitter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[account]
pub struct Tweet {
    pub author: Pubkey,
    pub timestamp: i64,
    pub topic: String,
    pub content: String,
}

const DISCRIMINATOR_LENGTH: usize = 8;
const PUBLIC_KEY_LENGTH: usize = size_of::<Pubkey>();
const TIMESTAMP_LENGTH: usize = size_of::<i64>();
const STRING_LENGTH_PREFIX: usize = 4;
const MAX_TOPIC_LENGTH: usize = 50 * STRING_LENGTH_PREFIX;
const MAX_CONTENT_LENGTH: usize = 280 * 4;

impl Tweet {
    const LEN: usize = DISCRIMINATOR_LENGTH
        + PUBLIC_KEY_LENGTH // Author.
        + TIMESTAMP_LENGTH // Timestamp.
        + STRING_LENGTH_PREFIX + MAX_TOPIC_LENGTH // Topic.
        + STRING_LENGTH_PREFIX + MAX_CONTENT_LENGTH; // Content.
}
