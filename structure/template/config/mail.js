var globalConf = require('./global');

var mailConf = {
    develop: {
        transport: {
            host: 'mail',
            port: 465,
            secure: true,
            auth: {
                user: '',
                pass: ''
            }
        },
        expediteur: 'Newmips App <no-reply@newmips.com>',
        administrateur: 'Responsable Newmips <contact@newmips.com>',
        host: 'http://127.0.0.1:' + globalConf.port
    },
    recette: {
        transport: {
            host: 'mail',
            port: 465,
            secure: true,
            auth: {
                user: '',
                pass: ''
            }
        },
        expediteur: 'Newmips App <no-reply@newmips.com>',
        administrateur: 'Responsable Newmips <contact@newmips.com>',
        host: 'https://cloud.newmips.com:'
    },
    production: {
        transport: {
            host: 'mail',
            port: 465,
            secure: true,
            auth: {
                user: '',
                pass: ''
            }
        },
        expediteur: 'Newmips App <no-reply@newmips.com>',
        administrateur: 'Responsable Newmips <contact@newmips.com>',
        host: 'https://cloud.newmips.com:' + globalConf.port
    },
    docker: {
        transport: {
            host: 'mail',
            port: 465,
            secure: true,
            auth: {
                user: '',
                pass: ''
            }
        },
        expediteur: 'Newmips App <no-reply@newmips.com>',
        administrateur: 'Responsable Newmips <contact@newmips.com>',
        host: 'https://cloud.newmips.com:' + globalConf.port
    }
}

module.exports = mailConf[globalConf.env];