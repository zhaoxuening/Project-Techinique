<?php
header("Access-Control-Allow-Origin: *");

class Users {
   private $user_id;
   private $user_name;
   private $user_password;
   private $user_email;
   private $user_created_time;

   public function __construct(array $donnees) {
      if (isset($donnees['user_id'])) {
         $this->user_id = $donnees['user_id'];
      }
      if (isset($donnees['user_name'])) {
         $this->user_name = $donnees['user_name'];
      }
      if (isset($donnees['user_password'])) {
         $this->user_password = $donnees['user_password'];
      }
      if (isset($donnees['user_email'])) {
         $this->user_email = $donnees['user_email'];
      }
      if (isset($donnees['user_created_time'])) {
         $this->user_created_time = $donnees['user_created_time'];
      }
   }

   public function getUserId() { return $this->user_id; }
   public function getUserName() { return $this->user_name; }
   public function getUserPassword() { return $this->user_password; }
   public function getUserEmail() { return $this->user_email; }
   public function getCreatedTime() { return $this->user_created_time; }

   public function setId($user_id) {
      $this->user_id = (int) $user_id;
   }

   public function setUserName($user_name) {
      $this->user_name = $user_name;
   }

   public function setUserPassword($user_password) {
      $this->user_password = $user_password;
   }

   public function setEmail($user_email) {
      $this->user_email = $user_email;
   }

   public function setCreatedTime($user_created_time) {
      $this->user_created_time = (int) $user_created_time;
   }
}

class Tags {
   private $tag_id;
   private $tag_name;
   private $tag_parent;

   public function __construct(array $donnees) {
      if (isset($donnees['tag_id'])) {
         $this->tag_id = $donnees['tag_id'];
      }
      if (isset($donnees['tag_name'])) {
         $this->tag_name = $donnees['tag_name'];
      }
      if (isset($donnees['tag_parent'])) {
         $this->tag_parent = $donnees['tag_parent'];
      }
   }

   public function getTagId() { return $this->tag_id; }
   public function getTagName() { return $this->tag_name; }
   public function getTagParent() { return $this->tag_parent; }

   public function setTagId($tag_id) {
      $this->tag_id = (int) $tag_id;
   }

   public function setTagName($tag_name) {
      $this->tag_name = $tag_name;
   }

   public function setTagParent($tag_parent) {
      $this->tag_parent = $tag_parent;
   }
}

class Groups {
   private $group_id;
   private $group_name;
   private $group_creator;
   private $group_type;
   private $group_created_time;

   public function __construct(array $donnees) {
      if (isset($donnees['group_id'])) {
         $this->group_id = $donnees['group_id'];
      }
      if (isset($donnees['group_name'])) {
         $this->group_name = $donnees['group_name'];
      }
      if (isset($donnees['group_creator'])) {
         $this->group_creator = $donnees['group_creator'];
      }
      if (isset($donnees['group_type'])) {
         $this->group_type = $donnees['group_type'];
      }
      if (isset($donnees['group_created_time'])) {
         $this->group_created_time = $donnees['group_created_time'];
      }
   }

   public function getGroupId() { return $this->group_id; }
   public function getGroupName() { return $this->group_name; }
   public function getGroupCreator() { return $this->group_creator; }
   public function getGroupType() { return $this->group_type; }
   public function getCreatedTime() { return $this->group_created_time; }

   public function setGroupId($group_id) {
      $this->group_id = (int) $group_id;
   }

   public function setGroupName($group_name) {
      $this->group_name = $group_name;
   }

   public function setGroupCreator($group_creator) {
      $this->group_creator = $group_creator;
   }

   public function setGroupType($group_type) {
      $this->group_type = $group_type;
   }

   public function setCreatedTime($group_created_time) {
      $this->group_created_time = (int) $group_created_time;
   }
}

class Posts {
   private $post_id;
   private $post_url;
   private $post_title;
   private $post_description;
   private $post_type;
   private $post_priorite;
   private $post_created_time;
   private $post_creator;

   public function __construct(array $donnees) {
      if (isset($donnees['post_id'])) {
         $this->post_id = $donnees['post_id'];
      }
      if (isset($donnees['post_url'])) {
         $this->post_url = $donnees['post_url'];
      }
      if (isset($donnees['post_title'])) {
         $this->post_title = $donnees['post_title'];
      }
      if (isset($donnees['post_description'])) {
         $this->post_description = $donnees['post_description'];
      }
      if (isset($donnees['post_type'])) {
         $this->post_type = $donnees['post_type'];
      }
      if (isset($donnees['post_priorite'])) {
         $this->post_priorite = $donnees['post_priorite'];
      }
      if (isset($donnees['post_created_time'])) {
         $this->post_created_time = $donnees['post_created_time'];
      }
      if (isset($donnees['post_creator'])) {
         $this->post_creator = $donnees['post_creator'];
      }
   }

