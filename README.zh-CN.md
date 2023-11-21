# CLI Param Concat 命令行参数管理拼接工具

<!-- TOC -->

**业务背景**

在日常开发中，使用命令行工具时经常面临大量参数的输入。手动输入这些参数既繁琐又容易出错。CLI Param Concat 旨在通过从文件中读取参数并自动拼接到命令中，提高开发者的效率。

**解决的问题**

1. **参数管理繁琐：** 手动输入大量命令行参数容易出错，不便于管理。
2. **重复工作：** 频繁运行相似的命令时，重复输入相同的参数效率低下，也不利于调试。

**解决思路**

CLI Param Concat 使用 Node.js 编写，通过读取指定的参数文件，将文件中的参数拼接到用户指定的命令中。用户只需简单的命令调用，即可轻松管理和执行复杂的命令行任务。

**安装**

全局安装 CLI Param Concat：

```bash
npm install -g cli-param-concat
```

**使用方法**

```bash
clipc <your-command> <params-file>
```

- `<your-command>`: 指定要运行的命令。
- `<params-file>`: 包含参数的文本文件路径。

**例子**

假设你有一个参数文件 `deploy-params.txt` 包含以下内容：

```plaintext
--env production
--port 8080
--config config.prod.json
```

运行以下命令：

```bash
clipc deploy-command deploy-params.txt
```

CLI Param Concat 将会执行 `deploy-command --env production --port 8080 --config config.prod.json`。
