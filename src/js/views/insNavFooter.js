import navLogo from '../../img/general/logo-icon/ms-icon-70x70.png';
import footerLogo from '../../img/general/logo-icon/ms-icon-144x144.png';

class InsertNavFooter {
    _navElement = document.querySelector('.nav');
    _footerElement = document.querySelector('.footer');

    _clear(element) {
        element.innerHTML = '';
    }

    _insert(element, markup) {
        element.insertAdjacentHTML('afterbegin', markup);
    }

    insertNavigation() {
        const markup = `
        <div class="nav-top">
            <div class="nav-top__container">
                <div class="nav-top__logo">
                    <a href="../../index.html">
                        <img src="${navLogo}" alt="Music Site Logo">
                        <h1>Music Site</h1>
                    </a>
                </div>
                <div class="nav-top__search">
                    <button class="nav-top__search search-button">
                        <ion-icon name="search"></ion-icon>
                    </button>
                    <input type="text" placeholder="Search here..." class="nav-top__search search-bar">
                </div>
                <div class="nav-top__phone-cart-group">
                    <div class="nav-top__phone-number">
                        <ion-icon name="call-outline"></ion-icon>
                        <p>(123)456-7890</p>
                    </div>
                    <div class="nav-top__cart">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-bot">
            <div class="nav-bot__container">
                <div class="nav-bot__category">
                    <a href="../../html/products/item-page-master.html">Shop</a>
                </div>
                <div class="nav-bot__new">
                    <a href="../../html/business/search-view.html">New Items</a>
                </div>
                <div class="nav-bot__sale">
                    On Sale
                </div>
                <div class="nav-bot__news">
                    News
                </div>
                <div class="nav-bot__support">
                    Support
                </div>
                <div class="nav-bot__more">
                    More
                </div>
            </div>
        </div>
        `;

        this._clear(this._navElement);
        this._insert(this._navElement, markup);
    }

    insertFooter() {
        const markup = `
        <div class="footer__container">
            <div class="footer__logo">
                <a href="../../index.html">
                    <img src="${footerLogo}" alt="MS Logo">
                    <h1>Music Site</h1>
                </a>
            </div>
            <div class="footer-nav">
                <div class="footer-nav__titles">
                    <h3>Shop</h3>
                    <ul class="footer-nav__titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer-nav__titles">
                    <h3>New Items</h3>
                    <ul class="footer-nav__titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer-nav__titles">
                    <h3>On Sale</h3>
                    <ul class="footer-nav__titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer-nav__titles">
                    <h3>News</h3>
                    <ul class="footer-nav__titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer-nav__titles">
                    <h3>Support</h3>
                    <ul class="footer-nav__titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer-nav__titles">
                    <h3>More</h3>
                    <ul class="footer-nav__titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-legal">
            <div class="footer-legal__container">
                <p>copyright things</p>
                <p>copyright things</p>
                <p>copyright things</p>
            </div>
        </div>
        `;

        this._clear(this._footerElement);
        this._insert(this._footerElement, markup);
    }
}

export default new InsertNavFooter();
