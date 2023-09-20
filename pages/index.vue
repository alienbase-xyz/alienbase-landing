<template>
  <div
    class="home-wrapper w-full pt-200px flex flex-col items-center justify-start gap-100px"
  >
    <div class="hero w-full flex flex-col items-center justify-start gap-120px">
      <section
        class="w-full flex flex-col items-center justify-center gap-40px"
      >
        <div class="w-full flex flex-col items-center justify-start gap-10px">
          <Typo role="h1" class-name="text-center" gradient>
            bringing alien tech<br />
            to humans
          </Typo>
          <Typo role="body" class-name="h1-paragraph text-body text-center">
            Trade, earn and get rewarded for holding ALB
          </Typo>
        </div>
        <NuxtLink
          to="https://app.alienbase.xyz/"
          class="hero-cta"
          title="Trade Now"
        >
          <AppButton>trade now</AppButton>
        </NuxtLink>
      </section>
      <section
        class="w-full flex flex-col items-center justify-start gap-40px default-layout-padding"
      >
        <div class="flex flex-col items-center justify-start gap-10px">
          <IconsStar class="journey-star" />
          <Typo role="h2" class-name="journey-title text-center" gradient>
            Join our journey to the stars
          </Typo>
        </div>
        <div
          class="w-full max-w-1100px border-1px border-[#EEF0F4] border-opacity-10 rounded-10px grid grid-cols-4 grid-rows-1 gap-0 <lg:grid-cols-2 <md:grid-cols-1"
        >
          <div
            class="w-full flex flex-col items-center justify-center gap-8px py-20px md:border-r-1px border-[#EEF0F4] <lg:(border-b-1px) border-opacity-10"
          >
            <Typo role="h2" gradient>$18.59M</Typo>
            <Typo role="body" class-name="text-body">
              Total Liquidity <span class="text-green">+31.74%</span>
            </Typo>
          </div>
          <div
            class="w-full flex flex-col items-center justify-center gap-8px py-20px md:border-r-1px border-[#EEF0F4] <lg:(border-b-1px) border-opacity-10"
          >
            <Typo role="h2" gradient
              >${{
                albMarketStatus == "success"
                  ? albMarket?.volume / 1_000
                  : "..."
              }}K</Typo
            >
            <Typo role="body" class-name="text-body">Total Volume</Typo>
          </div>
          <div
            class="w-full flex flex-col items-center justify-center gap-8px py-20px md:border-r-1px <md:border-b-1px border-[#EEF0F4] border-opacity-10"
          >
            <Typo role="h2" gradient>$25.436M</Typo>
            <Typo role="body" class-name="text-body">24H Transactions</Typo>
          </div>
          <div
            class="w-full flex flex-col items-center justify-center gap-8px py-20px"
          >
            <Typo role="h2" gradient>1.354</Typo>
            <Typo role="body" class-name="text-body">ALB holders</Typo>
          </div>
        </div>
      </section>
    </div>
    <section
      class="trade-trigger w-full flex flex-col items-center justify-start gap-40px default-layout-padding"
    >
      <p
        class="trade-confident text-32px text-headline font-medium text-center"
      >
        <span>Trade</span>&NonBreakingSpace;<br class="md:hidden" />
        <span>with</span>&NonBreakingSpace;<span>confidence</span>
      </p>
      <GridLayout />
    </section>
  </div>
  <div
    class="w-full flex flex-col items-center jusitfy-start mt-100px gap-124px"
  >
    <section class="w-full flex flex-col gap-40px">
      <header
        class="default-layout-padding flex flex-col items-center justify-start gap-20px"
      >
        <Typo role="h2" class-name="uppercase text-center">
          Earn up to
          {{
            farmStatus == "success" ? farmsData?.highestApr.toFixed(0) : "..."
          }}% on your crypto</Typo
        >
        <Typo role="body" class-name="max-w-420px text-body text-center">
          50% of all fees are shared with liquidity providers. You make money
          while you sleep. It's how we aliens usually do.
        </Typo>
        <NuxtLink to="https://app.alienbase.xyz/farms" title="Start Earning">
          <AppButton type="tertiary" small>Start Earning</AppButton>
        </NuxtLink>
      </header>
      <div class="w-full max-w-screen relative">
        <div
          class="farms-scroll-container pt-60px default-layout-padding pb-16px overflow-x-auto w-full flex flex-row items-start jusitfy-start gap-20px w-full"
        >
          <FarmCard
            :name="farm.name"
            :icons="farm.icons"
            :multipler="farm.multiplier"
            earn="alb"
            :liquidity="Number(farm.liquidity)"
            :rewards="farm.reward"
            :apr="Number(farm.apr)"
            :contract="farm.contract"
            :to="farm.link"
            v-for="(farm, i) in farmsData?.farms"
            :key="i"
          />
        </div>
        <div
          class="h-full w-200px <md:hidden absolute left-0 top-0 pointer-events-none select-none"
          :class="{
            'opacity-0': farmScrollPosition < 200,
            'opacity-100': farmScrollPosition >= 200,
          }"
          style="
            transition: all 0.3s;
            background: linear-gradient(
              90deg,
              #010814 2.71%,
              rgba(1, 8, 20, 0) 95.79%
            );
          "
        ></div>
        <div
          class="h-full w-200px <md:hidden absolute right-0 top-0 pointer-events-none select-none"
          style="
            transition: all 0.3s;
            background: linear-gradient(
              274deg,
              #010814 2.71%,
              rgba(1, 8, 20, 0) 95.79%
            );
          "
        ></div>
        <div
          class="navigator flex flex-row items-center justify-end gap-12px absolute top-0 right-18px"
        >
          <div
            class="prev cursor-pointer rounded-100px w-44px h-44px border-1px border-outline grid place-items-center text-headline hover:(bg-outline)"
            @click="scrollPrev"
          >
            <IcOutlineArrowBackward />
          </div>
          <div
            class="next cursor-pointer rounded-100px w-44px h-44px border-1px border-outline grid place-items-center text-headline hover:(bg-outline)"
            @click="scrollNext"
          >
            <IcOutlineArrowForward />
          </div>
        </div>
      </div>
    </section>
    <section
      class="area-51-trigger w-full default-layout-padding flex flex-col items-center justify-start gap-42px"
    >
      <div class="img-container area-51-tokens">
        <AppImg src="/img/meet-a51.png" alt="Meet Area51" />
      </div>
      <header
        class="w-full flex flex-col md:items-center justify-start gap-20px md:text-center"
      >
        <h2
          class="text-6xl gradient uppercase font-bold"
          style="letter-spacing: -4px"
        >
          Meet <br class="md:hidden" />
          Area 51
        </h2>
        <h2
          class="text-18px text-headline font-bold max-w-350px md:max-w-500px uppercase leading-[120%]"
          stlye="letter-spacing: -3px;"
        >
          The safe place for earthlings to trade memecoins
        </h2>
        <Typo role="body" class-name="max-w-400px text-body">
          Humans are prone to violence. We created a place where you can trade
          memecoins without getting rugged
        </Typo>
        <NuxtLink to="https://area51.alienbase.xyz/" title="Visit Area 51">
          <AppButton type="secondary" small>Visit Area 51</AppButton>
        </NuxtLink>
      </header>
    </section>
    <section
      class="w-full min-h-700px flex flex-col items-center justify-end relative mt-50px"
    >
      <div
        class="image-container w-1920px absolute transform <lg:hidden grid place-items-center"
        style="z-index: -1"
      >
        <div class="relative w-full max-w-1920px h-1067px">
          <AppImg
            src="/img/meet-alb-details.png"
            alt="ALB tokens in space"
            class-name="alb-stars absolute min-w-1920px max-w-1920px transform translate-y-0"
          />
          <AppImg
            src="/img/meet-alb.png"
            alt="Meet ALB Token on AlienBase"
            class-name="alb-token absolute min-w-1920px max-w-1920px transform translate-y-[0%]"
          />
        </div>
      </div>
      <main
        class="alb-stars-trigger w-full default-layout-padding flex flex-row <md:items-start <lg:(flex-col items-center gap-32px) items-stretch justify-center gap-100px"
      >
        <div
          class="flex flex-col <md:items-start <lg:(items-center w-full) justify-between gap-32px"
        >
          <div class="token-container lg:hidden">
            <AppImg
              src="/img/meet-alb-mobile.png"
              alt="Meet ALB Token on AlienBase"
              class-name="alb-token"
            />
          </div>
          <header
            class="flex flex-col <md:items-start <lg:items-center justify-start gap-12px"
          >
            <h2
              class="text-6xl gradient uppercase font-bold"
              style="letter-spacing: -4px"
            >
              Meet Alb
            </h2>
            <h2
              class="text-18px text-headline font-bold max-w-350px md:max-w-500px uppercase leading-[120%]"
              stlye="letter-spacing: -3px;"
            >
              the utility token for Alien Base
            </h2>
          </header>
          <div
            class="flex flex-col items-start justify-start gap-14px <lg:hidden"
          >
            <Typo role="body" class-name="text-body max-w-350px">
              You can stake ALB with X APR and receive exclusive airdrops from
              Area51
            </Typo>
            <div class="flex flex-row items-start justify-start gap-12px">
              <NuxtLink to="https://app.alienbase.xyz/swap" title="Buy ALB">
                <AppButton small>BUY ALB</AppButton>
              </NuxtLink>
              <NuxtLink
                to="https://app.alienbase.xyz/liquidity"
                title="Stake ALB"
              >
                <AppButton type="secondary" small>STAKE ALB</AppButton>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="<md:w-full data flex flex-row items-start justify-end gap-40px"
        >
          <ul
            class="w-full flex flex-col items-start md:items-center lg:items-start justify-start gap-60px"
          >
            <li
              class="flex flex-col items-start md:items-center lg:items-start justify-start gap-6px"
              v-for="data in ALBData[0]"
              :key="data.name"
            >
              <h2
                class="text-32px text-headline <md:text-18px font-bold uppercase"
              >
                {{ data.value }}
              </h2>
              <p class="text-18px <md:text-14px text-body whitespace-nowrap">
                {{ data.name }}
              </p>
            </li>
          </ul>
          <ul
            class="w-full flex flex-col items-start md:items-center lg:items-start justify-start gap-60px"
          >
            <li
              class="flex flex-col items-start md:items-center lg:items-start justify-start gap-6px"
              v-for="data in ALBData[1]"
              :key="data.name + '2'"
            >
              <h2
                class="text-32px text-headline <md:text-18px font-bold uppercase"
              >
                {{ data.value }}
              </h2>
              <p class="text-18px <md:text-14px text-body whitespace-nowrap">
                {{ data.name }}
              </p>
            </li>
          </ul>
        </div>

        <div
          class="flex flex-col items-center <md:items-start justify-start gap-14px mt-24px lg:hidden"
        >
          <Typo role="body" class-name="text-body">
            You can stake ALB with X APR and receive exclusive airdrops from
            Area51
          </Typo>
          <div
            class="flex flex-row items-center <md:items-start justify-start gap-12px"
          >
            <NuxtLink to="https://app.alienbase.xyz/swap" title="Buy ALB">
              <AppButton small>BUY ALB</AppButton>
            </NuxtLink>
            <NuxtLink
              to="https://app.alienbase.xyz/liquidity"
              title="Stake ALB"
            >
              <AppButton type="secondary" small>STAKE ALB</AppButton>
            </NuxtLink>
          </div>
        </div>
      </main>
    </section>
    <section
      class="w-full flex flex-col items-center justify-center gap-40px default-layout-padding"
    >
      <header
        class="text-center flex flex-col items-center justify-start gap-14px"
      >
        <p class="text-32px text-headline font-medium">Roadmap</p>
        <p class="text-18px text-body font-medium leading-[140%]">
          We landed on Earh, but we're going to the Moon
        </p>
      </header>
      <div class="wrapper w-full grid place-items-center overflow-clip">
        <div
          class="w-600px h-600px rounded-600px bg-body bg-opacity-10 filter blur-200px absolute <md:hidden"
          style="z-index: -1"
        ></div>
        <TokenomicsWrapper />
      </div>
    </section>
    <section
      class="partners-trigger w-full flex flex-col items-center justify-center gap-40px default-layout-padding"
    >
      <header
        class="text-center flex flex-col items-center justify-start gap-14px"
      >
        <p class="text-32px text-headline font-medium">We are blending in</p>
        <p class="text-18px text-body font-medium leading-[140%]">
          Developing the Base Chain ecosystem is our priority. Meet our early
          stage partners.
        </p>
      </header>
      <ul
        class="partners flex flex-row items-center justify-center gap-60px <lg:flex-col"
      >
        <li
          class="partner max-h-45px"
          v-for="partner in partners"
          :key="partner.name"
        >
          <AppImg
            :alt="partner.name"
            :src="partner.img"
            class-name="max-h-45px"
          />
        </li>
      </ul>
    </section>
    <section class="h-2vh"></section>
  </div>
  <!-- <AppButton type="secondary">trade now</AppButton>
  <AppButton small>buy alb</AppButton>
  <AppButton type="secondary" small>buy alb</AppButton>
   -->
