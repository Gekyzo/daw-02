<?php

header('Content-type: application/json');

$people = [
    'Alex' => [
        'age' => 24,
        'location' => 'Madrid',
        'job' => 'Web developer',
    ],
    'Diego' => [
        'age' => 21,
        'location' => 'Johanesburgo',
        'job' => 'Teacher',
    ]
];

$return = ['exists' => false];

if (isset($_GET['name'])) {
    $name = $_GET['name'];
    if (isset($people[$name])) {
        $return['exists'] = true;
        $return['information'] = $people[$name];
    }
}

echo json_encode($return);
