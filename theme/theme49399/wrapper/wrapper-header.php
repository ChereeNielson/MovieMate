<?php /* Wrapper Name: Header */ ?>
<div class="row">
	<div class="span7" data-motopress-type="static" data-motopress-static-file="static/static-logo.php">
		<?php get_template_part("static/static-logo"); ?>
	</div>
	<!-- Social Links -->
	<div class="span5" data-motopress-type="static" data-motopress-static-file="static/static-social-networks.php">
		<div class="social-nets-wrapper"><?php get_template_part("static/static-social-networks"); ?></div>
	</div>
	<!-- /Social Links -->
</div>
<div class="header_line">
	<div class="row">
		<div class="span9" data-motopress-type="static" data-motopress-static-file="static/static-nav.php">
			<?php get_template_part("static/static-nav"); ?>
		</div>
		<div class="span3 hidden-phone" data-motopress-type="static" data-motopress-static-file="static/static-search.php">
			<?php get_template_part("static/static-search"); ?>
		</div>
	</div>
</div>