</template>

<script lang="ts" setup>
import IcOutlineArrowForward from "~icons/ic/outline-arrow-forward";
import IcOutlineArrowBackward from "~icons/ic/outline-arrow-back";

import { AppConfigs } from "@/configs/AppConfig";
import { TokenIcons } from "@/configs/TokensConfig";

const partners = ref([
  {
    name: "Beefy",
    img: "/svg/partners/beefy.svg",
  },
  {
    name: "Axelar",
    img: "/svg/partners/axelar.svg",
  },
  {
    name: "Overnight",
    img: "/svg/partners/overnight.svg",
  },
  {
    name: "Wormhole",
    img: "/svg/partners/wormhole.svg",
  },
]);

useHead({
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title: AppConfigs.title,
  description: AppConfigs.description,
  ogTitle: AppConfigs.title,
  ogDescription: AppConfigs.description,
  ogImage: AppConfigs.image,
  ogUrl: "https://alienbase.xyz/",
  ogType: "website",
  ogSiteName: "AlienBase",
  twitterTitle: AppConfigs.title,
  twitterDescription: AppConfigs.description,
  twitterImage: AppConfigs.image,
  twitterCard: "summary_large_image",
});

interface ALBData {
  value: string;
  name: string;
}

interface ALBFarm {
  pid: number;
  name: string;
  contract: string;
  multiplier: string;
  reward: null | string;
  liquidity: number;
  apr: string;
  link: string;
  icons: string[];
}

