# frontplate-cli

This CLI is still beta version.

## Usage

```
npm i frontplate-cli -g
```

## Command

### Create project
```
frp create <APP_NAME> [options]
```

options

- -p, --preset: Preset template([default](https://github.com/frontainer/frontplate),[wp](https://github.com/frontainer/wp-frontplate))

### Build project

```
frp build
```

options

- -p, --production

### Server up

```
frp serve [options]
```

options

- -p, --production

### Execute task

```
frp task <TASK_NAME>
```

TASK_NAME(clean,copy,html,image,script,server,sprite,style,test)

### Create config files

```
frp init
```