public class LinkedList {
    Node head;


    public void addCycleAtStart(){
        if (head == null) {
            System.out.println("List is empty. Cannot create a cycle.");
            return;
        }
        Node currNode=head;

        while(currNode.next!=null){
            currNode=currNode.next;
        }
        currNode.next=head;
    }

    public void addCycleAtMidNode() {
        if (head == null) {
            System.out.println("List is empty. Cannot create a cycle.");
            return;
        }

        Node slow = head;
        Node fast = head;

        // Use the slow and fast pointer approach to find the middle node
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Now slow is at the middle node, let's create the cycle
        Node curr = head;
        while (curr.next != null) {
            curr = curr.next;
        }

        // Connect the last node to the middle node to create a cycle
        curr.next = slow;
    }
    public void addFirst(String data){
        Node newNode=new Node(data);

        if(head==null){
            head=newNode;
            return;
        }

        newNode.next=head;
        head=newNode;
    }

    public void addLast(String data){
        Node newNode=new Node(data);

        if(head==null){
            head=newNode;
            return;
        }

        Node currNode=head;
        while(currNode.next!=null){
            currNode=currNode.next;
        }

        currNode.next=newNode;
    }

    public void printList(){
        if(head==null){
            System.out.println("List is empty!");
            return;
        }
        Node currNode=head;

        while(currNode!=null){
            System.out.print(currNode.data+"-->");
            currNode=currNode.next;
        }

        System.out.print("Null");
        System.out.println();
    }

    public String LinkedListCenter(){

        if(head==null){
            System.out.println("List is empty!");
            return "";
        }

        Node s_pointer=head,f_pointer=head;

        while(f_pointer.next != null && f_pointer.next.next != null){
            s_pointer=s_pointer.next;
            f_pointer=f_pointer.next.next;
        }

        return s_pointer.data;
    }
    public void deleteFirst(){
        if(head==null){
            System.out.println("List is empty");
            return;
        }

        head=head.next;
    }
    public void deleteLast(){
        if(head==null){
            System.out.println("List is empty");
            return;
        }

        if(head.next==null){
            head=null;
            return;
        }
        Node prevNode=head;
        Node currNode=head.next;

        while(currNode.next!=null){
            prevNode=currNode;
            currNode=currNode.next;
        }

        prevNode.next=null;
    }

    // delete node in linked list
    public void deleteNode(String data){
       // for list empty
       if(head==null){
           System.out.println("List is empty");
           return;
       }

       // for single node in list
       if(head.next==null && head.data.equals(data)){
            head=null;
            return;
       }


        // Case 3: Head node is the one to be deleted
        if (head.data.equals(data)) {
            head = head.next;
            return;
        }
       Node prevNode=head;
       Node currNode=head.next;
       while(currNode!=null){
           if(currNode.data.equals(data)){
               prevNode.next=currNode.next;
               return;
           }
           prevNode=currNode;
           currNode=currNode.next;
       }

        System.out.println("Node with data '" + data + "' not found.");

    }

    public void reverseList(){
        if(head==null||head.next==null){
            return;
        }

        Node prevNode=head;
        Node currNode=head.next;

        while(currNode!=null){
            Node nextNode=currNode.next;
            currNode.next=prevNode;

            //update
            prevNode=currNode;
            currNode=nextNode;
        }

        head.next=null;
        head=prevNode;
    }

    public void Delete_M_After_N(int N,int M){
        if(head==null){
            System.out.println("List is empty!");
            return;
        }
        Node curr=head;
        Node prev=null;

        while(curr!=null){

            for(int i=0;i<N&&curr!=null;i++){
                prev=curr;
                curr=curr.next;
            }

            if(curr==null){
                return;
            }

            for(int i=0;i<M&&curr!=null;i++){
                curr=curr.next;
            }


            // Link the last non-deleted node to the current node after skipping N nodes
            if (prev != null) {
                prev.next = curr;
            }

            // Move prev to the current node (after deletion)
            if (curr != null) {
                prev = curr;
            }

        }
    }

    public Node RemoveCycle(){
        Node slow=head;
        Node fast=head;

        boolean isCycle=false;
//      detect cycle in linked list
        // fast!=null&&fast.next!=null ----- for even and odd node
        while(fast!=null&&fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;

            if(slow==fast){
                isCycle=true;
                break;
            }
        }

        if(!isCycle){
            return null;
        }

//      find out starting point of cycle..
        slow=head;
        Node prev=null;
        while(slow!=fast){
            slow=slow.next;
            prev=fast;
            fast=fast.next;
        }

        prev.next=null; // remove cycle from list..

        return slow;  // here is a starting point
    }
}
