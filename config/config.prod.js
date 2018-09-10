exports.logger = {
    level: 'DEBUG',
    dir: '/data/logs/owe-egg',
};

exports.cluster = {
    listen: {
        port: 9200,
        hostname: '0.0.0.0',
    }
}