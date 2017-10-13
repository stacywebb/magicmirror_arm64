**MagicMirror²** is an open source modular smart mirror platform.

This version of the original MagicMirror² adds support for arm64 architecture.

Some boards that have arm64 as their core architecture include:

- Pine64+
- Rock64
- OrangePi Plus
- Odroid C2
- BananaPi M2
- and many more

# Automatic Installer (arm64 only)

Execute the following command on your arm64 device to install MagicMirror² arm64 version:

```
bash -c "$(curl -sL https://raw.githubusercontent.com/stacywebb/magicmirror_arm64/master/installers/arm64.sh)"
```

# Manual Installation

1. Download and install the latest Node.js version.
2. Clone the repository and check out the master branch: `git clone https://github.com/stacywebb/magicmirror_arm64`
3. Enter the repository: `cd ~/MagicMirror`
4. Install and run the app: `npm install && npm start`

**Important:** `npm start` does **not** work via SSH, use `DISPLAY=:0 npm start` instead. This starts the mirror on the remote display.

for serveronly version: Install and run the app: `npm install && node serveronly`

## Configuration

1. Duplicate `config/config.js.sample` to `config/config.js`.
2. Modify your required settings.

## Community

With a growing list of installable modules, the **MagicMirror²** allows you to convert your hallway or bathroom mirror into your personal assistant. **MagicMirror²** is built by the creator of [the original MagicMirror](http://michaelteeuw.nl/tagged/magicmirror) with the incredible help of a [growing community of contributors](https://github.com/MichMich/MagicMirror/graphs/contributors).
