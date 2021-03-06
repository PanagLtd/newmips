const globalConf = require('./global');

let config = {
    develop: {
        doGit: false, // Should the application try to push your app on a repository ?
        protocol: "http",
        url: "", // Your gitlab url
        sshUrl: "", // Something like git@yourgitlaburl
        useSSH: true, // Todo HTTP non handled for now
        adminUser: "", // Gitlab admin user
        privateToken: "" // Gitlab private token
    },
    recette: {
        doGit: false,
        protocol: "http",
        url: "",
        sshUrl: "",
        useSSH: true,
        adminUser: "",
        privateToken: ""
    },
    production: {
        doGit: false,
        protocol: "http",
        url: "",
        sshUrl: "",
        useSSH: true,
        adminUser: "",
        privateToken: ""
    },
    docker: {
        doGit: false,
        protocol: "http",
        url: "",
        sshUrl: "",
        useSSH: true,
        adminUser: "",
        privateToken: ""
    },
    cloud: {
        doGit: true,
        protocol: "http",
        url: process.env.GITLAB_HOME,
        sshUrl: "git@gitlab." + process.env.DOMAIN_STUDIO,
        useSSH: true,
        adminUser: process.env.GITLAB_LOGIN,
        privateToken: process.env.GITLAB_PRIVATE_TOKEN
    }
}

module.exports = config[globalConf.env];
