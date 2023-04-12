# Rainbow Role 
This is a simple Discord.js bot that changes the color of a specific role at a specified interval. The bot also sets a custom status with a custom activity.

# Requirements
Node.js (v14 or higher)
Discord.js (v13 or higher)
# Installation
1. Clone this repository: git clone https://github.com/TheLinuxChoice5/RainbowRole.git

2. Navigate to the project directory: cd RainbowRole

3. Install dependencies: npm install

4. Set up configuration file: cp config.json.example config.json and edit the values accordingly.

5. Start the bot: npm start
# Configuration
The config.json file contains the following options:

-token: Your Discord bot token.
-serverID: The ID of the server where the role is located.
-roleID: The ID of the role to be changed.
-interval: The interval (in milliseconds) at which the role color should be changed.
# Usage
Once the bot is running, it will automatically start changing the color of the specified role at the specified interval. If the interval is less than 1 minute, a warning message will be displayed.

The bot will also set a custom status with a custom activity, which can be seen on the bot's profile.

# License
This project is licensed under the MIT License. See the LICENSE file for more information.

# Contributing
Contributions are welcome! If you find any issues or have any suggestions for improvement, feel free to open an issue or a pull request.
