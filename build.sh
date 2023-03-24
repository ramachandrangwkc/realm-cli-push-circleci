
#!/bin/sh

# sudo npm install -g mongodb-realm-cli

npx mongodb-realm-cli login --api-key <<KEY>> --private-api-key <<SECRET>>

npx mongodb-realm-cli push -y --remote <<REALM_APP_ID>>


