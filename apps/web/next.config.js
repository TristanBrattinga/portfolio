const securityHeaders = [
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block",
    },
]

module.exports = {
    transpilePackages: ["ui"],

    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: "/:path*",
                headers: securityHeaders,
            },
        ]
    },

}
