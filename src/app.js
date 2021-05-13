var app = new Vue ({
    el: '#root',
    data: {
        navbar: [
            {
                navitem: 'Home' 
            },
            {
                navitem: 'About Me' 
            },
            {
                navitem: 'Testimonials' 
            },
            {
                navitem: 'My Blog' 
            },
            {
                navitem: 'Meetups' 
            },
            {
                navitem: 'Shop' 
            },
            {
                navitem: 'Contact Me' 
            }
        ],

        // Loghi App
        appLogo: [
            {
                imgFile: '/ebay-logotan-2x.png'
            },
            {
                imgFile: '/audible-logotan-2x.png'
            },
            {
                imgFile: '/bb-logotan-2x.png'
            },
            {
                imgFile: '/kindlefire-logotan-2x.png'
            }
        ],

        // Audiobook
        logoBook: [
            {
                logoFile: '/audible-logo.png' 
            },
            {
                logoFile: '/bn-logo-tall.png' 
            },
            {
                logoFile: '/kindle-logo-tall.png' 
            }
        ],

        // Useful links
        usefulLink : [
            {
                link: 'Latest Books'
            },
            {
                link: 'Upcoming Events'
            },
            {
                link: 'Recent Articles'
            },
            {
                link: 'Business Enquiries'
            },
            {
                link: 'Visit my foundation'
            }
        ],

        // Contact Info
        contact: [
            {
                info: '63 E. Studebaker Street Bolingbrook, IL 60440'
            },
            {
                info: 'Phone: (800)000-000'
            },
            {
                info: 'Mobile: (800)000-000'
            },
            {
                info: 'Email: info@your-company.com'
            },
        ]
    },
    methods: {

    },
    mounted() {
        
    }
});