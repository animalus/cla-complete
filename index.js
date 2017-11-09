const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage');

class CLA {
    constructor(argDefs, title, description) {
        this.argDefs = argDefs;
        this.argDefs.push({
            name: 'help',
            alias: 'h',
            type: Boolean,
        });
        this.title = title;
        this.description = description;
    }

    usage(code) {
        const sections = [
            {
                header: this.title,
                content: this.description
            },
            {
                header: 'Options',
                optionList: this.argDefs
            }
        ];
        console.log(getUsage(sections));
        process.exit(code);
    }

    parse() {
        try {
            const options = commandLineArgs(this.argDefs);
            if (options.help) {
                this.usage(0);
            }

            for (const argDef of this.argDefs) {
                if (argDef.required && ! options[argDef.name]) {
                    console.log(`Missing required parameter [${argDef.name}]`);
                    this.usage(1);
                }
            }
            return options;
        } catch (ex) {
            console.log(ex.message);
            console.log("Usage:")
            this.usage(1);
        }
    }
}

export function cla(argDefs, title, description) {
    return new CLA(argDefs, title, description).parse();
}
