# Buy & Sell Mechanics

DegenCore uses a virtual reserve constant-product formula, similar to Uniswap, but without an actual liquidity pool until graduation.

## The Bonding Curve Formula
The price is determined by the ratio of the Virtual Token Reserve to the Virtual Pair Reserve. As buyers purchase tokens, the token reserve decreases, and the pair reserve increases, causing the price to rise exponentially.

## Trading Fees
Every buy or sell transaction incurs a **2% total fee**:
* **1% Platform Fee**: Sent to the DegenCore treasury.
* **1% Reward Fee**: Sent to the Creator or distributed as Cashback (based on the launch settings).

## Anti-Snipe Protection
To protect early buyers from bot snipers, DegenCore features a dynamic surtax for the first 60 seconds after launch. The fee starts at 4% and linearly decays to 0% within 1 minute. This fee is added directly to the curve's liquidity, making the launch fairer for human traders.

## Graduation to Uniswap
When 80% of the total supply (800,000,000 tokens) is sold, the curve "graduates".
1. The accumulated ETH/USDC and the remaining 20% of tokens are migrated to Uniswap V2.
2. The LP (Liquidity Provider) tokens are immediately sent to the `0x...dEaD` address.
3. **Liquidity is permanently locked and can never be removed.**
4. Trading moves to the Uniswap DEX. You can continue trading via DegenCore's interface (which routes through `RewardRouter` to keep the reward system active) or directly on Uniswap.
