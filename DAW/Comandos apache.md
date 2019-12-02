**Restart apache**

```bash
systemctl restart apache2
```

**Directorios importantes**

```bash
/etc/apache2/apache2.conf -> Configuración principal de apache
/etc/apache2/ports.conf -> Configuración de puertos
/etc/apache2/httpd.conf -> Configuraciones del usuario
```

**Habilitar/Deshabilitar sitio**

En primer lugar, el archivo de configuración del sitio debe existir dentro de `/etc/apache2/sites-available/`

```bash
a2ensite NOMBRE_SITIO
a2dissite NOMBRE_SITIO (a2dissite default deshabilita el sitio por defecto)
```

==Después de habilitar un sitio o directiva, `systemctl restart apache2`==

**Habilitar/Deshabilitar módulo**

```bash
a2enmod NOMBRE_MODULO
a2dismod NOMBRE_MODULO
```

## Listado de módulos

**userdir**: permite que Apache sirva de forma automática páginas webs de los directorios personales de los usuarios

**status**: indica el estado actual del servidor

## MPM

Maneja las conexiones múltiples de usuarios afectando la cantidad de memoria que utiliza apache.

mpm_worker

mpm_prefork

**¿En qué modo se está ejecutando MPM?**

```bash
aptitude search apache2-mpm-
```

## Listado de directivas

### IfModule

Si el módulo indicado está habilitado, se aplican las reglas de la directiva.

```bash
<IfModule mpm_prefork_module>
	StartServers 5
	MinSpareServers 5
	MaxSpareServers 10
	MaxClients 150
	MaxRequestsPerChild 0
</IfModule>
```

**DirectoryIndex**: directiva con el orden de ejecución de los ficheros index

## AuthBasic

`a2enmod auth_basic`

```bash
AuthName "Acceso restringido"
AuthType Basic
AuthUserFile /var/.htpasswd
Require valid-user
# Acceso a un usuario específico
Require user NOMBRE_USUARIO
# Acceso a varios usuarios
Require user NOMBRE_USUARIO1 NOMBRE_USUARIO2
```

**Crear archivo de contraseñas**

```bash
htpasswd -c RUTA NOMBRE_USUARIO
htpasswd -c /var/.htpasswd pablo
```

**Añadir más usuarios**

```bash
htpasswd RUTA NOMBRE_USUARIO
```

Habilitar opción `AllowOverride All`

**Autenticación de Grupos**

```bash
AuthGroupFile RUTA
Require group NOMBRE_GRUPO
```

## AuthDigest

`a2enmod auth_digest`

**Crear archivo .htaccess**

```bash
AuthType Digest
AuthName "Acceso restringido"
AuthUserFile /var/.htpasswd_digest
Require valid-user
```

**Crear archivo de contraseñas**

```bash
htdigest -c RUTA NOMBRE_USUARIO
```

## Opciones de directorios

Options

​	All

​	FollowSymLinks

​	Indexes

​	MultiViews

​	SymLinksIfOwnerMatch

​	ExecCGI