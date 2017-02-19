#!/bin/bash
docker run -p 127.0.0.1:389:389 --env LDAP_ORGANISATION="My Test" --env LDAP_DOMAIN="test.com" --env LDAP_ADMIN_PASSWORD="test" --detach --name ldaptest osixia/openldap
