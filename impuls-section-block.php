<?php
/*
Plugin Name: Impuls Section Block 
Description: Block for inserting a section in Gutenberg
Version: 1.6
Author: Impuls Werbeagentur
Author URI: https://www.werbeagentur-impuls.de
*/

function impuls_section_block_register_block() {

    // Register our block script with WordPress
    wp_register_script(
      'impuls-section-block',
      plugins_url('/blocks/dist/blocks.build.js', __FILE__),
      array('wp-blocks', 'wp-element','wp-editor','wp-components','lodash'),
      filemtime(plugin_dir_path(__FILE__).'blocks/dist/blocks.build.js')
    );
  
    // Register our block's base CSS  
    wp_register_style(
      'impuls-section-block-style',
      plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
      array(  )
    );
    
    // Register our block's editor-specific CSS
    wp_register_style(
      'impuls-section-block-edit-style',
      plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
      array( 'wp-edit-blocks' )
    );  
    
    // Enqueue the script in the editor
    register_block_type('impuls-additional-blocks/section', array(
      'editor_script' => 'impuls-section-block',
      'editor_style' => 'impuls-section-block-edit-style',
      'style' => 'impuls-section-block-style'
    ));
  }
  
  add_action('init', 'impuls_section_block_register_block');