   public function getPostId() { return $this->post_id; }
   public function getPostUrl() { return $this->post_url; }
   public function getPostTitle() { return $this->post_title; }
   public function getPostDescription() { return $this->post_description; }
   public function getPostType() { return $this->post_type; }
   public function getPostPriorite() { return $this->post_priorite; }
   public function getCreatedTime() { return $this->post_created_time; }
   public function getPostCreator() { return $this->post_creator; }

   public function setPostId($post_id) {
      $this->post_id = (int) $post_id;
   }

   public function setPostUrl($post_url) {
      $this->post_url = $post_url;
   }

   public function setPostTitle($post_title) {
      $this->post_title = $post_title;
   }

   public function setPostDescription($post_description) {
      $this->post_description = $post_description;
   }

   public function setPostType($post_type) {
      $this->post_type = (int) $post_type;
   }

   public function setPostPriorite($post_priorite) {
      $this->post_priorite = (int) $post_priorite;
   }

   public function setCreatedTime($post_created_time) {
      $this->post_created_time = (int) $post_created_time;
   }

   public function setPostCreator($post_creator) {
      $this->post_creator = (int) $post_creator;
   }
}

class postTags {

	private $post_id;
	private $tag_id;

	public function __construct(array $donnees) {
		if (isset($donnees['post_id'])){
			$this->post_id = $donnees['post_id'];
		}
		if (isset($donnees['tag_id'])){
			$this->tag_id = $donnees['tag_id'];
		}
	}

	public function getPostId() { return $this->post_id; }
	public function getTagId() { return $this->tag_id; }

	public function setPostId($post_id){
		$this->post_id = (int) $post_id;
	}

	public function setTagId($tag_id){
		$this->tag_id = (int) $tag_id;
	}

}

class logs {
     private $log_id;
    private $message;
    private $log_time;

    public function __construct(array $donnees) {
        if (isset($donnees['log_id'])) {
            $this->log_id = $donnees['log_id'];
        }
        if (isset($donnees['message'])) {
            $this->message = $donnees['message'];
        }
        if (isset($donnees['log_time'])) {
            $this->log_time = $donnees['log_time'];
        }
    }
    public function getLogId()
    {
        return $this->log_id;
    }
    public function setLogId($log_id)
    {
        $this->log_id = (int) $log_id;
    }

    public function getLogTime()
    {
        return $this->log_time;
    }

    public function setLogTime($log_time)
    {
        $this->log_time = (int) $log_time;
    }

    public function getMessage()
    {
        return $this->message;
    }

    public function setMessage($message)
    {
        $this->message = $message;
    }


}

/*
 * class manager
 *
 */

class UsersManager {
   private $_db;

   public function __construct($db) {
      $this->setDb($db);
   }

   public function add($user_name, $user_password, $user_email, $user_created_time) {
      $sql = 'INSERT INTO users VALUES (DEFAULT, "'.$user_name.'", "'.$user_password.'", "'.$user_email.'", "'.$user_created_time.'" )';
       $requete = $this->_db->prepare($sql);
      $requete->execute();
       return $this->findUserByLogin($user_name);
   }

   public function delete($userId) {
      $this->_db->exec('DELETE FROM users WHERE user_id = "'.$userId.'" ');
   }

   public function update(Users $users) {
      $requete = $this->_db->prepare('UPDATE users SET  user_id = :user_id, user_name = :user_name, user_password = :user_password, user_email = :user_email, user_created_time = :user_created_time');
      $requete->bindValue(':user_id', $users->getUserId(), PDO::PARAM_INT);
      $requete->bindValue(':user_name', $users->getUserName(), PDO::PARAM_INT);
      $requete->bindValue(':user_password', $users->getUserPassword(), PDO::PARAM_INT);
      $requete->bindValue(':user_email', $users->getUserEmail() , PDO::PARAM_INT);
      $requete->bindValue(':user_created_time', $users->getCreatedTime(), PDO::PARAM_INT);
      $requete->execute();
   }

   public function checkLoginPw($login, $password) {
      $sql = 'SELECT * FROM users WHERE user_name= "'.$login.'" AND user_password= "'.$password.'"';
      $requete = $this->_db->prepare($sql);
      $requete->execute();
      $row = $requete->fetch();
      return $row['user_id'];
   }

