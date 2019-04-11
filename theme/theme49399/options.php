<?php
/**
 * Defines an array of options that will be used to generate the settings page and be saved in the database.
 * When creating the "id" fields, make sure to use all lowercase and no spaces.
 *  
 */
if(!function_exists('optionsframework_options')) {
	function optionsframework_options() {
// Fonts
			global $typography_mixed_fonts;
			$typography_mixed_fonts = array_merge(options_typography_get_os_fonts() , options_typography_get_google_fonts());
			asort($typography_mixed_fonts);

			$options = array();
// ---------------------------------------------------------
// General
// ---------------------------------------------------------
			$options['general'] = array( "name" => theme_locals('general'),
								"type" => "heading");
			// Background Defaults
			$background_defaults = array(
				'color' => '', 
				'image' => '', 
				'repeat' => 'repeat',
				'position' => 'top center',
				'attachment'=>'scroll'
			);

			$options['body_background'] = array(
								"id" => "body_background",
								"std" => $background_defaults);
			
			$options['header_color'] = array(
								"id" => "header_color",
								"std" => "");
			
			$options['links_color'] = array(
								"id" => "links_color",
								"std" => "#a63468");

			$options['links_color_hover'] = array(
								"id" => "links_color_hover",
								"std" => "#fa479a");
								
			$options['google_mixed_3'] = array(
								'id' => 'google_mixed_3',
								'std' => array( 'size' => '13px', 'lineheight' => '21px', 'face' => '"Trebuchet MS", Arial, Helvetica, sans-serif', 'style' => 'normal', 'character'  => 'latin', 'color' => '#7b6170'));
								
			$options['h1_heading'] = array(
								'id' => 'h1_heading',
								'std' => array( 'size' => '24px', 'lineheight' => '24px', 'face' => 'Raleway', 'style' => 'bold', 'character'  => 'latin', 'color' => '#FFFFFF'));
			
			$options['h2_heading'] = array(
								'id' => 'h2_heading',
								'std' => array( 'size' => '24px', 'lineheight' => '24px', 'face' => 'Raleway', 'style' => 'bold', 'character'  => 'latin', 'color' => '#434343'));
								
			$options['h3_heading'] = array(
								'id' => 'h3_heading',
								'std' => array( 'size' => '24px', 'lineheight' => '24px', 'face' => 'Raleway', 'style' => 'bold', 'character'  => 'latin', 'color' => '#FFFFFF'));
			
			$options['h4_heading'] = array(
								'id' => 'h4_heading',
								'std' => array( 'size' => '14px', 'lineheight' => '21px', 'face' => '"Trebuchet MS", Arial, Helvetica, sans-serif', 'style' => 'bold', 'character'  => 'latin', 'color' => '#FFFFFF'));
								
			$options['h5_heading'] = array(
								'id' => 'h5_heading',
								'std' => array( 'size' => '14px', 'lineheight' => '21px', 'face' => '"Trebuchet MS", Arial, Helvetica, sans-serif', 'style' => 'bold', 'character'  => 'latin', 'color' => '#FFFFFF'));
								
			$options['h6_heading'] = array(
								'id' => 'h6_heading',
								'std' => array( 'size' => '13px', 'lineheight' => '21px', 'face' => '"Trebuchet MS", Arial, Helvetica, sans-serif', 'style' => 'bold', 'character'  => 'latin', 'color' => '#686868'));
			
			$options['g_search_box_id'] = array(
								"id" => "g_search_box_id",
								"std" => "yes");

			$options['g_breadcrumbs_id'] = array(
								"id" => "g_breadcrumbs_id",
								"std" => "yes");;	

			$options['custom_css'] = array(
								"id" => "custom_css",
								"std" => "");











			//Social Links
			$options[] = array( 
								"name" => "Social",
								"type" => "heading"
			);

			$options['social_title'] = array(
					"name" => "Title",
					"desc" => "Title",
					"id" => "social_title",
					"std" => "Follow us",
					"type" => "text"
			);
			
			$options['facebook'] = array( 
								"name" => "Facebook URL",
								"desc" => "Facebook URL",
								"id" => "facebook",
								"std" => "#",
								"type" => "text"
			);					
			$options['facebook_icon'] = array( 
								"name" => "Facebook Icon",
								"desc" => "Facebook Icon",
								"id" => "facebook_icon",
								"std" => get_stylesheet_directory_uri() . "/images/social/facebook.png",
								"type" => "upload"
			);
								
			$options['twitter'] = array( 
								"name" => "Twitter URL",
								"desc" => "Twitter URL",
								"id" => "twitter",
								"std" => "#",
								"type" => "text");
								
			$options['twitter_icon'] = array( 
								"name" => "Twitter Icon",
								"desc" => "Twitter Icon",
								"id" => "twitter_icon",
								"std" => get_stylesheet_directory_uri() . "/images/social/twitter.png",
								"type" => "upload");
								
			$options['google'] = array( 
								"name" => "Google+ URL",
								"desc" => "Google+ URL",
								"id" => "google",
								"std" => "#",
								"type" => "text");
								
			$options['google_icon'] = array( 
								"name" => "Google+ Icon",
								"desc" => "Google+ Icon",
								"id" => "google_icon",
								"std" => get_stylesheet_directory_uri() . "/images/social/google.png",
								"type" => "upload");
			//End Social Links















// ---------------------------------------------------------
// Logo & Favicon
// ---------------------------------------------------------
			$options["logo_favicon"] = array( "name" => theme_locals('logo_favicon'),
								"type" => "heading");		

			$options['logo_type'] = array(
								"id" => "logo_type",
								"std" => "image_logo");

			$options['logo_typography'] = array(
								'id' => 'logo_typography',
								'std' => array( 'size' => '46px', 'lineheight' => '46px', 'face' => 'Raleway', 'style' => 'normal', 'character'  => 'latin', 'color' => '#f9f9f9'));
			
			$options['logo_url'] = array(
								"id" => "logo_url",
								"std" => get_stylesheet_directory_uri() . "/images/logo.png");
								
			$options['favicon'] = array(
								"id" => "favicon",
								"std" => get_stylesheet_directory_uri() . "/favicon.ico");

// ---------------------------------------------------------
// Navigation
// ---------------------------------------------------------
			$options['navigation'] = array( "name" => theme_locals('navigation'),
								"type" => "heading");

			$options['menu_typography'] = array(
								'id' => 'menu_typography',
								'std' => array( 'size' => '12px', 'lineheight' => '18px', 'face' => 'Raleway', 'style' => 'bold', 'character'  => 'latin', 'color' => '#f9f9f9'));

			$options['sf_delay'] = array(
								"id" => "sf_delay",
								"std" => "1000");

			$options['sf_f_animation'] = array(
								"id" => "sf_f_animation",
								"std" => "show");
			
			$options['sf_sl_animation'] = array(
								"id" => "sf_sl_animation",
								"std" => "show");
			
			$options['sf_speed'] = array(
								"id" => "sf_speed",
								"std" => "normal");

			$options['sf_arrows'] = array(
								"id" => "sf_arrows",
								"std" => "true");

			$options['mobile_menu_label'] = array(
								"id" => "mobile_menu_label",
								"std" => theme_locals('mobile_menu_std'));

			$options['stickup_menu'] = array(
								"id" => "stickup_menu",
								"std" => "false",
								"disable" => "true");	

// ---------------------------------------------------------
// Slider
// ---------------------------------------------------------
			$options['slider'] = array( "name" => theme_locals('slider'),
	                            "type" => "heading");

	// Slider type
			$options['sl_type'] = array(
								"id" => "slider_type",
								"std" => "camera_slider");
	// ---------------------------------------------------------
	// Camera Slider
	// ---------------------------------------------------------
	        $options['sl_effect'] = array(
	                            "id" => "sl_effect",
	                            "std" => "simpleFade");

	        $options['sl_columns'] = array(
	                            "id" => "sl_columns",
	                            "std" => "12");

	        $options['sl_rows'] = array(
	                            "id" => "sl_rows",
	                            "std" => "8");

	        $options['sl_banner'] = array(
		                        "id" => "sl_banner",
		                        "std" => "fadeIn");

	        $options['sl_pausetime'] = array(
	                            "id" => "sl_pausetime",
	                            "std" => "7000");
	 
	        $options['sl_animation_speed'] = array(
	                            "id" => "sl_animation_speed",
	                            "std" => "1500");
	 
	        $options['sl_slideshow'] = array(
	                            "id" => "sl_slideshow",
	                            "std" => "true");

	        $options['sl_thumbnails'] = array(
	                            "id" => "sl_thumbnails",
	                            "std" => "false");

	        $options['sl_control_nav'] = array(
	                            "id" => "sl_control_nav",
	                            "std" => "true");

	        $options['sl_dir_nav'] = array(
	                            "id" => "sl_dir_nav",
	                            "std" => "false");

	        $options['sl_dir_nav_hide'] = array(
	                            "id" => "sl_dir_nav_hide",
	                            "std" => "false");

	        $options['sl_play_pause_button'] = array(
	                            "id" => "sl_play_pause_button",
	                            "std" => "false");
	        $options['sl_loader'] = array(
	                            "id" => "sl_loader",
	                            "std" => "no");
	// ---------------------------------------------------------
	// Accordion Slider
	// ---------------------------------------------------------
	        $multicheck_defaults = array( '43' => 0,  '49' => 0, '50' => 0, '51' => 0, '52' => 0);
	       	$options['acc_show_post'] = array(
                    "id" => "acc_show_post",
                    "std" => $multicheck_defaults);

	        $options['acc_slideshow'] = array(
	                            "id" => "acc_slideshow",
	                            "std" => "false");

	       	$options['acc_hover_pause'] = array(
	                            "id" => "acc_hover_pause",
	                            "std" => "true");

	       	$options['acc_pausetime'] = array(
	                            "id" => "acc_pausetime",
	                            "std" => "6000");

	        $options['acc_animation_speed'] = array(
	                            "id" => "acc_animation_speed",
	                            "std" => "600");

	        $options['acc_easing'] = array(
		                        "id" => "acc_easing",
		                        "std" => "easeOutCubic");

	        $options['acc_trigger'] = array(
		                        "id" => "acc_trigger",
		                        "std" => "mouseover");

	       	$options['acc_starting_slide'] = array(
	                            "id" => "acc_starting_slide",
	                            "std" => "0");
// ---------------------------------------------------------
// Blog
// --------------------------------------------------------
			$options['blog'] = array( "name" => theme_locals('blog'),
								"type" => "heading");
			
			$options['blog_text'] = array(
								"id" => "blog_text",
								"std" => theme_locals('blog'));
			
			$options['blog_related'] = array(
								"id" => "blog_related",
								"std" => theme_locals('posts_std'));
			
			$options['blog_sidebar_pos'] = array(
								"id" => "blog_sidebar_pos",
								"std" => "right");

			$options['post_image_size'] = array(
								"id" => "post_image_size",
								"std" => "large");
			
			$options['single_image_size'] = array(
								"id" => "single_image_size",
								"std" => "large");

			$options['post_meta'] = array( 
								"id" => "post_meta",
								"std" => "line");

			$options['post_meta_display'] = array( 
								"id" => "post_meta_display",
								"std" => "blog_post");

			$options['post_tag'] = array(
								"id" => "post_tag",
								"std" => "yes");

			$options['post_views'] = array( 
								"id" => "post_views",
								"std" => "yes");

			$options['post_like'] = array(
								"id" => "post_like",
								"std" => "yes");

			$options['post_dislike'] = array( 
								"id" => "post_dislike",
								"std" => "yes");
			
			$options['post_excerpt'] = array(
								"id" => "post_excerpt",
								"std" => "true");

// ---------------------------------------------------------
// Portfolio
// ---------------------------------------------------------
			$options['portfolio'] = array(
								"name" => theme_locals("portfolio"),
								"type" => "heading");

			$options['folio_filter'] = array(
								"id" => "folio_filter",
								"std" => "cat");
			
			$options['folio_title'] = array(
								"id" => "folio_title",
								"std" => "yes");

			$options['folio_excerpt'] = array(
								"id" => "folio_excerpt",
								"std" => "yes");

			$options['folio_excerpt_count'] = array(
								"id" => "folio_excerpt_count",
								"std" => "20");

			$options['folio_btn'] = array(
								"id" => "folio_btn",
								"std" => "yes");

			$options['folio_meta'] = array(
								"id" => "folio_meta",
								"std" => "yes");

			$options['layout_mode'] = array(
								"id" => "layout_mode",
								"std" => "fitRows");

			$options['items_count2'] = array(
								"id" => "items_count2",
								"std" => "8");

			$options['items_count3'] = array(
								"id" => "items_count3",
								"std" => "9");
			
			$options['items_count4'] = array(
								"id" => "items_count4",
								"std" => "12");

// ---------------------------------------------------------
// Footer
// ---------------------------------------------------------
			$options['footer'] = array( "name" => theme_locals("footer"),
								"type" => "heading");
			
			$options['footer_text'] = array(
								"id" => "footer_text",
								"std" => "");
			
			$options['ga_code'] = array(
								"id" => "ga_code",
								"std" => "");
			
			$options['feed_url'] = array(
								"id" => "feed_url",
								"std" => "");
			
			$options['footer_menu'] = array(
								"id" => "footer_menu",
								"std" => "false");

			$options['footer_menu_typography'] = array(
								'id' => 'footer_menu_typography',
								'std' => array( 'size' => '12px', 'lineheight' => '18px', 'face' => 'Raleway', 'style' => 'bold', 'character'  => 'latin', 'color' => '#f8f8f8'));

			$options['foo'] = array( "name" => "foo",
								"type" => "heading");
		return $options;
	}
}
?>