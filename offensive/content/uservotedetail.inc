<?

	require_once( "offensive/assets/tabs.inc" );
	require_once( 'admin/mysqlConnectionInfo.inc' );
	if(!isset($link) || !$link) $link = openDbConnection();
	

	function start() {
		mustLogIn();
	}

	function body() {
		$uid = $_REQUEST['userid'];

		$sql = "SELECT count( c.id ) as thecount, u.username, c.vote 
					FROM offensive_comments c, offensive_uploads up, users u
					WHERE up.userid = $uid AND c.fileid = up.id AND u.userid = c.userid
					and vote
					GROUP  BY c.userid, vote
					ORDER  BY u.username";

		$result = tmbo_query( $sql );
		
		?>
<div class="contentbox">
	<div class="blackbar"></div>
	<div class="heading">who loves ya, baby?</div>
	<? tabs(); ?>
	<div class="bluebox">
	<table border="0" width="100%">
	
		<?
			$good = 0;
			$bad = 0;
			$username = "";
			while( $row = mysql_fetch_assoc( $result ) ) {
				if( $row['username'] != $username && $username != "" ) {
					emitRow( $username, $good, $bad );
					$good = 0;
					$bad = 0;
				}
				
				$username = $row['username'];
				
				switch( $row['vote'] ) {
					case 'this is good':
						$good = $row['thecount'];
					break;
					
					case 'this is bad':
						$bad = $row['thecount'];	
					break;
				}
	
			}
		?>
		
	</table>
	</div>
	<div class="blackbar"></div>
</div>
		<?
	}

	function emitRow( $name, $good, $bad ) {
	?>
		<tr class="<?= nextStyle() ?>">
			<td><?= $name ?></td>
			<td style="text-align:right">+<?= $good ?></td>
			<td style="text-align:right">-<?= $bad ?></td>
		</tr>
	<?
	}
	
	function nextStyle() {
		global $css;
		$css = ($css == "odd_row") ? "even_row" : "odd_row";
		return $css;
	}

?>