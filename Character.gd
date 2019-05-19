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
    velocity = velocity.normalized();

func _physics_process(delta):
	get_input();
	move_and_slide(velocity * speed);

var bump = false;
var update_frame = 0;
var current_frame = 0;

func _process(delta):
	if Input.is_action_pressed('interact') && !bump:
		interact();
		bump = true;
	
	if Input.is_action_just_released('interact'):
		bump = false;
	
	get_input();
	
	if update_frame > 1  || current_frame == 0:
		if velocity == Vector2(0, 1):
			current_frame = 1 if current_frame == 0 || current_frame == 2 else 2;
		
		update_frame = 0;
	
	if velocity == Vector2(0, 0):
		current_frame = 0;
	
	update_frame += delta * 4;
	
	get_node("Sprite").frame = current_frame;

export (int) var level = 0;

func update_mask():
	collision_mask = level ^ 0x3FF;

var entered = []; 

func _on_body_entered(body):
	entered.push_front(body.collision_layer);


func _on_body_exited(body):
	var n = entered.find(body.collision_layer)
	if n == -1:
		return;
	entered.remove(n);
	var fall = 0;
	for e in entered:
		fall = max(e, fall);
	level = fall;
	update_mask();

func _ready():
	update_mask();