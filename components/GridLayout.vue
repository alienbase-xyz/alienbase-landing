<template>
  <div
    class="cards-trigger grid-container w-full max-w-1000px flex flex-col items-start justify-start gap-20px"
  >
    <GridCard
      title="Earn on AlienBase"
      content="Boost your earnings by becoming a Liquidity Provider. Deposit assets in a pair and enjoy a share of the swap fees."
      to="https://app.alienbase.xyz/"
      class="earn-feature md:(h-420px gap-0px) <md:gap-20px flex flex-col items-center justify-center"
    >
      <AppImg
        src="/img/earn.png"
        alt="Earn ALB Token on AlienBase"
        class-name="w-full"
      />
      <header
        class="max-w-450px flex flex-col items-center justify-start gap-8px text-center"
      >
        <Typo role="h2">EARN</Typo>
        <Typo role="body" class-name="text-body">
          Liquidity Providers that deposit both assets of a pair are rewarded
          with swapfees
        </Typo>
      </header>
    </GridCard>
    <div
      class="w-full flex flex-row <md:flex-col items-start justify-between gap-20px"
    >
      <GridCard
        title="Farm on AlienBase"
        content="Dive into our farming program and harvest ALB rewards. By staking your Liquidity Pool Tokens, you not only support the ecosystem but also earn ALB tokens."
        to="https://app.alienbase.xyz/farms"
        class="farm-feature md:h-660px flex flex-col items-center jusitfy-center gap-48px"
      >
        <AppImg
          src="/img/farm.png"
          alt="Farm ALB Token on AlienBase"
          class-name="w-full"
        />
        <header
          class="max-w-335px flex flex-col items-center justify-start gap-8px text-center"
        >
          <Typo role="h2">FARM</Typo>
          <Typo role="body" class-name="text-body">
            ALB tokens are rewarded to Liquidity providers who stake their
            Liquidity Pool Tokens.
          </Typo>
        </header>
      </GridCard>
      <div class="w-full flex flex-col items-start justify-start gap-20px">
        <GridCard
          title="Stake on AlienBase"
          content="Unlock the power of staking with ALB. Receive genuine yield in ETH from Area51, our exclusive DEX for the fearless, along with ALB rewards. Plus, enjoy exclusive airdrops from projects making their debut on Area51."
          to="https://app.alienbase.xyz/"
          :padding-bottom="false"
          class="stake-feature md:h-320px flex flex-col items-start justify-center gap-48px"
        >
          <AppImg
            src="/img/stake.png"
            alt="Stake ALB Token on AlienBase"
            class-name="w-full"
          />
          <Typo role="h2">STAKE</Typo>
        </GridCard>
        <GridCard
          title="Dual Farm Rewards on AlienBase"
          content="Maximize your gains with our Double Rewards program. When you stake your LP tokens in our farms, you're eligible to earn rewards in multiple tokens, thanks to our collaborations with partner projects."
          to="https://app.alienbase.xyz/"
          :padding-bottom="false"
          class="dual-rewards-feature md:h-320px flex flex-col items-start justify-between gap-48px"
        >
          <AppImg
            src="/img/rewards.png"
            alt="Get Dual-Farm Rewards on AlienBase"
            class-name="w-full"
          />
          <Typo role="h2">DUAL FARM REWARDS</Typo>
        </GridCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
