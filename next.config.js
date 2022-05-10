const path = require('path')
const withSass = require('@zeit/next-sass');
const withTM = require('next-transpile-modules')(['gsap']);
module.exports = withTM();
module.exports = withSass({
/* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
cssModules: true
})
module.exports = {
    /* Add Your Scss File Folder Path Here */
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        loader: 'imgix',
        path: '/',
    },
    trailingSlash: true,
}
// module.exports = {
//     images: {
//       domains: ['configs.STRAPI_DOMAIN'],
//     },
//   };