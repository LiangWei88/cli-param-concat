# CLI Param Concat 
Command Line Parameter Management Concatenation Tool

[中文文档](./README.zh-CN.md)

**Background**

In daily development, dealing with command-line tools often involves entering numerous parameters manually. Manually inputting these parameters is both tedious and error-prone. CLI Param Concat aims to streamline this process by automatically concatenating parameters from a file into a command, enhancing developer efficiency.

**Problems Addressed**

1. **Cumbersome Parameter Management:** Manually entering a large number of command-line parameters is error-prone and inconvenient to manage.
2. **Repetitive Tasks:** When running similar commands frequently, entering the same parameters repeatedly is inefficient and hinders debugging.

**Approach**

CLI Param Concat is written in Node.js and functions by reading specified parameter files and concatenating the parameters into a user-defined command. Users can easily manage and execute complex command-line tasks with a simple command call.

**Installation**

Install CLI Param Concat globally:

```bash
npm install -g cli-param-concat
```

**Usage**

```bash
clipc <your-command> <params-file>
```

- `<your-command>`: Specify the command to run.
- `<params-file>`: Provide the path to the text file containing parameters.

**Example**

Assuming you have a parameter file `deploy-params.txt` with the following content:

```plaintext
--env production
--port 8080
--config config.prod.json
```

Run the following command:

```bash
clipc deploy-command deploy-params.txt
```

CLI Param Concat will execute `deploy-command --env production --port 8080 --config config.prod.json`.