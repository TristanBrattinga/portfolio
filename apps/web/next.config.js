const securityHeaders = [
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
    {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self'; object-src 'none'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'self';",
    },
]

module.exports = {
    transpilePackages: ['ui'],

    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/:path*',
                headers: securityHeaders,
            },
        ]
    },
}
