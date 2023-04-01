sudo apt-get update
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo apt install docker-compose
sudo chmod 666 /var/run/docker.sock
docker-compose -f docker-compose-ec2.yml up -d
