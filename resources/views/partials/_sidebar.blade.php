<div class="sidebar" data-color="purple" data-image="../assets/img/sidebar-1.jpg">
	<!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

        Tip 2: you can also add an image using data-image tag
    -->

	<div class="logo">
		<a href="" class="simple-text">
			{{ config('app.name') }}
		</a>
	</div>

	<div class="sidebar-wrapper">
        <ul class="nav">
            <li class="isActive()">
                <a href="#/dashboard">
                    <i class="material-icons">dashboard</i>
                    <p>Dashboard</p>
                </a>
            </li>
            <!-- <li>
                <a href="#/games">
                    <i class="material-icons">games</i>
                    <p>Games</p>
                </a>
            </li> -->
            <li>
                <a href="#/todos">
                    <i class="material-icons">check_box</i>
                    <p>Todos</p>
                </a>
            </li>
            <li>
                <a href="#/contacts">
                    <i class="material-icons">contacts</i>
                    <p>Contacts</p>
                </a>
            </li>
            <li>
                <a href="#/mail">
                    <i class="material-icons">inbox</i>
                    <p>Mail</p>
                </a>
            </li>
            <li>
                <a href="#/cloud">
                    <i class="material-icons">cloud</i>
                    <p>Cloud</p>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="material-icons">location_on</i>
                    <p>Bills</p>
                </a>
            </li>
        </ul>
	</div>
</div>