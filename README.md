# Solana Twitter

## General Info

This is a modern verion of a popular [solana-twitter]() app, made
in 2021 by **Loris Leiva**. For some reason, author is no longer
updates this series of articles, so it is now outdated.

So I did some work to bring the project back to life.
This work includes:

- migrating to newer / safer versions of libraries used
- minor bug and logic fixes
- updating code to latest version of Anchor (0.30 and newer).

Feel free to examine and learn something new. If this helps you, 
please don't forget to give me a star on GitHub.

## Episodic Notes

### Episode 6
TODO

### Episode 7
TODO

### Episode 8
TODO

### Episode 9
Before you try to do something in this episode: **Don't forget to run 
`solana-test-validator` to start the local ledger and 
`anchor run test` to get access to the the tweets from the tests!**

Honestly, for me it was a challenge to get things done here. For
some reasons, I was constantly getting the exact same error:

```
index.js:5065 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'size')
    at new AccountClient (index.js:5065:39)
    at eval (index.js:5030:30)
    at Array.reduce (<anonymous>)
    at AccountFactory.build (index.js:5029:70)
    at NamespaceFactory.build (index.js:6219:51)
    at new Program (index.js:6320:97)
    at eval (useWorkspace.js:16:1)
    at ReactiveEffect.eval [as fn] (reactivity.esm-bundler.js:987:44)
    at ReactiveEffect.run (reactivity.esm-bundler.js:238:19)
    at get value (reactivity.esm-bundler.js:994:147)
```

However, these are the changes to the original episode that will do
the job:

File: `useWorkspase.js`
```diff
- new Program(idl, programID, provider.value));
+ new Program(idl, provider.value));
```

As it turns out, the constructor of the `Program` class has changed,
but the contributors of Anchor didn't reflect that change in the
documentation (I didn't find any mention of this in the official
CHANGELOG either). 
