sudo apt-get update
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt install docker.io
sudo apt install docker-compose
sudo gpasswd -a $USER docker
newgrp docker
sudo systemctl start docker
sudo systemctl enable docker

sudo service docker start

npx browserslist@latest --update-db