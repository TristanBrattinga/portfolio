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
        value: `default-src 'self; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';img-src 'self' blob: data:;font-src 'self';object-src 'none';base-uri 'self';form-action 'self';frame-ancestors 'none';upgrade-insecure-requests;`,
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
