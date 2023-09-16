<template>
  <div
    class="grid-container w-full max-w-1000px flex flex-col items-start justify-start gap-20px"
  >
    <GridCard
      title="Earn on AlienBase"
      to="https://app.alienbase.xyz/"
      class="md:(h-420px gap-0px) <md:gap-20px flex flex-col items-center justify-center"
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
        to="https://app.alienbase.xyz/farms"
        class="md:h-660px flex flex-col items-center jusitfy-center gap-48px"
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
          to="https://app.alienbase.xyz/"
          :padding-bottom="false"
          class="md:h-320px flex flex-col items-start justify-center gap-48px"
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
          to="https://app.alienbase.xyz/"
          :padding-bottom="false"
          class="md:h-320px flex flex-col items-start justify-between gap-48px"
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