   public function findUserById($id) {
      $sql = 'SELECT * FROM users WHERE user_id= "'.$id.'"';
      $requete = $this->_db->prepare($sql);
      $requete->execute();
      $row = $requete->fetch();
      return $row['user_name'];
   }

   public function findUserByLogin($login) {
      $sql = 'SELECT * FROM users WHERE user_name LIKE "%' . $login . '%"';
      $requete = $this->_db->prepare($sql);
      $requete->execute();
      $row = $requete->fetch();
      return $row['user_id'];
   }

   public function findUserByEmail($email) {
         $sql = 'SELECT * FROM users WHERE user_email= "'.$email.'"';
         $requete = $this->_db->prepare($sql);
         $requete->execute();
         $row = $requete->fetch();
         return $row['user_id'];
      }

   public function setDb(PDO $db) {
      $this->_db = $db;
   }
}

class TagsManager {
   private $_db;

   public function __construct($db) {
      $this->setDb($db);
   }

   public function add($tag_name, $tag_parent) {
	  $sql = 'INSERT INTO tags VALUES (DEFAULT, "'.$tag_name.'", "'.$tag_parent.'")';
      $requete = $this->_db->prepare($sql);
      $requete->execute();
   }


   public function delete(Tags $tags) {
      $this->_db->exec('DELETE FROM tags WHERE tag_id = '.$tags->getTagId());
   }

   public function update(Tags $tags) {
      $requete = $this->_db->prepare('UPDATE tags SET  tag_id = :tag_id, tag_name = :tag_name, tag_parent = :tag_parent');
      $requete->bindValue(':user_id', $tags->getTagId(), PDO::PARAM_INT);
      $requete->bindValue(':user_name', $tags->getTagName(), PDO::PARAM_INT);
      $requete->bindValue(':user_password', $tags->getTagParent(), PDO::PARAM_INT);
      $requete->execute();
   }

   public function findTagByName($tag_name) {
      $sql = 'SELECT * FROM tags WHERE tag_name= "'.$tag_name.'"';
      $requete = $this->_db->prepare($sql);
      $requete->execute();
      $row = $requete->fetch();
      return $row['tag_id'];
   }

    public function findTagById($tag_id) {
        $sql = 'SELECT * FROM tags WHERE tag_id= "'.$tag_id.'"';
        $requete = $this->_db->prepare($sql);
        $requete->execute();
        $row = $requete->fetch();
        return $row['tag_name'];
    }
   
   public function findTagsByUser($userId)
    {
        $sql = 'SELECT * FROM posts, tags, post_tags WHERE posts.post_creator= "' . $userId . '" AND posts.post_id=post_tags.post_id AND post_tags.tag_id=tags.tag_id';
        $requete = $this->_db->prepare($sql);
        $requete->execute();
        $row = $requete->fetch();
        return $row['tag_name'];
//        $sql = 'SELECT * FROM group_members, groups WHERE group_members.member_id= "' . $userId . '" AND group_members.group_id=groups.group_id';
//        $requete = $this->_db->prepare($sql);
//        $requete->execute();
//        $row = $requete->fetch();
//        return $row['group_name'];
    }

    public function findTagsParentByUser($userId)
    {
        $sql = 'SELECT * FROM posts, tags, post_tags WHERE posts.post_creator= "' . $userId . '" AND posts.post_id=post_tags.post_id AND post_tags.tag_id=tags.tag_id';
        $requete = $this->_db->prepare($sql);
        $requete->execute();
        $row = $requete->fetch();
        return $row['tag_parent'];
    }
   public function setDb(PDO $db) {
      $this->_db = $db;
   }
}

class GroupsManager {
   private $_db;

   public function __construct($db) {
      $this->setDb($db);
   }

   public function add($group_id, $group_name, $group_creator, $group_type, $group_created_time) {
      $requete = $this->_db->prepare('INSERT INTO groups SET group_id = "'.$group_id.'", group_name = "'.$group_name.'",group_creator = "'.$group_creator.'",group_type = "'.$group_type.'",group_created_time = "'.$group_created_time.'" ');
      $requete->execute();
   }

   public function delete(Groups $groups) {
      $this->_db->exec('DELETE FROM groups WHERE group_id = '.$groups->getGroupId());
   }

   public function update(Groups $groups) {
      $requete = $this->_db->prepare('UPDATE groups SET  group_id = :group_id, group_name = :group_name, group_creator = :group_creator, group_type = :group_type, group_created_time = :group_created_time');
      $requete->bindValue(':group_id', $groups->getGroupId(), PDO::PARAM_INT);
      $requete->bindValue(':group_name', $groups->getGroupName(), PDO::PARAM_INT);
      $requete->bindValue(':group_creator', $groups->getGroupCreator(), PDO::PARAM_INT);
      $requete->bindValue(':group_type', $groups->getGroupType() , PDO::PARAM_INT);
      $requete->bindValue(':group_created_time', $groups->getCreatedTime(), PDO::PARAM_INT);
      $requete->execute();
   }

