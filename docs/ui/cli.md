---
sidebar_position: 1
---

# 命令行使用

> 需要 java11 及以上运行环境


## indigo

```bash title="java -jar indigo.jar"
 _         _ _
(_)_ _  __| (_)__ _ ___
| | ' \/ _` | / _` / _ \
|_|_||_\__,_|_\__, \___/
              |___/

用法:
indigo [-hVv] [-c=file] [command]

描述:
适用于 Web,Android 的自动化工具...

选项:
  -c, --config=file   通过配置文件启动, 待实现.
                      如果指定了配置文件其他子命令将忽略.
  -v, --verbose       指定多个 -v 选项以打印更多调试信息. 比如, `-v -v -v` or
                        `-vvv`.
  -h, --help          显示帮助信息并退出.
  -V, --version       显示版本信息并退出.

命令:
  karate    运行原生karate指令
  chrome    托管多个chrome来进行UI自动化
  electron  Electron应用UI自动化
  monkey    运行monkey任务
  android   Android 自动化

```

## karate

```bash title="java -jar indigo.jar karate -h"
运行原生karate指令

用法:
indigo karate [-CDhVv] [-e=env] [-g=dir] [-n=name] [-o=<output>] [-T=<threads>]
              [-w=dir] [-f=format[,format...]]... [-t=tag]... [path...]

描述:
运行原生karate指令

参数:
      [path...]             要运行的一个或多个`features`文件路径或搜索目录. 如果
                              不填则搜索`工作目录`.

选项:
  -t, --tags=tag            仅运行指定标签的场景. 例: '@smoke,~@ignore'.
  -T, --threads=<threads>   运行测试用例的并发线程数.
  -o, --output=<output>     日志和报告的输出目录. 默认是`target`.
  -f, --format=format[,format...]
                            报告输出格式, 多个使用`,`分隔. `~`排除特定的格式. 默
                              认输出html报告. 例: '-f json,cucumber:json,junit:
                              xml. 支持的格式: [html: Karate HTML, json: Karate
                              JSON, cucumber:json: Cucumber JSON, junit:xml:
                              JUnit XML]
  -n, --name=name           场景名称.
  -e, --env=env             'karate.env'的值.
  -w, --workdir=dir         工作目录, 默认是`.`即当前目录.
  -g, --configdir=dir       'karate-config.js'的目录 (默认 `classpath:` 或 `工作
                              目录`)
  -C, --clean               清理输出文件夹.
  -D, --dryrun              仅生成报告.
  -v, --verbose             指定多个 -v 选项以打印更多调试信息. 比如, `-v -v
                              -v` or `-vvv`.
  -h, --help                显示帮助信息并退出.
  -V, --version             显示版本信息并退出.
```

## chrome

```bash title="java -jar indigo.jar chrome -h"
托管多个chrome来进行UI自动化

用法:
indigo chrome [-hsVv] [--disable-proxy] [--enable-push-logs]
              [--enable-push-screen] [--enable-push-status] [--enable-server]
              [--headless] [--not-remove-user-data-dir] [--core-count=num]
              [--init-count=num] [--max-count=num] [-p=port] [--push-ip=ip]
              [--push-port=port] [--push-status-interval=secs] [--push-url=url]
              [--user-data-dir=dir] [--user-data-dir-prefix=dir]
              [--vnc-pass=***] [--vnc-ws-port=port] [--options=option[,
              option...]]... [--remote-debugging-port=port[,port...]]...

描述:
托管多个chrome来进行UI测试

选项:
  -p, --server-port=port     本地服务端口. 默认: 8080.
      --enable-server        启动本地服务. 默认启动.
  -s, --start                启动新的浏览器实例. 默认 true. 如果是 `false`, 则会
                               尝试连接`--remote-debugging-port`指定的端口号实
                               例.
      --init-count=num       初始启动的浏览器数量, 默认1个.
      --core-count=num       保持活跃的浏览器数量, 默认1个.
      --max-count=num        允许启动的最大浏览器数量, 默认1个.
      --remote-debugging-port=port[,port...]
                             浏览器远程调试端口, 默认: [9222]. 如果
                               'start=true' 并且仅有一个实例需要启动的时候这个这
                               个选项才有效. 如果 'start=false', 会直接连接到这
                               些端口列表.
      --user-data-dir=dir    浏览器用户目录, 仅启动一个实例时有效
      --not-remove-user-data-dir
                             浏览器关闭时不删除用户目录下的数据
      --user-data-dir-prefix=dir
                             浏览器用户目录前缀, 启动多个浏览器时需要. 默认是
                               `target`目录.
      --headless             启动无头浏览器.
      --options=option[,option...]
                             其他的浏览器启动选项. 例: '--options "--incognito,
                               --mute-audio,--use-fake-ui-for-media-stream,
                               --use-fake-device-for-media-stream"'.
      --disable-proxy        关闭本地代理, 浏览仅允许本地访问, 通过代理可以远程
                               访问, 默认开启.
      --vnc-pass=***         VNC密码. 如果本地启动了 VNC 服务器, 可通过本服务在
                               浏览器中访问
      --vnc-ws-port=port     本地 websockify 端口号. 默认: 5901. Websocket 代
                               理, 通过 noVnc 访问远程桌面.
      --push-ip=ip           本地IP地址, 用于推送到服务器.
      --push-port=port       本地端口号, 用于推送到服务器.
      --push-url=url         服务器连接串, 用于推送信息和接收控制指令, 消息协议
                               请查看文档. 支持四种传输协
                               议:'http','ws','tcp','unix'. 例: `unix:
                               ///var/run/indigo.sock`, `tcp://192.168.1.1:
                               8080`.
      --enable-push-status   开启推送浏览器状态信息到服务器.
      --enable-push-screen   开启推送浏览器屏幕截图到服务器.
      --push-status-interval=secs
                             推送浏览器状态信息的时间间隔, 默认: 30 秒, 屏幕截图
                               间隔为该时间5倍.
      --enable-push-logs     开启推送日志信息, 日志信息包括 Chrome DevTools
                               Protocol 的命令信息和脚本的执行信息.
  -v, --verbose              指定多个 -v 选项以打印更多调试信息. 比如, `-v -v
                               -v` or `-vvv`.
  -h, --help                 显示帮助信息并退出.
  -V, --version              显示版本信息并退出.
```

