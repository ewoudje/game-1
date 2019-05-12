<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.2" tiledversion="1.2.3" name="Overworld" tilewidth="32" tileheight="32" tilecount="1024" columns="32">
 <image source="tilemap.png" width="1024" height="1024"/>
 <terraintypes>
  <terrain name="Grass" tile="0"/>
  <terrain name="Mud" tile="32"/>
 </terraintypes>
 <tile id="0" terrain="0,0,0,0">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="1">
  <objectgroup draworder="index">
   <object id="1" x="0" y="32">
    <polygon points="0,0 32,0 32,-32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="2">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 32,32 0,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="3" terrain=",,,0">
  <objectgroup draworder="index">
   <object id="1" x="16" y="16">
    <polygon points="0,0 16,0 16,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="4" terrain=",,0,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="16" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="5" terrain=",0,,0">
  <objectgroup draworder="index">
   <object id="1" x="16" y="0" width="16" height="32"/>
  </objectgroup>
 </tile>
 <tile id="6" terrain="0,,0,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="32"/>
  </objectgroup>
 </tile>
 <tile id="7" terrain=",,,0">
  <objectgroup draworder="index">
   <object id="1" x="32" y="16">
    <polygon points="0,0 -16,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="8" terrain=",,0,"/>
 <tile id="9">
  <objectgroup draworder="index">
   <object id="1" x="32" y="0">
    <polygon points="0,0 -16,16 -16,32 0,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="10">
  <objectgroup draworder="index">
   <object id="1" x="0" y="16">
    <polygon points="0,0 16,0 32,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="11">
  <objectgroup draworder="index">
   <object id="1" x="0" y="32">
    <polygon points="0,0 16,-16 32,-16 32,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="12">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 16,16 16,32 0,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="13" terrain="0,0,0,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 0,32 16,32 16,16 32,16 32,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="14" terrain="0,0,,0">
  <objectgroup draworder="index">
   <object id="1" x="0" y="16">
    <polygon points="0,0 16,0 16,16 32,16 32,-16 0,-16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="15">
  <objectgroup draworder="index">
   <object id="1" x="32" y="0">
    <polygon points="0,0 0,32 -32,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="16">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 32,32 0,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="17" terrain=",,,1">
  <objectgroup draworder="index">
   <object id="1" x="16" y="16" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="18" terrain=",,1,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="16" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="19" terrain=",1,,1">
  <objectgroup draworder="index">
   <object id="1" x="16" y="0" width="16" height="32"/>
  </objectgroup>
 </tile>
 <tile id="20" terrain="1,,1,">
  <objectgroup draworder="index">
   <object id="2" x="0" y="0" width="16" height="32"/>
  </objectgroup>
 </tile>
 <tile id="21" terrain=",,,1">
  <objectgroup draworder="index">
   <object id="1" x="16" y="32">
    <polygon points="0,0 16,-16 16,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="22" terrain=",,1,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="32">
    <polygon points="0,0 0,-16 16,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="23">
  <objectgroup draworder="index">
   <object id="1" x="16" y="16">
    <polygon points="0,0 16,-16 16,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="24">
  <objectgroup draworder="index">
   <object id="1" x="0" y="16">
    <polygon points="0,0 16,0 32,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="25">
  <objectgroup draworder="index">
   <object id="1" x="0" y="32">
    <polygon points="0,0 16,-16 32,-16 32,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="26">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 16,16 16,32 0,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="27" terrain="1,1,1,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 32,0 32,16 16,16 16,32 0,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="28" terrain="1,1,,1">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 32,0 32,32 16,32 16,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="32" terrain="1,1,1,1">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="33">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 32,32 32,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="34">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 0,32 32,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="35" terrain=",0,,">
  <objectgroup draworder="index">
   <object id="2" x="16" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="36" terrain="0,,,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="37" terrain="0,0,,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="32" height="16"/>
  </objectgroup>
 </tile>
 <tile id="38" terrain=",,0,0">
  <objectgroup draworder="index">
   <object id="1" x="0" y="16" width="32" height="16"/>
  </objectgroup>
 </tile>
 <tile id="39" terrain=",0,,">
  <objectgroup draworder="index">
   <object id="1" x="16" y="0">
    <polygon points="0,0 16,16 16,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="40" terrain="0,,,"/>
 <tile id="41">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 16,16 32,16 32,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="42">
  <objectgroup draworder="index">
   <object id="1" x="16" y="16">
    <polygon points="0,0 -16,16 -16,-16 0,-16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="43">
  <objectgroup draworder="index">
   <object id="1" x="16" y="0">
    <polygon points="0,0 0,16 16,32 16,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="44">
  <objectgroup draworder="index">
   <object id="2" x="0" y="0">
    <polygon points="0,0 32,0 16,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="45" terrain="0,,0,0">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 0,32 32,32 32,16 16,16 16,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="46" terrain=",0,0,0">
  <objectgroup draworder="index">
   <object id="1" x="16" y="0">
    <polygon points="0,0 16,0 16,32 -16,32 -16,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="47">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 32,32 32,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="48">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 32,0 0,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="49" terrain=",1,,">
  <objectgroup draworder="index">
   <object id="1" x="16" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="50" terrain="1,,,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="51" terrain="1,1,,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="32" height="16"/>
  </objectgroup>
 </tile>
 <tile id="52" terrain=",,1,1">
  <objectgroup draworder="index">
   <object id="1" x="0" y="16" width="32" height="16"/>
  </objectgroup>
 </tile>
 <tile id="53" terrain=",1,,">
  <objectgroup draworder="index">
   <object id="1" x="16" y="0">
    <polygon points="0,0 16,16 16,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="54" terrain="1,,,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="16">
    <polygon points="0,0 0,-16 16,-16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="55">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 16,16 32,16 32,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="56">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 16,0 16,16 0,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="57">
  <objectgroup draworder="index">
   <object id="1" x="16" y="0">
    <polygon points="0,0 0,16 16,32 16,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="58">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 32,0 16,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="59" terrain="1,,1,1">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0">
    <polygon points="0,0 16,0 16,16 32,16 32,32 0,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="60" terrain=",1,1,1">
  <objectgroup draworder="index">
   <object id="1" x="16" y="0">
    <polygon points="0,0 16,0 16,32 -16,32 -16,16 0,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="64">
  <properties>
   <property name="ObjectID" value=""/>
  </properties>
 </tile>
 <tile id="65">
  <properties>
   <property name="ObjectID" value=""/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
</tileset>