   public function setDb(PDO $db) {
      $this->_db = $db;
   }

    public function findGroupsByName($group_name){
        $sql = 'SELECT * FROM groups WHERE group_name LIKE "%' . $group_name . '%"';
        $requete = $this->_db->prepare($sql);
        $requete->execute();
        $row = $requete->fetch();
        return $row['group_name'];

    }

    public function findGroupsByUser($userId)
    {
        $sql = 'SELECT * FROM group_members, groups WHERE group_members.member_id= "' . $userId . '" and group_members.group_id=groups.group_id';
        $requete = $this->_db->prepare($sql);
        $requete->execute();
        $row = $requete->fetch();
        return $row['group_name'];
    }
}

class PostsManager {
   private $_db;

   public function __construct($db) {
      $this->setDb($db);
   }

   public function add($post_url, $post_title, $post_description, $post_type, $post_priorite, $post_created_time, $post_creator) {

	  $sql = 'INSERT INTO posts VALUES (DEFAULT, "'.$post_url.'", "'.$post_title.'", "'.$post_description.'", "'.$post_type.'", "'.$post_priorite.'", "'.$post_created_time.'", "'.$post_creator.'" )';
      $requete = $this->_db->prepare($sql);
      $requete->execute();
   }

   public function findAllPosts() {
        $posts = array();
        $sql = 'SELECT * FROM posts';
        $requete = $this->_db->query($sql);
        while($donnees = $requete->fetch()) {
            array_push($posts, $donnees);
        }
        return $posts;
   }

   public function findPostByName($post_title) {
      $sql = 'SELECT * FROM posts WHERE post_title= "'.$post_title.'"';
      $requete = $this->_db->prepare($sql);
      $requete->execute();
      $row = $requete->fetch();
      return $row['post_id'];
   }
   
   public function findAllPostsByUser($userId) {
        $posts = array();
        $sql = 'SELECT * FROM posts WHERE posts.post_creator= "' . $userId . '"';
        $requete = $this->_db->query($sql);
        while($donnees = $requete->fetch()) {
            array_push($posts, $donnees);
        }
        return $posts;
   }

    public function findPostByKeyword($keyword) {
        $posts = array();
        $sql = 'SELECT * FROM posts WHERE post_description LIKE "%'.$keyword.'%"';
        $requete = $this->_db->query($sql);
        while($donnees = $requete->fetch()) {
            array_push($posts, $donnees);
        }
        return $posts;
    }

    public function setDb(PDO $db) {
      $this->_db = $db;
   }
}

class PostTagsManager{

	private $_db;

	public function __construct($db){
		$this->setDb($db);
	}

	public function add($post_id, $tag_id){
		$sql = 'INSERT INTO post_tags VALUES ("'.$post_id.'", "'.$tag_id.'")';
		$requete = $this->_db->prepare($sql);
		$requete->execute();
	}

    public function findPostsByTag($tag) {
        $posts = array();
        $sql = 'SELECT * FROM post_tags, posts, tags WHERE tags.tag_name LIKE "%' .$tag. '%" AND post_tags.tag_id= tags.tag_id AND posts.post_id=post_tags.post_id ';
        $requete = $this->_db->query($sql);
        while($donnees = $requete->fetch()) {
            array_push($posts, $donnees);
        }
        return $posts;
    }

	public function setDb(PDO $db){
		$this->_db = $db;
	}
}

class LogsManager{

    private $_db;
    public function  __construct($db){
        $this->setDb($db);
    }

    public function add($message, $log_time){
        $sql = 'INSERT INTO logs VALUES (DEFAULT ,"'.$message.'", "'.$log_time.'")';
        $requete = $this->_db->prepare($sql);
        $requete->execute();
    }

    public function findAllLogs() {
        $logs = array();
        $sql = 'SELECT * FROM logs';
        $requete = $this->_db->query($sql);
        while($donnees = $requete->fetch()) {
            array_push($logs, $donnees);
        }
        return $logs;
    }

    public function findLogByMessage($mess) {
        $logs = array();
        $sql = 'SELECT * FROM logs WHERE message LIKE "%' . $mess . '%"';
        $requete = $this->_db->query($sql);
        while($donnees = $requete->fetch()) {
            array_push($logs, $donnees);
        }
        return $logs;
    }

    public function setDb(PDO $db){
        $this->_db = $db;
    }
}
?>
