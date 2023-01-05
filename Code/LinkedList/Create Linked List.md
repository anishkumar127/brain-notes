
```java
package LinkedList.Create;  
  
class Node {  
    int data;  
    Node next;  
  
    public Node(int data) {  
        this.data = data;  
        this.next = null;  
    }  
}  
public class LinkedListCreate {  
    public static void main(String[] args) {  
       Node node1 = new Node(1);  
       Node node2 = new Node(2);  
       Node node3 = new Node(3);  
       Node node4 = new Node(4);  
       node1.next = node2;  
       node2.next = node3;  
       node3.next = node4;  
        System.out.println(node1.next.data);  
    }  
}
```

output 2.


but this is wrong. because of the my **Node Class** outside the LinkedListCreate class. 
any other class. also can access that and also can modify that. so we
need to create the Node Class inside the LinkedListCreate Class.


# next fixing this issue.

```java
package LinkedList.Create;  
  
  
public class LinkedListCreate {  
    Node head;  
    Node tail;  
    int size;  
    // initialise with default value.  
    public LinkedListCreate(){  
        this.head = null;  
        this.tail = null;  
        this.size = 0;  
    }  
    class Node {  
        int data;  
        Node next;  
  
        public Node(int data) {  
            this.data = data;  
            this.next = null;  
        }  
    }  
    public static void main(String[] args) {  
        // now we can't access via Node node = new Node(1); like that.  
  
//        we need to now create the object of LinkedListCreate class.  
  
        LinkedListCreate list = new LinkedListCreate();  
  
        // at this time add not work because of the add method not crated.  
        // but above structure is working.list.add(1);  
        list.add(2);  
        list.add(3);  
        list.add(4);  
  
    }  
}
```

this is the right way to create the Node class inside the LinkedListCreate class. and then create the object of the LinkedListCreate class.

-> also we defined the tail and head and size into the LinkedListCreate class. and also defined the initialize value using the Constructor.

# next

```java
package LinkedList.Create;  
  
  
public class LinkedListCreate {  
    Node head;  
    Node tail;  
    int size;  
    // initialise with default value.  
    public LinkedListCreate(){  
        this.head = null;  
        this.tail = null;  
        this.size = 0;  
    }  
    class Node {  
        int data;  
        Node next;  
  
        public Node(int data) {  
            this.data = data;  
            this.next = null;  
        }  
    }  
  
    // add method.  
    public void add(int data){  
        Node newNode = new Node(data);  
  
        if(head==null){  
            head = newNode;  
            tail = newNode;  
        }else{  
            tail.next = newNode;  
            tail = newNode;  
        }  
    }  
    public static void main(String[] args) {  
        // now we can't access via Node node = new Node(1); like that.  
//        we need to now create the object of LinkedListCreate class.  
        LinkedListCreate list = new LinkedListCreate();  
  
        // adding to the list.  
            list.add(1);  
            list.add(2);  
  
    }  
}
```

## understand the add method using tail pointer.

```java
// add method.  
public void add(int data){  
    Node newNode = new Node(data);  
  
    if(head==null){  
        head = newNode;  
        tail = newNode;  
    }else{  
        tail.next = newNode;  
        tail = newNode;  
    }  
}
```

list.add(1);

-> this case head and tail null then we assign that 1 to the head and tail.

[1 | null] -> newNode assume like that.

and we assign the that 1 to the head and tail.

now next.

list.add(2);

now check. head is not null. then if didn't go inside the if condition. we directly go the else condition.

now tail pointing to the 1. and our newNode is the.  [ 2 | null];
so what we do. ?

tail is [1 | null] then we do. 1.next going to be 2. 
so tail.next = newNode.  - >  1.next = 2;

and we also need to update the tail pointer. because tail still pointing to the 1. we don't need to tail point to the 1. because 1 should belongs to the head pointer.

so we update our tail pointer. and we do  tail = newNode - > 1 = 2 wo its become  2.
now tail is 2.  assume   [ 2| NULL]

and whole linked list is. -> Head [ 1 -> tail 2 -> NULL]



# next

