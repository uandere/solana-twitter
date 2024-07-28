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
