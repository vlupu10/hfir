module.exports = {
    framework: 'karma', // or 'jest'
    templates: {
        klass: klassTemplate, // ejs contents read from file
        component: componentTemplate,
        directive: directiveTemplate,
        injectable: injectableTemplate,
        pipe: pipeTemplate
    },
    // necessary directives used for a component test
    directives: [
        'oneviewPermitted'
    ],
    // necessary pipes used for a component test
    pipes: [
        'translate', 'phoneNumber', 'safeHtml'
    ],
    // when convert to JS, some codes need to be replaced to work 
    replacements: [ // some 3rd party module causes an error
        { from: 'require\\("html-custom-element"\\)', to: '{}' },
        { from: '^\\S+\\.define\\(.*\\);', to: '' } // some commands causes error
    ],
    // when constructor param type is as following, create a mock class with this properties
    // e.g. @Injectable() MockElementRef { nativeElement = {}; }
    providerMocks: {
        ElementRef: ['nativeElement = {};'],
        Router: ['navigate() {};'],
        Document: ['querySelector() {};'],
        HttpClient: ['post() {};'],
        TranslateService: ['translate() {};'],
        EncryptionService: [],
    },
    // when ngentest runs with a directory, include only these files
    includeMatch: [/(component|directive|pipe|service).ts/],
    // when ngentest runs with a directory, exclude these files
    excludeMatch: []
}