## electron

```bash title="java -jar indigo.jar electron -h"
Electron应用UI自动化

用法:
indigo electron [-hVv] [--enable-proxy] [--enable-push-logs]
                [--enable-push-screen] [--enable-push-status] [--enable-server]
                [--debugger-url=url] [-p=port] [--push-ip=ip]
                [--push-port=port] [--push-status-interval=secs]
                [--push-url=url] [--remote-debugging-port=port]
                [--start-url=url]

描述:
托管 Electron 应用

选项:
  -p, --server-port=port     本地服务端口. 默认: 8080.
      --enable-server        启动本地服务. 默认启动.
      --debugger-url=url     Websocket url 地址.
      --start-url=url        需要调试的页面标题.
      --remote-debugging-port=port
                             远程调试端口, 默认: 9221.
      --enable-proxy         开启本地代理, 浏览器仅允许本地访问, 通过代理可以远
                               程访问, 默认开启.
      --push-ip=ip           本地IP地址, 用于推送到服务器.
      --push-port=port       本地端口号, 用于推送到服务器.
      --push-url=url         服务器连接串, 用于推送信息和接收控制指令, 消息协议
                               请查看文档. 支持四种传输协
                               议:'http','ws','tcp','unix'. 例: `unix:
                               ///var/run/indigo.sock`, `tcp://192.168.1.1:
                               8080`.
      --enable-push-status   开启推送浏览器状态信息到服务器.
      --enable-push-screen   开启推送浏览器屏幕截图到服务器.
      --push-status-interval=secs
                             推送浏览器状态信息的时间间隔, 默认: 30 秒, 屏幕截图
                               间隔为该时间5倍.
      --enable-push-logs     开启推送日志信息, 日志信息包括 Chrome DevTools
                               Protocol 的命令信息和脚本的执行信息.
  -v, --verbose              指定多个 -v 选项以打印更多调试信息. 比如, `-v -v
                               -v` or `-vvv`.
  -h, --help                 显示帮助信息并退出.
  -V, --version              显示版本信息并退出.
```

## android

```bash title="java -jar indigo.jar android -h"
Android 自动化

用法:
indigo android [-hVv] [--always-on-top] [--disable-appium-server]
               [--disable-display] [--disable-scrcpy]
               [--disable-scrcpy-control] [--enable-appium-http]
               [--enable-appium-mjpeg] [--adb-host=host] [--adb-interval=secs]
               [--adb-path=path] [--adb-port=port] [--apk=path]
               [--appium-http-port=port] [--appium-mjpeg-port=port]
               [--bit-rate=num] [--display-id=num] [--max-fps=num] [-p=port]
               [-s=s] [--socket-name=name] [--window-width=num]

描述:
android 自动化

选项:
  -p, --server-port=port     本地服务端口. 默认: 8080.
      --adb-host=host        adb server 的地址. 默认: localhost.
      --adb-port=port        adb server 的端口. 默认: 5037.
      --adb-path=path        adb程序的完整路径地址. 默认使用环境变量中的`adb`.
      --apk=path             要推送的apk文件路径. 默认使用打包好的.
  -s, --serial=s             仅链接指定的序列号设备.
      --adb-interval=secs    设备检查间隔. 默认: 5 秒.
      --disable-display      禁用设备屏幕镜像窗口.
      --always-on-top        使镜像窗口不被其他窗口覆盖.
      --window-width=num     窗口初始宽度. 默认: 280.
      --socket-name=name     Local socket 名称. 默认: asura.
      --disable-appium-server
                             禁用 appium 服务.
      --enable-appium-http   启用原生的 appium http 服务.
      --appium-http-port=port
                             appium http 服务端口号. 默认: 6790.
      --enable-appium-mjpeg  启用原生的 appium mjpeg 服务.
      --appium-mjpeg-port=port
                             appium mjpeg 服务端口号. 默认: 7810.
      --disable-scrcpy       禁用屏幕镜像.
      --disable-scrcpy-control
                             禁用远程控制.
      --bit-rate=num         指定视频码率 bits/s. 默认: 8000000.
      --max-fps=num          最大帧数, Android 10 及以上有效.
      --display-id=num       要镜像的设备显示器id. 默认: 0.
  -v, --verbose              指定多个 -v 选项以打印更多调试信息. 比如, `-v -v
                               -v` or `-vvv`.
  -h, --help                 显示帮助信息并退出.
  -V, --version              显示版本信息并退出.
```
