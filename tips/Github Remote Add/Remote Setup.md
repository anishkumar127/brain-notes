# Add

```command
git remote add origin https://github.com/anishkumar127/brain-notes.git
```


#  Check Remote 

```command
git remote -v
```


## Result 
```text
origin  https://github.com/anishkumar127/brain-notes.git (fetch)
origin  https://github.com/anishkumar127/brain-notes.git (push)
```


## Set To Upstream

  ### Error
 - when git push error
>fatal: The current branch main has no upstream branch.
  To push the current branch and set the remote as upstream,

-  to fix this command
>  git push --set-upstream origin main

- Before git push to upstream

- Do pull request 
> git pull


- but git pull not work. for that command
`` git pull <remote> <branch``

> ``ex. git pull https://github.com/anishkumar127/brain-notes.git main``




## Noob Case

- In case not working all of this. yeah my case also not working so what is did.
> git push -f origin main

- its ok when u are tying to create fresh repo. but u have already ur repo before then don't use this ever. it will broken ur entire repo.



> but after that next push it will also not work. so what we can do now ?

do again this cmd 
>git push --set-upstream origin main

