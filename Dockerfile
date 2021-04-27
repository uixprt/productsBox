FROM php:8.0-apache

MAINTAINER Raphael Mäder <me@randm.ch>

RUN a2enmod rewrite

ADD . /var/www/html
