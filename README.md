# cla-complete

Library to combine the fantastic [command-line-args](https://www.npmjs.com/package/command-line-args) and [command-line-usage](https://www.npmjs.com/package/command-line-usage) modules for ease of use and to auto-add a help parameter.

## Usage

Example

```
import {cla} from 'cla-complete';

const argDefs = [
    {
        name: 'delimiter',
        alias: 'd',
        type: String,
        description: "Delimiter with which to split the filenames on.",
        required: true
    },
    {
        name: 'number',
        alias: 'n',
        type: Number,
        defaultValue: 1,
        description: "Occurrence number of delimiter to do the splitting (defaults to 1)"
    },
    {
        name: 'src',
        alias: 's',
        type: String,
        typeLabel: '[underline]{directory}',
        defaultOption: true,
        description: "Source directory of files.",
        required: true
    },
    {
        name: 'output',
        alias: 'o',
        type: String,
        typeLabel: '[underline]{directory}',
        description: "Output directory. Default is the src directory (i.e. folders will be made in place)"
    },
    {
        name: 'move',
        alias: 'm',
        type: Boolean,
        description: "Move files instead of copying them. Copy is the default."
    },
    {
        name: 'verbose',
        alias: 'v',
        type: Boolean,
    },
    {
        name: 'dryrun',
        type: Boolean
    },
    {
        name: 'force',
        alias: 'f',
        type: Boolean
    }
];

const options = cla(argDefs,
                    'Make Named Folders',
                    'Takes a set of filenames and splits them on a delimiter and makes folders out of the first part and moves the files into the new folder.');


```

Options are read in the same manner as ```command-line-args``` e.g. to read the -f param just do the following.

```
options.force
```

If you call the file with the ```--help``` parameter you get the following thanks to ```command-line-usage```.

```
Make Named Folders

  Takes a set of filenames and splits them on a delimiter and makes folders out
  of the first part and moves the files into the new folder.

Options

  -d, --delimiter string   Delimiter with which to split the filename on.
  -n, --number number      Occurrence number of delimiter to do the splitting (defaults to 1)
  -s, --src directory      Source directory of files.
  -o, --output directory   Output directory. Default is the src directory (i.e. folders will be made in
                           place)
  -m, --move               Move files instead of copying them. Copy is the default.
  -v, --verbose
  --dryrun
  -f, --force
  -h, --help
```
