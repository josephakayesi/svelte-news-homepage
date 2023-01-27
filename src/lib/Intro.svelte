<div class="intro">
    <div class="intro__heading">
        <h1>The Bright Future of Web 3.0?</h1>
    </div>
</div>

<style lang="scss">

    .intro {
        display: flex;
        flex-direction: column;

        &__heading {
            font-size: 1.275rem;
            font-weight: 800;
            line-height: 1;
            margin-bottom: 1.125rem;
        }
    }

    @include desktop {
        .intro {
            grid-area: intro;
            display: flex;
            flex-direction: row;

            &__heading {
                font-size: 1.8rem;
                font-weight: 800;
                line-height: 1;
                margin-bottom: auto
            }
        }
    }

</style>