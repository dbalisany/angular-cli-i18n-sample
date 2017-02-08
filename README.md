A modified version of the application showcased in [Deploying an i18n Angular app with angular-cli](https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358).

Translation messages are keyed and stored in the [src/i18n/lang](https://github.com/tsvetomir/angular-cli-i18n-sample/tree/master/src/i18n/lang) folder. They're then populated in the generated message files with [xlf-translate](https://github.com/tsvetomir/xlf-translate).

Run with:

`ng serve --aot --locale=es --i18n-file=src/i18n/messages.es.xlf --i18n-format=xlf`

Extract new messages with:

`npm run extract-i18n`

Populate keyed translated messages with:

`npm run translate-i18n`

