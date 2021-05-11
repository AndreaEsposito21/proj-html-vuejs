var app = new Vue ({
    el: '#root',
    data: {
        navbar: [
            { navitem: 'Home' },
            { navitem: 'About Me' },
            { navitem: 'Testimonials' },
            { navitem: 'My Blog' },
            { navitem: 'Meetups' },
            { navitem: 'Shop' },
            { navitem: 'Contact Me' },
            { navitemImg: 'shopping-cart.svg' }
        ],

        appLogo: [
            { imgFile: '/ebay-logotan-2x.png'},
            { imgFile: '/audible-logotan-2x.png'},
            { imgFile: '/bb-logotan-2x.png'},
            { imgFile: '/kindlefire-logotan-2x.png'}
        ],

        logoBook: [
            { logoFile: '/audible-logo.png' },
            { logoFile: '/bn-logo-tall.png' },
            { logoFile: '/kindle-logo-tall.png' }
        ]
    },
    methods: {

    },
    mounted() {
        
    }
});