<?php /* Wrapper Name: Footer */ ?>
<?php if( is_front_page() ) { ?>
	<div class="footer-widgets">
		<div class="row">
			<div class="span12" data-motopress-type="dynamic-sidebar" data-motopress-sidebar-id="footer-sidebar">
				<?php dynamic_sidebar("footer-sidebar"); ?>
			</div>
		</div>
	</div>
<?php } ?>
<div class="row">
	<div class="span12" data-motopress-type="static" data-motopress-static-file="static/static-footer-text.php">
		<?php get_template_part("static/static-footer-text"); ?>
	</div>
</div>
<div class="row">
	<div class="span12" data-motopress-type="static" data-motopress-static-file="static/static-footer-nav.php">
		<?php get_template_part("static/static-footer-nav"); ?>
	</div>
</div>