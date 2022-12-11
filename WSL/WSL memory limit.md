
https://devblogs.microsoft.com/commandline/memory-reclaim-in-the-windows-subsystem-for-linux-2/


https://learn.microsoft.com/en-us/windows/wsl/release-notes#build-18945





Workaround: Create a `%UserProfile%\.wslconfig` file in Windows and use it to limit memory assigned to WSL2 VM.

## Example

```
[wsl2]
memory=6GB
swap=0
localhostForwarding=true
```

This will still consume the entire 6GBs regardless of Linux memory usage, but at least it'll stop growing more than that.

Supported settings are documented [here](https://docs.microsoft.com/en-us/windows/wsl/release-notes#build-18945).



You can check how much memory and swap space are allocated to WSL using the `free` command from within a WSL distribution:
```
free -h --giga
```


## Table of Contents

1.  [1. Create .wslconfig](https://www.aleksandrhovhannisyan.com/blog/limiting-memory-usage-in-wsl-2/#1-create-wslconfig)
2.  [2. Restart WSL](https://www.aleksandrhovhannisyan.com/blog/limiting-memory-usage-in-wsl-2/#2-restart-wsl)
3.  [3. Verify That WSL Respects .wslconfig](https://www.aleksandrhovhannisyan.com/blog/limiting-memory-usage-in-wsl-2/#3-verify-that-wsl-respects-wslconfig)

## [1. Create `.wslconfig`](https://www.aleksandrhovhannisyan.com/blog/limiting-memory-usage-in-wsl-2/#1-create-wslconfig)

You can tell WSL 2 how much RAM, swap space, CPU cores, and other resources it should allocate by creating a special `.wslconfig` file under your Windows user profile directory (`C:\Users\YourUsername\.wslconfig`). On launch, WSL will read this file if it exists and configure itself accordingly.

There are two ways you can create this file:

1.  Using WSL itself.
2.  Using cmd/PowerShell/whatever in Windows.

If you go with the second option, you may run into a problem where [WSL does not respect `.wslconfig`](https://superuser.com/a/1697991/910187) due to the presence of BOM headers and, in some cases, CRLF line endings. If you use a Windows editor like Notepad, you may later need to reformat the `.wslconfig` file using the `dos2unix` command-line utility.

To make your life easier, I recommend creating and editing the file with WSL directly. You can do this using the [`wslpath` command](https://devblogs.microsoft.com/commandline/windows10v1803/#interoperability) that ships with WSL, like this:

```plaintext
editor "$(wslpath "C:\Users\YourUsername\.wslconfig")"
```

Replace `YourUsername` with your Windows username as it appears in the file system.

Refer to the Microsoft docs on [configuration settings for `.wslconfig`](https://docs.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) if you need help with this step. Below is the config that I’m currently using for my machine since I don’t have a lot of RAM to work with:

```bash
[wsl2]
memory=3GB
```

While this tutorial focuses on limiting memory usage, you can configure any other options that you want in this file; see the docs for the full list of available settings. Save and close the file when you’re finished.

## [2. Restart WSL](https://www.aleksandrhovhannisyan.com/blog/limiting-memory-usage-in-wsl-2/#2-restart-wsl)

You can either close out of WSL manually and wait a few seconds for it to fully shut down, or you could launch Command Prompt or PowerShell and run the following command to forcibly shut down all WSL distributions:

```plaintext
wsl --shutdown
```

Relaunch your WSL distribution when this command finishes executing.

## [3. Verify That WSL Respects `.wslconfig`](https://www.aleksandrhovhannisyan.com/blog/limiting-memory-usage-in-wsl-2/#3-verify-that-wsl-respects-wslconfig)

Finally, run the `free` command again to verify that WSL respects your specified resource limits:

```plaintext
              total        used        free      shared  buff/cache   available
Mem:           3.1G        361M        2.5G         69K        158M        2.5G
Swap:          1.0G          0B        1.0G
```

You can also use any other Linux commands to check your resource usage, like `top` or `htop`.


https://itnext.io/wsl2-tips-limit-cpu-memory-when-using-docker-c022535faf6f

https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wsl-2-settings

