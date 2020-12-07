import navLogo from '../../img/general/logo-icon/ms-icon-70x70.png';
import footerLogo from '../../img/general/logo-icon/ms-icon-144x144.png';

class insertNavFooter {
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
        <div class="nav_top">
            <div class="nav_top-container container">
                <div class="nav_top-logo nav_top-box">
                    <a href="index.html">
                        <img src="${navLogo}" alt="Music Site Logo">
                        <h1>Music Site</h1>
                    </a>
                </div>
                <div class="nav_top-search nav_top-box">
                    <button class="nav_top-search-button">
                        <ion-icon name="search"></ion-icon>
                    </button>
                    <input type="text" placeholder="Search here..." class="nav_top-search-bar">
                </div>
                <div class="nav_top-phoneNumber nav_top-box">
                    <div class="nav_top-phoneNumber-icon">
                        <ion-icon name="call-outline"></ion-icon>
                    </div>
                    <p>
                        (123)456-7890
                    </p>
                </div>
                <div class="nav_top-cart nav_top-box">
                    <div class="nav_top-cart-icon">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav_bot">
            <div class="nav_bot-container container">
                <div class="nav_bot-category">
                    Shop
                </div>
                <div class="nav_bot-new">
                    New Items
                </div>
                <div class="nav_bot-sale">
                    On Sale
                </div>
                <div class="nav_bot-news">
                    News
                </div>
                <div class="nav_bot-support">
                    Support
                </div>
                <div class="nav_bot-more">
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
        <div class="footer_container container">
            <div class="footer_logo">
                <a href="index.html">
                    <img src="${footerLogo}" alt="MS Logo">
                    <h1>Music Site</h1>
                </a>
            </div>
            <div class="footer_nav">
                <div class="footer_nav-titles">
                    <h3>Shop</h3>
                    <ul class="footer_nav-titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer_nav-titles">
                    <h3>New Items</h3>
                    <ul class="footer_nav-titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer_nav-titles">
                    <h3>On Sale</h3>
                    <ul class="footer_nav-titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer_nav-titles">
                    <h3>News</h3>
                    <ul class="footer_nav-titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer_nav-titles">
                    <h3>Support</h3>
                    <ul class="footer_nav-titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
                <div class="footer_nav-titles">
                    <h3>More</h3>
                    <ul class="footer_nav-titles-list">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                        <li>item-4</li>
                        <li>item-5</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer_legal">
            <div class="footer_legal-container">
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

export default new insertNavFooter();