interface FarmsData {
  highestApr: number;
  farms: ALBFarm[];
}

const {
  data: albMarket,
  status: albMarketStatus,
  refresh: refreshAlbMarket,
} = await useAsyncData(
  "alb-market",
  () => $fetch("https://api.coingecko.com/api/v3/coins/alienbase"),
  {
    immediate: true,
    transform: (v: any) => {
      return {
        price: v.market_data.current_price.usd.toFixed(5),
        cap: v.market_data.market_cap.usd,
        volume: v.market_data.total_volume.usd,
      };
    },
  }
);

const {
  data: albSupply,
  status: albSupplyStatus,
  refresh: refreshAlbSupply,
} = await useAsyncData(
  "alb-supply",
  () =>
    $fetch(
      `https://sxxtwqn1v0.execute-api.eu-central-1.amazonaws.com/prod/supply`,
      {
        mode: "no-cors",
      }
    ),
  {
    immediate: true,
    transform: (v: any) => {
      return {
        total: v.totalSupply,
        circulating: v.circulatingSupply,
      };
    },
  }
);

const {
  data: farmsData,
  status: farmStatus,
  refresh: refreshFarms,
} = await useAsyncData(
  "alb-farms",
  () =>
    $fetch(
      "https://4nsrsfaan2.execute-api.eu-central-1.amazonaws.com/prod/farms",
      {
        mode: "no-cors",
      }
    ),
  {
    immediate: true,
    transform: (v: object[]): FarmsData => {
      const farms = v.map(
        (el: any): ALBFarm => ({
          pid: el.pid,
          name: el.lpSymbol,
          contract: el.lpAddress,
          multiplier: el.multiplier,
          reward: el.extraTokenSymbol || null,
          icons: [el.quoteToken.address, el.token.address],
          liquidity: Number(
            (
              Number(el.lpTotalInQuoteToken) * Number(el.quoteTokenPriceBusd)
            ).toFixed(0)
          ),
          apr: el.apr.toFixed(2),
          link: `https://app.alienbase.xyz/add/${el.quoteToken.address}/${el.token.address}`,
        })
      );

      return {
        farms: farms.map((f) => {
          const icon1 = TokenIcons.find((el) => el.includes(f.icons[0]));
          const icon2 = TokenIcons.find((el) => el.includes(f.icons[1]));
          return {
            ...f,
            icons: [
              `https://app.alienbase.xyz/images/tokens/${icon1}`,
              `https://app.alienbase.xyz/images/tokens/${icon2}`,
            ],
          };
        }),
        highestApr: farms.map((el) => Number(el.apr)).sort((a, b) => b - a)[0],
      };
    },
  }
);

