import cart from './CartComp'
import products from './ProducComp'
import search from './FilterComp'
import error from './ErrorComp'

const app = {
    el: '#app',
    components: {
        cart,
        products,
        error,
        search,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
    },
    template: `
        <div>       
            <header class="header center">
                <div class="header__left">
                    <img src="img/logo.svg" alt="logo">
                    <search></search>
                </div>
                <div class="header__right">
                    <img src="img/menu.svg" alt="menu">
                    <img src="img/account.svg" alt="account">
                    <cart ref="cart"></cart>
                </div>
            </header>
            <section class="page-info center">
                <h3>NEW ARRIVALS </h3>
                <nav class="breadcrumb">
                    <a class="breadcrumb__link" href="index.html">HОME</a>
                    <a class="breadcrumb__link" href="">MEN</a>
                    <a class="breadcrumb__link" href="">NEW ARRIVALS</a>
                </nav>
            </section>
            <div class="sort-box center">
                <div class="sort-box__filter">
                    <details class="filter">
                        <summary class="filter__name">FILTER <svg class="filter__img" width="15" height="10" viewBox="0 0 15 10"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                    fill="black" />
                            </svg></summary>
                        <details open>
                            <summary class="filter__category">CATEGORY</summary>
                            <ul class="filter__ul">
                                <li><a class="filter__link" href="#">Accessories</a></li>
                                <li><a class="filter__link" href="#">Bags</a></li>
                                <li><a class="filter__link" href="#">Denim</a></li>
                                <li><a class="filter__link" href="#">Hoodies & Sweatshirts</a></li>
                                <li><a class="filter__link" href="#">Jackets & Coats</a></li>
                            </ul>
                        </details>
                        <details>
                            <summary class="filter__category">CATEGORY</summary>
                            <ul class="filter__ul">
                                <li><a class="filter__link" href="#">Accessories</a></li>
                                <li><a class="filter__link" href="#">Bags</a></li>
                                <li><a class="filter__link" href="#">Denim</a></li>
                                <li><a class="filter__link" href="#">Hoodies & Sweatshirts</a></li>
                                <li><a class="filter__link" href="#">Jackets & Coats</a></li>
                            </ul>
                        </details>
                    </details>
                </div>
                <div class="sort">
                    <details class="sort__details">
                        <summary class="sort__summary">TRENDING NOW <img class="sort__arrow" src="img/sort-arrow.svg"
                                alt="sort"></summary>
                    </details>
                    <details class="sort__details">
                        <summary class="sort__summary">SIZE <img class="sort__arrow" src="img/sort-arrow.svg" alt="sort">
                        </summary>
                        <div class="sort__info">
                            <label class="sort__label"><input type="checkbox"> XS</label>
                            <label class="sort__label"><input type="checkbox"> S</label>
                            <label class="sort__label"><input type="checkbox"> L</label>
                            <label class="sort__label"><input type="checkbox"> XL</label>
                        </div>
                    </details>
                    <details class="sort__details">
                        <summary class="sort__summary">PRICE <img class="sort__arrow" src="img/sort-arrow.svg" alt="sort">
                        </summary>
                    </details>
                </div>
            </div>
            
            <products ref="products"></products>
            <error ref="error"></error>    
                
            <footer class="footer">
                <section class="subscribe center">
                    <div class="subscribe__left"></div>
                    <div class="subscribe__right">
                        <h3>subscribe</h3>
                        <p>FOR OUR NEWLETTER AND PROMOTION</p>
                        <form class="subscribe__form" action="">
                            <input placeholder="email text" class="subscribe__input" type="email"><button
                                class="subscribe__button">Subscribe</button>
                        </form>
                    </div>
                </section>
                <div class="footer__bottom center">
                    <p>© 2021 Brand All Rights Reserved.</p>
                    <div class="icons">
                        <a href="#" class="icons__item">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    `
};

export default app;
