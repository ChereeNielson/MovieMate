<?php
function elegance_widgets_init() {
	// Sidebar Widget
	// Location: the sidebar
	register_sidebar(array(
		'name'					=> theme_locals("sidebar"),
		'id' 						=> 'main-sidebar',
		'description'   => theme_locals("sidebar_desc"),
		'before_widget' => '<div id="%1$s" class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>',
	));
	// Footer Widget Area
	// Location: at the top of the footer, above the copyright
	register_sidebar(array(
		'name'					=> __("Footer Area", CURRENT_THEME),
		'id' 						=> 'footer-sidebar',
		'description'   => theme_locals("footer_desc"),
		'before_widget' => '<div id="%1$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4>',
		'after_title' => '</h4>',
	));

}
/** Register sidebars by running elegance_widgets_init() on the widgets_init hook. */
add_action( 'widgets_init', 'elegance_widgets_init' );
?>