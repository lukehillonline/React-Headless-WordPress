<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sbp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'lFiCzn32^^Zw)97{bmEiOIxCgZ)FKr1&j,g`V?1sOdrSJ/Q%Eg43EIq>QUpn%|z`');
define('SECURE_AUTH_KEY',  'm5 VFgC6);#zHdnS!U84_d!3,?U$&ciw9p)<eIcynmBW;wX|$Ru)&o*Fk%WxIjjP');
define('LOGGED_IN_KEY',    'XP=49C}29?xq+J=Q+I45]xD,@33!NJuD!PVNU4JcN+`R3e3QO,Fo]CSx8@+o48Xk');
define('NONCE_KEY',        '-[breiC0OAl?H{ad:XvC2Bdzqsw:)m:7>WLc8]J_,FL*dS-o:v[]j08kh%M3Wf)Q');
define('AUTH_SALT',        '&huHSo*7=!_t)3?5%@]r7y,kD4yU|q?))Lo)&R6 Rgw:hZn0qs)#|FsbY!v)<bL~');
define('SECURE_AUTH_SALT', 'J!=o!937me>o>c~`.g##R9U!,:r}>%0C[H~5=()|6P[vZ9v<~kIkJAiZyq(C&=ke');
define('LOGGED_IN_SALT',   'Z,D`{Y~et,3|!Mpka6yCa/FPq/EQ(rXNm[{&(oTc8O=VwK4DAXuSZQ+$Kh~<c}u<');
define('NONCE_SALT',       ',PW|/;MgmEz_t? f1M qB%{>bl,HHI}*/676|?2*-WV*@6$f@qei1Og@(=Z$Ar|S');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'sbp_wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
