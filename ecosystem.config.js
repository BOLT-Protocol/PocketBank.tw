module.exports = {
  apps : [{
    name: 'PocketBank.tw',
    script: 'bin/main.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '3.112.122.9',
      key:`${process.env.HOME}/.ssh/APLO.pem`,
      ref  : 'origin/master',
      repo : 'git@github.com:BOLT-Protocol/PocketBank.tw.git',
      path : '/etc/workspace',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
