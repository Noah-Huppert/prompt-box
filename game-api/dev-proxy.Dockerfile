FROM lxlu/openapi-cop:v1.3.1

RUN npm install -g nodemon

ENTRYPOINT [ "nodemon", "--ext", "yaml", "--watch", "/opt/game-api/*", "--exec", "bash ./entrypoint.bash" ]
