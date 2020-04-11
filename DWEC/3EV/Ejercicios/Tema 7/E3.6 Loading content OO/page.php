<?php

$page = $_GET['page'];

if ($page === 'home') {
    echo '<h1>Home</h1><p>This is the home page</p>';
}

if ($page === 'downloads') {
    echo '<h1>Downloads</h1><p>This is the downloads page</p>';
}

if ($page === 'tutorials') {
    echo '<h1>Tutorials</h1><p>This is the tutorials page</p>';
}
