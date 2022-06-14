var ghpages = require('gh-pages');

ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Anthony2be/Anthony2be.github.io.git', // Update to point to your repository  
        user: {
            name: 'Anthony2be', // update to use your name
            email: 'adubovitsky1234@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)