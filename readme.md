# Cross-platform hostname

On Linux and macOS, your hostname can be a fully-qualified domain name (e.g., `my-linux-laptop.small-tech.org`). This can be used, for example, as an intelligent default for setting up a staging server and automatically provisioning TLS certificates.

On Windows 10, however, the situation is (of course, because Windows) different. Your hostname, as returned by `os.hostname()` in Node is just your computer name (e.g., `my-linux-laptop`).

To get the equivalent of a usable hostname as under Linux or macOS, you have to jump through a few hoops to set your primary DNS suffix, which is then combined with your hostname to give you your full computer name (or what we would call your hostname on Linux or macOS).

If you adhere to this convention on Windows 10, this module will return your full computer name (usable hostname) and you can write cross-platform code that relies on this.

## How to set your full computer name on Windows 10

Say you want to set your hostname to `my-windows-laptop.small-tech.org`:

1. Control Panel → System And Security → System → Change Settings link (next to Computer name) → [Change…] Button
2. Under Computer name, enter your _subdomain_ (`my-windows-laptop`)
3. [More…] Button → enter your _domain name_ (`small-tech.org`) in the Primary DNS suffix of this computer field.
4. Press the various [OK] buttons to dismiss the various modal dialogues and restart your computer.

## Install

```sh
npm i @small-tech/cross-platform-hostname
```

## Use

```js
const hostname = require('@small-tech/cross-platform-hostname')
console.log(`Your hostname is ${hostname}`)
```

---

Copyright &copy; 2019 [Aral Balkan](https://ar.al). License: [AGPL version 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) or later.
Made with ❤️ by [Small Technology Foundation](https://small-tech.org). (Like this? [Fund us.](https://small-tech.org/fund-us))