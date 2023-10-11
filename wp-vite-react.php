<?php
/**
 * Plugin Name:  Wordpress Vite React Plugin
 * Description:  Um plugin WordPress com tecnologia Vite e ReactJS. Utilize o shortcode <code>[wp_vite_react]</code> para exibir o app em qualquer local do site.
 * Version:      1.0.0
 * Author:       Estevan Ulian
 * Text Domain:  wp-vite-react
 * Domain Path:  /languages/
 * Requires PHP: 7.4
 * Update URI:   https://estevanulian.com
 */

if ( ! defined( 'ABSPATH' ) ) exit;

add_shortcode( 'wp_vite_react', 'wp_vite_react_shortcode' );

function wp_vite_react_shortcode () {
    wp_react_app_load_scripts();
    ob_start(); 
    ?>
        <div id="wp-vite-react-app-wrapper"></div>
    <?php 
    return ob_get_clean();
}

function wp_react_app_load_scripts () {
    $app_url = plugins_url( 'app/build', __FILE__ );

    wp_enqueue_script(
        'wp-vite-react-app',
        $app_url . '/assets/index.js',
        false,
        '1.0.0',
        true
    );

    wp_localize_script(
        'wp-vite-react-app',
        'wpReactPlugin',
        [
            'root' => '#wp-vite-react-app-wrapper',
            'baseUrl' => rtrim( $app_url, '/' )
        ]
    );

    wp_enqueue_style(
        'wp-vite-react-app',
        $app_url . '/assets/index.css',
        false,
        '1.0.0'
    );
}