const ALBData = ref<ALBData[][]>([
  [
    {
      name: "Price",
      value: `$${
        albMarketStatus.value == "success" ? albMarket.value?.price : "..."
      }`,
    },
    {
      name: "Circulating supply",
      value: `${
        albSupplyStatus.value == "success"
          ? (albSupply.value?.circulating / 1_000_000).toFixed(0).concat("M")
          : "..."
      }`,
    },
    {
      name: "Max supply",
      value: "510M",
    },
  ],
  [
    {
      name: "Market capitalization",
      value: `${
        albMarketStatus.value == "success"
          ? "$" + albMarket.value?.cap / 1_000 + "K"
          : "..."
      }`,
    },
    {
      name: "Total supply",
      value: `${
        albSupplyStatus.value == "success"
          ? (albSupply.value?.total / 1_000_000).toFixed(0).concat("M")
          : "..."
      }`,
    },
    {
      name: "Current emmission",
      value: "8/sec",
    },
  ],
]);

const farmScrollPosition = ref(0);

const scrollNext = () => {
  const farmsContainer = document.querySelector(
    ".farms-scroll-container"
  ) as HTMLElement;
  farmsContainer.scrollBy({
    behavior: "smooth",
    left: 320,
  });
};

const scrollPrev = () => {
  const farmsContainer = document.querySelector(
    ".farms-scroll-container"
  ) as HTMLElement;
  farmsContainer.scrollBy({
    behavior: "smooth",
    left: -320,
  });
};

onMounted(() => {
  const farmsContainer = document.querySelector(
    ".farms-scroll-container"
  ) as HTMLElement;
  farmsContainer.addEventListener("scroll", (e: Event) => {
    const container = e.target as HTMLElement;
    farmScrollPosition.value = container.scrollLeft;
    /* console.log(farmScrollPosition.value, container.getBoundingClientRect()); */
  });
});
</script>

<style lang="scss" scoped>
.home-wrapper {
  background-image: url(/img/hero-illustration.png);
  background-repeat: no-repeat;
  background-size: 954px;
  background-position: center 9%;

  @media screen and (min-width: 500px) {
    background-position: center 6%;
  }

  @media screen and (min-width: 765px) {
    background-size: 2154px;
    background-position: center -43%;
  }

  @media screen and (min-width: 1024px) {
    background-size: 2154px;
    background-position: center -38%;
  }

  @media screen and (min-width: 1408px) {
    background-size: 2504px;
    background-position: center -100%;
  }
}

.farms-scroll-container {
  &::-webkit-scrollbar {
    @apply hidden;
  }
}
</style>
