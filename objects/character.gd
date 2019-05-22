extends Sprite

var interactive = true;

var npc;

func init_object(world_data: Node):
	npc = world_data.get_node("NPC").get_node(get_meta('CharacterID'));
	if npc.has_method('init_npc'):
		npc.init_npc(world_data);

func can_interact(character: KinematicBody2D) -> bool:
	return npc.can_interact(character) if npc.has_method('can_interact') else true;

func on_interact(character: KinematicBody2D):
	npc.on_interact(character);
