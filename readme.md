```
microbundle [entries..]

Build once and exit

Commands:
  cli.js build [entries..]  Build once and exit             [default]
  cli.js watch [entries..]  Rebuilds on any change

Options:
  --version        Show version number                      [boolean]
  --entry, -i      Entry module(s)
                                 [string] [default: <package.module>]
  --output, -o     Directory to place build files into
                  [string] [default: <dirname(package.main), build/>]
  --cwd            Use an alternative working directory
                                                [string] [default: .]
  --format         Only build specified formats
                                       [string] [default: es,cjs,umd]
  --target         Specify your target environment
                                             [string] [default: node]
  --compress       Compress output using UglifyJS
                                            [boolean] [default: true]
  --strict         Enforce undefined global context and add "use
                   strict"                           [default: false]
  --name           Specify name exposed in UMD builds        [string]
```