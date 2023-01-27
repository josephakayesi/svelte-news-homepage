<div class="catalog catalog__one">
    <div class="catalog__item catalog__item-one">
        <img class="catalog__image" src="/images/image-retro-pcs.jpg" alt="retro pcs">
        <div class="catalog__text_block">
            <div class="catalog__number">01</div>
            <div class="catalog__heading">Reviving Retro PCs</div>
            <div class="catalog__paragraph">What happens when old PCs are given modern upgrades?</div>
        </div>
    </div>
</div>
<div class="catalog catalog__one">
    <div class="catalog__item catalog__item-two">
        <img class="catalog__image" src="/images/image-top-laptops.jpg"
            alt="top laptops">
        <div class="catalog__text_block">
            <div class="catalog__number">02</div>
            <div class="catalog__heading">Top 10 Laptops of 2022</div>
            <div class="catalog__paragraph">Our best picks for various needs and budgets.</div>
        </div>
    </div>
</div>
<div class="catalog catalog-three">
    <div class="catalog__item">
        <img class="catalog__image catalog__item-three" src="/images/image-gaming-growth.jpg"
            alt="gaming growth">
        <div class="catalog__text_block">
            <div class="catalog__number">03</div>
            <div class="catalog__heading">The Growth of Gaming</div>
            <div class="catalog__paragraph">How the pandemic has sparked fresh opportunities</div>
        </div>
    </div>
</div>

<style lang="scss">
    .catalog {
        display: flex;
        flex-direction: column;

        &__item {
            display: flex;
            gap: 1.4rem;
            height: 100%;
            justify-content: space-between;
            margin: 1rem 0;
        }

        &__image {
            width: 6.25rem;
        }

        &__text_block {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        &__number {
            color: $grayish-blue;
            font-weight: 700;
            font-size: 2rem;
        }

        &__heading {
            color: $very-dark-blue;
            font-weight: 700;
            font-size: 1.1rem;
        }

        &__paragraph {
            color: $dark-grayish-blue;
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1.6;
        }
    }

    @include desktop {
        .catalog {
            display: flex;
            padding-top: inherit;

            &__item {
                display: flex;
                gap: 1rem;
            }

            &__image {
                width: 100px;
                height: 100%;
            }

            &__text_block {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
            }

            &__number {
                color: $grayish-blue;
                font-weight: 700;
                font-size: 2rem;
            }

            &__heading {
                color: $very-dark-blue;
                font-weight: 700;
                font-size: 1rem;
            }

            &__paragraph {
                color: $dark-grayish-blue;
                font-weight: 400;
                font-size: 0.875rem;
                line-height: 1.6;
            }
        }

        .catalog-one {
            grid-area: catalog-one;
        }

        .catalog-two {
            grid-area: catalog-two;
        }

        .catalog-three {
            grid-area: catalog-three;
        }
    }
</style>