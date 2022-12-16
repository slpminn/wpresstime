<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u379988275_E2Jbj' );

/** Database username */
define( 'DB_USER', 'u379988275_Rw7XQ' );

/** Database password */
define( 'DB_PASSWORD', 'YLAX1OoCG4' );

/** Database hostname */
define( 'DB_HOST', 'mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '1U7OxZ8ax6<k~iuE@X)[#1hrrZ&+c@wg #B]PfcCz8Zz#c{ZFA;B-mZlW~6|}s8l' );
define( 'SECURE_AUTH_KEY',   'J8Av(/ m6%jkyc{ 8tqKOD7/nXX9PFuJ<C{T1iU9isOtMm:(@Yq4d{5_;l$W?XQ#' );
define( 'LOGGED_IN_KEY',     'm(W<IwfuX!rC!F2e80t$za#JuIMxQ@[C} R>;EhV:[|cw4v9B6Mrbb0XTS};uT,`' );
define( 'NONCE_KEY',         '58%Ba#GBw3eF}oER0chDP5nSqB*o0HnCZQ5`& 1xVZ$<|xMSn/An}nhQU^B?eb@I' );
define( 'AUTH_SALT',         '!:~_2D-vSPzqZ@gT:b3R0xiH)h|`#{EB07nU%qjf9/ wK0LLW,JXis/S*y]6^:8Y' );
define( 'SECURE_AUTH_SALT',  ')cKapKo7uTaNiFM8:jvw<awC=^#7{Kh<([n#9Pv:HjR!8,GzACBgo3j[f!%g5oLp' );
define( 'LOGGED_IN_SALT',    '$XQozmM G,:C(HJU=ao;uwmwcDt0J9{8>5W_.LozmZ;}}6%X1v~+qO?u[vC#ywWW' );
define( 'NONCE_SALT',        'r/P(TB/iCGj$*38VzGPi,C%<DXc%+y*sV/|e;! 0VEa`-.V-8*DfXV^-mZjO12:Y' );
define( 'WP_CACHE_KEY_SALT', '>PYnsdXtm9aUnF<EIDp3k-{f84;}#A25Rw`8#vON_9~~Ya/>c6TIup0}D4M6Bk2b' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
