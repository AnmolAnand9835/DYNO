# 🦕 Dino

Dino is a modern Discord utility bot designed to make server management easier. It allows administrators to create, manage, and send server rules with simple commands while keeping everything organized and user-friendly.

## ✨ Features

* 📜 Create and manage server rules
* 📝 Edit and update rules anytime
* 🗑️ Remove unwanted rules
* 📋 Display rules in clean Discord embeds
* 🔄 Update rule messages without sending duplicates
* ⚙️ Easy setup and configuration
* 🚀 Fast and lightweight

## 📦 Commands

| Command                       | Description           |
| ----------------------------- | --------------------- |
| `/rules add <rule>`           | Add a new rule        |
| `/rules remove <number>`      | Remove a rule         |
| `/rules edit <number> <text>` | Edit an existing rule |
| `/rules show`                 | Preview all rules     |
| `/rules send`                 | Send the rules embed  |

## 🛠️ Tech Stack

* Node.js
* Discord.js
* JavaScript
* JSON / Database Storage

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/Dino.git
```

2. Navigate to the project:

```bash
cd Dino
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file:

```env
TOKEN=YOUR_DISCORD_BOT_TOKEN
CLIENT_ID=YOUR_CLIENT_ID
```

5. Start the bot:

```bash
node index.js
```

## 🔒 Security

* Never commit your bot token.
* Add `.env` to `.gitignore`.
* Reset your token immediately if it gets exposed.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ and lots of debugging by **sudo_why**.
