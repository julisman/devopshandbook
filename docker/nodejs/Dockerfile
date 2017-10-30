FROM ubuntu:16.04
MAINTAINER agung.julisman@yahoo.com

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update
RUN apt-get update -y

# install
RUN apt-get install -y curl git

# clean after install
RUN apt-get clean

# set environment
# we use node v6.0.0 as default

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.0.0

# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set up our PATH correctly so we don't have to long-reference npm, node, &c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

#you can pick which one for process manager
RUN npm i -g nodemon pm2

ENV dir /app
WORKDIR ${dir}





