<header class="hero">
    <div class="hero__image hero__image-mobile">
        <img src="/images/image-web-3-mobile.jpg" alt="">
    </div>
    <div class="hero__image hero__image-desktop">
        <img src="/images/image-web-3-desktop.jpg" alt="">
    </div>
</header>

<style lang="scss">

    .hero__image {
        display: none;
        width: 100%;
        padding: 0rem 0 1.5rem 0;

        img {
            width: 100%;
        }

        &-desktop {
            display: none
        }

        &-mobile {
            display: block;
        }
    }

    @include desktop {
        .hero {
            grid-area: hero;

            &__image-desktop {
                 display: block
            }

            &__image-mobile {
                    display: none;
            }
        }
    }

</style>