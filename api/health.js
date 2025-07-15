module.exports = async function (context, req) {
    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            hosting: 'Azure Static Web Apps',
            location: process.env.WEBSITE_SITE_NAME || 'global',
            message: 'No VM quotas required!',
            deployment: 'GitHub Actions CI/CD'
        }
    };
};
