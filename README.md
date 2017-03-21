# RaspberryPI control via SocketIO

### Getting Started
1. Set up config file: _config.json_
2. Install dependency
* ``` 
    yarn install 
  ```
3. Start server
* ```
    yarn start
  ```

### List edvices :
```
bash ls /dev | grep ttyACM
```
### Scheme :
![Image of Yaktocat](https://raw.githubusercontent.com/ruslanbanah/raspberry_socket/master/images/scheme.jpg)
![Image of Yaktocat](https://raw.githubusercontent.com/ruslanbanah/raspberry_socket/master/images/board.jpg)

### Install NVM to Raspberry PI
```
git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout v5.9.0
```
```
source ~/.nvm/nvm.sh
```
```
npm install --global yarn
```
