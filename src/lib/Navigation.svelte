<script>

    let isMenuOpen = false;

    function toggleMenu(e){
        isMenuOpen = !isMenuOpen
    }

</script>


<nav class="navigation">
    <div style="display: flex; align-items: center;">
        <div class="navigation__brand">
            <img src="/images/logo.svg" alt="logo icon">
        </div>

        <div on:click={toggleMenu} class="navigation__menu-icon">
            <img src="/images/icon-menu.svg" alt="hamburger menu icon">
        </div>
    </div>
    <div class="navigation__menu {isMenuOpen ? 'navigation__menu--open' : ''}">
    <!-- <div class="{isMenuOpen ? 'navigation__menu--open' : ''}"> -->
        <ul class="">
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>New</li>
            <li><a href="#"></a>Popular</li>
            <li><a href="#"></a>Trending</li>
            <li><a href="#"></a>Categories</li>
        </ul>
    </div>
</nav>

<style lang="scss">

.navigation {
        flex-direction: column;
        align-self: middle;
        display: flex;
        justify-content: center;

        &__menu  {
            display: none; 
            width: 100%;

            ul {
                display: flex; 
                width: 100%;
                flex-direction: column;
            }

            li {
                text-align: center;
                cursor: pointer;
                padding: 1rem 0;
                color: $dark-grayish-blue;

                a {
                    padding: 0 0 0 1rem;
                }
            }

            &.navigation__menu--open {
                display: flex;
            }
        }     

        &__menu-icon {
                position: absolute;
                right: 1.2rem;
                cursor: pointer;
            }
    }

    @include desktop {
        .navigation {
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: center;
            justify-content: space-between;

            &__menu {
                display: flex;
                width: auto;   
                
                ul {
                    flex-direction: row;
                }

                &-icon {
                    display: none
                }
            }

            &__header {
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }

</style>