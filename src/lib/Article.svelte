<div class="article">
    <div class="article__text">
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into
            the hands of the people. But is it really fulfilling its promise?</p>
        <button class="button button--primary">
            Read more
        </button>
    </div>
</div>

<style lang="scss">

    .article {
        &__text {
            p {
                color: $dark-grayish-blue;
                font-weight: 400;
                font-size: 15px;
                line-height: 1.6;
                padding-bottom: 1.5rem;
            }
        }
    }

    @include desktop {
        .article {
            margin-bottom: auto;

            &__text {
                p {
                    font-size: 0.975rem;
                }

                button {
                    margin-bottom: 0;

                }
            }
        }
    }

</style>