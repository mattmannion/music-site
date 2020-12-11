import InsNavFooter from './views/insNavFooter';

// library imports
import 'core-js/stable';
import 'regenerator-runtime/runtime';

function init() {
    // Persistant Navigation and Footer on all pages
    InsNavFooter.insertNavigation();
    InsNavFooter.insertFooter();
}

init();
