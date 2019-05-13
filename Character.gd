extends KinematicBody2D

export (int) var speed = 200;

var current_interactor: Node2D;

func interact():
	if current_interactor:
		current_interactor.on_interact(self);

var velocity = Vector2();

func get_input():
    velocity = Vector2()
    if Input.is_action_pressed('right'):
        velocity.x += 1;
    if Input.is_action_pressed('left'):
        velocity.x -= 1;
    if Input.is_action_pressed('bottom'):
        velocity.y += 1;
    if Input.is_action_pressed('top'):
        velocity.y -= 1;
    velocity = velocity.normalized() * speed;

func _physics_process(delta):
	get_input();
	move_and_slide(velocity);

func _process(delta):
	if Input.is_action_pressed('interact'):
		interact();

export (int) var level = 0;

func update_mask():
	collision_mask = level ^ 0x3FF;

var entered = []; 

func _on_body_entered(body):
	entered.push_front(body.collision_layer);


func _on_body_exited(body):
	entered.remove(entered.find(body.collision_layer));
	var fall = 0;
	for e in entered:
		fall = max(e, fall);
	level = fall;
	update_mask();

func _ready():
	update_mask();