```java
package LinkedList.Create;  
  
  
public class LinkedListCreate {  
    Node head;  
    Node tail;  
    int size;  
    // initialise with default value.  
    public LinkedListCreate(){  
        this.head = null;  
        this.tail = null;  
        this.size = 0;  
    }  
    class Node {  
        int data;  
        Node next;  
  
        public Node(int data) {  
            this.data = data;  
            this.next = null;  
        }  
    }  
  
    // add method.  
    public void addLast(int data){  
        Node newNode = new Node(data);  
  
        if(head==null){  
            head = newNode;  
            tail = newNode;  
        }else{  
            tail.next = newNode;  
            tail = newNode;  
        }  
  
        size++;  
    }  
    public static void main(String[] args) {  
        // now we can't access via Node node = new Node(1); like that.  
//        we need to now create the object of LinkedListCreate class.  
        LinkedListCreate list = new LinkedListCreate();  
  
        // adding to the list.  
            list.addLast(1);  
            list.addLast(2);  
        System.out.println(list.size); // size of linkedlist.  
    }  
}
```


# addLast , Display , Printing 

```java
package LinkedList.Create;  
  
  
public class LinkedListCreate {  
    Node head;  
    Node tail;  
    int size;  
    // initialise with default value.  
    public LinkedListCreate(){  
        this.head = null;  
        this.tail = null;  
        this.size = 0;  
    }  
    class Node {  
        int data;  
        Node next;  
  
        public Node(int data) {  
            this.data = data;  
            this.next = null;  
        }  
    }  
  
    // add method.  
    public void addLast(int data){  
        Node newNode = new Node(data);  
  
        if(head==null){  
            head = newNode;  
            tail = newNode;  
        }else{  
            tail.next = newNode;  
            tail = newNode;  
        }  
  
        size++;  
    }  
    public static void main(String[] args) {  
        // now we can't access via Node node = new Node(1); like that.  
//        we need to now create the object of LinkedListCreate class.  
        LinkedListCreate list = new LinkedListCreate();  
  
        // adding to the list.  
            list.addLast(1);  
            list.addLast(2);  
            list.addLast(3);  
            list.addLast(4);  
        System.out.println(list.size); // size of linkedlist.  
  
        System.out.println(list.head.data); // 1.  
        System.out.println(list.head.next.data); // 2.  
  
        System.out.println("------------------------------------");  
        // using loop.  
       Node  newHead = list.head;  
        for(int i=0; i<list.size; i++){  
            System.out.println(newHead.data);  
            newHead= newHead.next;  
        }  
  
        System.out.println("------------------------------------");  
  
        // we can also do using the function.  
        dispaly(list.head);  
    }  
    private static void dispaly(Node head){  
        Node curr = head;  
        while(curr!=null){  
            System.out.print(curr.data + " -> " );  
            curr = curr.next;  
        }  
        System.out.println("NULL");  
  
    }  
}
```


# addFirst

```java
package LinkedList.Create;  
  
  
public class LinkedListCreate {  
    Node head;  
    Node tail;  
    int size;  
    // initialise with default value.  
    public LinkedListCreate(){  
        this.head = null;  
        this.tail = null;  
        this.size = 0;  
    }  
    class Node {  
        int data;  
        Node next;  
  
        public Node(int data) {  
            this.data = data;  
            this.next = null;  
        }  
    }  
  
    // add method.  
    public void addLast(int data){  
        Node newNode = new Node(data);  
  
        if(head==null){  
            head = newNode;  
            tail = newNode;  
        }else{  
            tail.next = newNode;  
            tail = newNode;  
        }  
  
        size++;  
    }  
    public static void main(String[] args) {  
        // now we can't access via Node node = new Node(1); like that.  
//        we need to now create the object of LinkedListCreate class.  
        LinkedListCreate list = new LinkedListCreate();  
  
        // adding to the list.  
            list.addLast(1);  
            list.addLast(2);  
            list.addLast(3);  
            list.addLast(4);  
        System.out.println(list.size); // size of linkedlist.  
  
        System.out.println(list.head.data); // 1.  
        System.out.println(list.head.next.data); // 2.  
  
        System.out.println("------------------------------------");  
        // using loop.  
       Node  newHead = list.head;  
        for(int i=0; i<list.size; i++){  
            System.out.println(newHead.data);  
            newHead= newHead.next;  
        }  
  
        System.out.println("------------------------------------");  
  
        // we can also do using the function.  
        dispaly(list.head);  
  
        list.addFirst(44);  
        list.addFirst(45);  
        dispaly(list.head);  
  
    }  
    private static void dispaly(Node head){  
        Node curr = head;  
        while(curr!=null){  
            System.out.print(curr.data + " -> " );  
            curr = curr.next;  
        }  
        System.out.println("NULL");  
  
    }  
  
    private void addFirst(int data){  
        Node newNode = new Node(data);  
        if(head==null) {  
            head= newNode;  
        }else{  
            newNode.next = head;  
            head = newNode;  
        }  
    }  
}
```

