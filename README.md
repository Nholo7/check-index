# Check the index project

<a href="http://89.168.17.66:5000/">
  <img alt="Online test link" src="https://img.shields.io/badge/try-online-green.svg">
</a>

## Description
The "Check the index" web app helps you to track one of the following stock indexes:
- <img src="https://raw.githubusercontent.com/Nholo7/check-index/master/static/images/meta-icon.svg" alt="meta" width="2%"> Meta
- <img src="https://raw.githubusercontent.com/Nholo7/check-index/master/static/images/google-color-icon.svg" alt="meta" width="2%"> Alphabet
- <img src="https://raw.githubusercontent.com/Nholo7/check-index/master/static/images/apple-icon.svg" alt="meta" width="2%"> Apple
- <img src="https://raw.githubusercontent.com/Nholo7/check-index/master/static/images/nvidia-icon.svg" alt="meta" width="2%"> Nvidia

You can always refresh the current index with the Refresh button, or you can let it refresh automatically every minute.    
**Note**: the refresh is not available in the online test link.

## Step for local test
### Install python
In order to install python, open the terminal and run the following command
```bash
install -y python3-pip
```

### Install and run virtual environment
1. Install virtualenv library
```bash
pip3 install virtualenv
```
2. Run the bashrc script
```bash
source ~/.bashrc
```
3. Init the virtual environment
```bash
mkvirtualenv flask01
```

### Install requirements.txt
After running the virtual environment you can proceed with the requirements.txt installation
```bash
pip install -r requirements.txt
```
The txt file contains all the libraries used for the python web application.

### Run the web application
The last step is to run the following command in order to start the application
```bash
export FLASK_APP=main.py && flask run --host=127.0.0.1
```
After this you'll be able to test the application at the following <a href="http://127.0.0.1:5000/">link</a>.

In order to stop the application, go back to the terminal and press Ctrl + C.
