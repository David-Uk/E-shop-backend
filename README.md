E-Shop Backend
==============

### Basic Requirements

To get this app running, you will require the following tools

*   Node.js [Get it from here](https://nodejs.org/en/download)
*   VS Code [Download here](https://code.visualstudio.com/download)
*   Mongodb [Download here](https://www.mongodb.com/try/download/community) or use the cloud version [here](https://www.mongodb.com/atlas/database)
*   Git [Download here](https://git-scm.com/downloads)

### How to setup

*   Start by cloning the repository to your local
*   Navigate to your cloned repository from the terminal
*   Run npm install from the terminal inside the repository directory
*   Next is to open the directory in VS Code. Use the command code . from the terminal
*   Setup a file in the root folder called .env
*   Set the following keys to their respective values
    *   DATABASE=the database url
    *   PORT=any port to run the server eg 8000
    *   JWT\_SECRET=any random string
    *   ACTIVATION\_TOKEN=any random string
    *   SMTP\_PORT=port for your email service provider
    *   SMTP\_HOST=host for your email service provider
    *   SMTP\_EMAIL=email id
    *   SMTP\_PASSWORD=email password
*   Type and run the command npm run dev from terminal