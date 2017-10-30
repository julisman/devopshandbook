#
#--------------------------------------------------------------------------
# Image Setup
#--------------------------------------------------------------------------
#

FROM php:5.6-fpm

MAINTAINER agung julisman <agung.julisman@yahoo.com>

#
#--------------------------------------------------------------------------
# Software's Installation
#--------------------------------------------------------------------------
#
# Installing tools and PHP extentions using "apt", "docker-php", "pecl",
#

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        libmemcached-dev \
        libz-dev \
        libpq-dev \
        libjpeg-dev \
        libpng12-dev \
        libfreetype6-dev \
        libssl-dev \
        libmcrypt-dev \
        freetds-dev \
        freetds-common \
        freetds-bin \
        unixodbc \
        unixodbc-dev \
        zlib1g-dev \
        libxml2-dev \
        php-soap


# Install the PHP mcrypt extention
RUN docker-php-ext-install mcrypt
# Install the PHP zip extention
RUN docker-php-ext-install zip
# Install the PHP pdo_mysql extention
RUN docker-php-ext-install mysqli \
    && docker-php-ext-install pdo_mysql
# Install the PHP pdo_pgsql extention
RUN docker-php-ext-install pdo_pgsql

# Install php soap
RUN docker-php-ext-install soap

# Install the PHP gd library
RUN docker-php-ext-install gd && \
    docker-php-ext-configure gd \
        --enable-gd-native-ttf \
        --with-jpeg-dir=/usr/lib \
        --with-freetype-dir=/usr/include/freetype2 && \
    docker-php-ext-install gd
# copy config php ini
COPY php.ini /usr/local/etc/php








