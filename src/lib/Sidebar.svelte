<div class="sidebar">
    <h2 class="sidebar__heading">
        New
    </h2>
    <div class="sidebar__posts">

        <div class="sidebar__post">
            <h3 class="sidebar__subheading">
                Hydrogen VS Electric Cars
            </h3>
            <p class="sidebar__text">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <hr />
        <div class="sidebar__post">
            <h3 class="sidebar__subheading">
                The Downside of AI Artistry
            </h3>
            <p class="sidebar__text">What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <hr />
        <div class="sidebar__post">
            <h3 class="sidebar__subheading">
                Is VC Funding Drying Up?
            </h3>
            <p class="sidebar__text">Private funding by VC firms is down 50% YOY. We take a look at what that
                means.</p>
        </div>
    </div>
</div>

<style lang="scss">

    .sidebar {
        padding: 2rem 1rem;
        background-color: $very-dark-blue;
        margin: 3rem 0 2rem;

        &__heading {
            color: $soft-orange;
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        &__subheading {
            color: $off-white;
            font-size: 1.345rem;
            margin: .5rem 0;
        }

        &__text {
            color: $dark-grayish-blue;
            font-size: .975rem;
        }
    }

    @include desktop {
        .sidebar {
            grid-area: sidebar;
            padding: 2rem 1.5rem 0 1.5rem;
            margin: 0;

            &_post {
                margin: auto 0 auto 0;
            }

            &__heading {
                color: $soft-orange;
                font-size: 2rem;
                margin-bottom: 1rem;
            }

            &__subheading {
                color: $off-white;
                font-size: 20.5px;
                margin: .5rem 0;
                margin-bottom: 8px;
            }

            &__text {
                color: $dark-grayish-blue;
                font-weight: 400;
                font-size: 15px;
                line-height: 2;
            }
        }
    }

</style>